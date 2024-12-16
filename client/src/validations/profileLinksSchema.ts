import { EMPTY_FIELD } from "@/constants/validations"
import { z } from "zod"

const platformPatterns: { [key: string]: RegExp } = {
    "YouTube": /^https:\/\/www\.youtube\.com\/.+$/,
}

export const profileLinksSchema = z.object({
    profileLinks: z.array(z.object({
        id: z.string(),
        platform: z.string(),
        link: z.string().min(1, EMPTY_FIELD),
    }).refine(data => {
        const platformPattern = platformPatterns[data.platform]

        if (!platformPattern) {
            return true
        }

        return platformPattern.test(data.link)
    }, { message: "Please check the URL", path: ["link"] }))
})

export type ProfileLinksSchema = z.infer<typeof profileLinksSchema>