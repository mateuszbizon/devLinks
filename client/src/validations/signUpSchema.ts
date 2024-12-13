import { EMPTY_FIELD, INVALID_EMAIL, PASSWORD_LENGTH_INCORRECT, PASSWORDS_NOT_EQUAL } from "@/constants/validations"
import { z } from "zod"

export const signUpSchema = z.object({
    email: z.string().min(1, EMPTY_FIELD).email(INVALID_EMAIL),
    password: z.string().min(8, PASSWORD_LENGTH_INCORRECT),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: PASSWORDS_NOT_EQUAL
})

export type SignUpSchema = z.infer<typeof signUpSchema>