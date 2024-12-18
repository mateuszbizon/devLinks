import { EMAIL_EMPTY, PASSWORD_EMPTY } from "../constants/validations"
import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().min(1, EMAIL_EMPTY),
    password: z.string().min(1, PASSWORD_EMPTY),
})

export type SignInSchema = z.infer<typeof signInSchema>