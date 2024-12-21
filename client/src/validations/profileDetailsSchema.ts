import { EMPTY_FIELD, INVALID_EMAIL } from "@/constants/validations";
import { z } from "zod";

export const profileDetailsSchema = z.object({
    name: z.string().min(1, EMPTY_FIELD),
    surname: z.string().min(1, EMPTY_FIELD),
    email: z.string().email(INVALID_EMAIL).or(z.literal("")),
    image: z.any().refine(file => file instanceof File, { message: EMPTY_FIELD }).nullable()
})

export type ProfileDetailsSchema = z.infer<typeof profileDetailsSchema>