import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { signInSchema, SignInSchema } from "../../dtos/signInSchema";
import { getUserByEmailService } from "../../services/users/getUserByEmailService";
import { BadRequestError } from "../../errors/BadRequestError";
import { MESSAGE_CODES, MESSAGES } from "../../constants/messages";
import bcrypt from "bcryptjs"
import { SignInResponse } from "../../types/userResponse";
import generateRefreshToken from "../../utils/generateRefreshToken";
import generateAccessToken from "../../utils/generateAccessToken";
import { TOKEN } from "../../constants";
import { MainResponse } from "../../types";

export async function signInController(req: Request<{}, {}, SignInSchema>, res: Response<MainResponse<SignInResponse>>, next: NextFunction) {
    const { email, password } = req.body
    
    try {
        const validationResult = signInSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message, MESSAGE_CODES.validationFail))
        }

        const existingUser = await getUserByEmailService(email)

        if (!existingUser) {
            return next(new BadRequestError(MESSAGES.auth.invalidCredentials, MESSAGE_CODES.invalidCredentials))
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!passwordCorrect) {
            return next(new BadRequestError(MESSAGES.auth.invalidCredentials, MESSAGE_CODES.invalidCredentials))
        }

        const refreshToken = generateRefreshToken({
            id: existingUser.id,
            email: existingUser.email
        })

        const accessToken = generateAccessToken({
            id: existingUser.id
        })

        res.cookie(TOKEN, refreshToken, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
            domain: ".vercel.app"  
        })

        res.status(200).json({
            message: MESSAGES.user.userSignIn,
            data: {
                token: accessToken,
                user: {
                    id: existingUser.id,
                    email: existingUser.email
                }
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}