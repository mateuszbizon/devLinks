import { NextFunction, Request, Response } from "express"
import { MainResponse } from "../../types"
import { USER_ID } from "../../constants"
import { MESSAGE_CODES, MESSAGES } from "../../constants/messages"
import { DatabaseError } from "../../errors/DatabaseError"
import { updateLinksSchema, UpdateLinksSchema } from "../../dtos/updateLinksSchema"
import { BadRequestError } from "../../errors/BadRequestError"
import { updateUserLinksService } from "../../services/users/updateUserLinksService"

export async function updateUserLinksController(req: Request<{}, {}, UpdateLinksSchema>, res: Response<MainResponse>, next: NextFunction) {
    const { links } = req.body
    const userId = res.locals[USER_ID]
    
    try {
        const validationResult = updateLinksSchema.safeParse(req.body)

        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message, MESSAGE_CODES.validationFail))
        }

        const updatedLinks = await updateUserLinksService({ links }, userId)
        
        res.status(200).json({
            message: MESSAGES.user.userDetailsUpdated,
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
    
}