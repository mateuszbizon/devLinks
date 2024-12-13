import { EMPTY_FIELD } from "@/constants/validations"
import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().min(1, EMPTY_FIELD),
    password: z.string().min(1, EMPTY_FIELD),
})

export type SignInSchema = z.infer<typeof signInSchema>