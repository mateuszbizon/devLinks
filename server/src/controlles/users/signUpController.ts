import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { signUpSchema, SignUpSchema } from "../../dtos/signUpSchema";
import { BadRequestError } from "../../errors/BadRequestError";
import { MESSAGE_CODES, MESSAGES } from "../../constants/messages";
import { getUserByEmailService } from "../../services/users/getUserByEmailService";
import bcrypt from "bcryptjs"
import { createUserService } from "../../services/users/createUserService";
import { MainResponse } from "../../types";

export async function signUpController(req: Request<{}, {}, SignUpSchema>, res: Response<MainResponse>, next: NextFunction) {
    const { email, password } = req.body
    
    try {
        const validationResult = signUpSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message, MESSAGE_CODES.validationFail))
        }

        const existingUser = await getUserByEmailService(email)

        if (existingUser) {
            return next(new BadRequestError(MESSAGES.user.emailTaken, MESSAGE_CODES.emailTaken))
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const createdUser = await createUserService({ email, password: hashedPassword })

        res.status(201).json({
            message: MESSAGES.user.userCreated,
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}