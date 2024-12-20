import { NextFunction, Request, Response } from "express";
import { DatabaseError } from "../../errors/DatabaseError";
import { updateDetailsSchema, UpdateDetailsSchema } from "../../dtos/updateDetailsSchema";
import { BadRequestError } from "../../errors/BadRequestError";
import { MESSAGE_CODES, MESSAGES } from "../../constants/messages";
import { USER_ID } from "../../constants";
import { updateUserDetailsService } from "../../services/users/updateUserDetailsService";
import { MainResponse } from "../../types";
import { deleteTemporaryFile } from "../../utils/deleteTemporaryFile";
import { uploadImageToCloudinary } from "../../utils/cloudinary";

export async function updateUserDetailsController(req: Request<{}, {}, UpdateDetailsSchema>, res: Response<MainResponse>, next: NextFunction) {
    const { name, surname, email } = req.body
    const uploadedFile = req.file
    const userId = res.locals[USER_ID]
    
    try {
        const validationResult = updateDetailsSchema.safeParse({ name, surname, email })

        if (!validationResult.success) {
            return next(new BadRequestError(validationResult.error.errors[0].message, MESSAGE_CODES.validationFail))
        }

        let fileUrl: string | null = null

        if (uploadedFile) {
            fileUrl = await uploadImageToCloudinary(uploadedFile.path)

            if (!fileUrl) {
                return next(new DatabaseError())
            }
        }

        const updatedDetails = await updateUserDetailsService({ name, surname, email, image: fileUrl, userId })

        res.status(200).json({
            message: MESSAGES.user.userDetailsUpdated,
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    } finally {
        if (uploadedFile) {
            deleteTemporaryFile(uploadedFile.path)
        }
    }
}