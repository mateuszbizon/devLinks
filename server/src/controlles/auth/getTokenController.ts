import { NextFunction, Request, Response } from "express";
import { REFRESH_TOKEN, TOKEN } from "../../constants";
import { AuthenticationError } from "../../errors/AuthenticationError";
import { MESSAGES } from "../../constants/messages";
import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken"
import { MainResponse, RefreshTokenPayload } from "../../types";
import generateAccessToken from "../../utils/generateAccessToken";
import { SignInResponse } from "../../types/userResponse";

export async function getTokenController(req: Request, res: Response<MainResponse<SignInResponse>>, next: NextFunction) {
    try {
        const token = req.cookies[TOKEN]

        if (!token) {
            return next(new AuthenticationError(MESSAGES.auth.invalidToken))
        }

        const decodedToken = jwt.verify(token, REFRESH_TOKEN) as RefreshTokenPayload

        const accessToken = generateAccessToken({
            id: decodedToken.id
        })

        res.status(200).json({
            message: MESSAGES.auth.tokenRetrieved,
            data: {
                token: accessToken,
                user: {
                    id: decodedToken.id,
                    email: decodedToken.email
                }
            }
        })
    } catch (error) {
        console.error(error)

        if (error instanceof TokenExpiredError) {
            return next(new AuthenticationError(MESSAGES.auth.tokenExpired))
        }

        if (error instanceof JsonWebTokenError) {
            return next(new AuthenticationError(MESSAGES.auth.invalidToken))
        }

        next(new AuthenticationError())
    }
}