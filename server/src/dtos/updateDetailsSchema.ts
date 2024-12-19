import { NAME_EMPTY, SURNAME_EMPTY } from "../constants/validations";
import { z } from "zod";

export const profileDetailsSchema = z.object({
    name: z.string().min(1, NAME_EMPTY),
    surname: z.string().min(1, SURNAME_EMPTY),
    email: z.string().optional(),
    image: z.any().refine(file => file instanceof File).optional()
})

export type ProfileDetailsSchema = z.infer<typeof profileDetailsSchema>