import { EMPTY_FIELD } from "@/constants/validations";
import { z } from "zod";

export const profileDetailsSchema = z.object({
    name: z.string().min(1, EMPTY_FIELD),
    surname: z.string().min(1, EMPTY_FIELD),
    email: z.string().optional(),
    image: z.any().refine(file => file instanceof File, { message: EMPTY_FIELD }).optional()
})

export type ProfileDetailsSchema = z.infer<typeof profileDetailsSchema>