import { DatabaseError } from "../../errors/DatabaseError"
import { MainResponse } from "../../types"
import { Request, Response, NextFunction } from "express"
import { GetUserDetailsParams } from "../../types/params"
import { getUserByEmailService } from "../../services/users/getUserByEmailService"
import { NotFoundError } from "../../errors/NotFoundError"
import { MESSAGES } from "../../constants/messages"
import { getUserDetailsService } from "../../services/users/getUserDetailsService"
import { GetUserDetailsResponse } from "../../types/userResponse"

export async function getUserDetailsController(req: Request<GetUserDetailsParams>, res: Response<MainResponse<GetUserDetailsResponse>>, next: NextFunction) { 
    const { userEmail } = req.params
    
    try {
        const existingUser = await getUserByEmailService(userEmail)

        if (!existingUser) {
            return next(new NotFoundError(MESSAGES.user.userNotFound))
        }

        const userDetails = await getUserDetailsService(userEmail)

        res.status(200).json({
            message: MESSAGES.user.userDetailsRetrieved,
            data: {
                userDetails: userDetails?.userDetails
            }
        })
    } catch (error) {
        console.error(error)
        next(new DatabaseError())
    }
}