import { EMAIL_INVALID, NAME_EMPTY, SURNAME_EMPTY } from "../constants/validations";
import { z } from "zod";

export const updateDetailsSchema = z.object({
    name: z.string().min(1, NAME_EMPTY),
    surname: z.string().min(1, SURNAME_EMPTY),
    email: z.string().email(EMAIL_INVALID).or(z.literal("")),
    image: z.any().refine(file => file instanceof File).optional()
})

export type UpdateDetailsSchema = z.infer<typeof updateDetailsSchema>