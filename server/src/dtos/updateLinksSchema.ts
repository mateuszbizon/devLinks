import { PLATFORM_NAMES } from "../constants/index";
import { FIELD_EMPTY, URL_INCORRECT } from "../constants/validations"
import { z } from "zod"

const platformPatterns: { [key: string]: RegExp } = {
    [PLATFORM_NAMES.github]: /^https:\/\/(www\.)?github\.com\/.+$/,
    [PLATFORM_NAMES.frontendMentor]: /^https:\/\/(www\.)?frontendmentor\.io\/.+$/,
    [PLATFORM_NAMES.twitter]: /^https:\/\/(www\.)?twitter\.com\/.+$/,
    [PLATFORM_NAMES.linkedIn]: /^https:\/\/(www\.)?linkedin\.com\/.+$/,
    [PLATFORM_NAMES.youtube]: /^https:\/\/(www\.)?youtube\.com\/.+$/,
    [PLATFORM_NAMES.facebook]: /^https:\/\/(www\.)?facebook\.com\/.+$/,
    [PLATFORM_NAMES.twitch]: /^https:\/\/(www\.)?twitch\.tv\/.+$/,
    [PLATFORM_NAMES.devTo]: /^https:\/\/(www\.)?dev\.to\/.+$/,
    [PLATFORM_NAMES.codewars]: /^https:\/\/(www\.)?codewars\.com\/.+$/,
    [PLATFORM_NAMES.codepen]: /^https:\/\/(www\.)?codepen\.io\/.+$/,
    [PLATFORM_NAMES.freeCodeCamp]: /^https:\/\/(www\.)?freecodecamp\.org\/.+$/,
    [PLATFORM_NAMES.gitLab]: /^https:\/\/(www\.)?gitlab\.com\/.+$/,
    [PLATFORM_NAMES.hashnode]: /^https:\/\/(www\.)?hashnode\.com\/.+$/,
    [PLATFORM_NAMES.stackOverflow]: /^https:\/\/(www\.)?stackoverflow\.com\/.+$/,
}

export const updateLinksSchema = z.object({
    links: z.array(z.object({
        id: z.string(),
        platform: z.string(),
        link: z.string().min(1, FIELD_EMPTY),
    }).refine(data => {
        const platformPattern = platformPatterns[data.platform]

        if (!platformPattern) {
            return false
        }

        return platformPattern.test(data.link)
    }, { message: URL_INCORRECT, path: ["link"] }))
})

export type UpdateLinksSchema = z.infer<typeof updateLinksSchema>