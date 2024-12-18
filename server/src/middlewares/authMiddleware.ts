import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../errors/ForbiddenError";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken"
import { ACCESS_TOKEN, USER_ID } from "../constants";
import { AccessTokenPayload } from "../types";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1]

        if (!token) {
            return next(new ForbiddenError())
        }

        const decodedToken = jwt.verify(token, ACCESS_TOKEN) as AccessTokenPayload

        res.locals[USER_ID] = decodedToken.id

        next()
    } catch (error) {
        console.error(error)

        if (error instanceof TokenExpiredError) {
            return next(new ForbiddenError())
        }

        if (error instanceof JsonWebTokenError) {
            return next(new ForbiddenError())
        }

        next(new ForbiddenError())
    }
}