import { z } from "zod"

export const profileLinksSchema = z.object({
    profileLinks: z.array(z.object({
        id: z.string(),
        link: z.string().min(1, "Can't be empty"),
        platform: z.string(),
    }))
})

export type ProfileLinksSchema = z.infer<typeof profileLinksSchema>