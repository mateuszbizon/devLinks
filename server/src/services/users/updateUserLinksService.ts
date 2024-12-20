import { PrismaClient } from "@prisma/client";
import { UpdateLinksSchema } from "../../dtos/updateLinksSchema";

const prisma = new PrismaClient()

export async function updateUserLinksService(links: UpdateLinksSchema, userId: string) {
    return await prisma.userDetails.upsert({
        where: {
            userId: userId
        },
        create: {
            name: "",
            surname: "",
            email: "",
            image: null,
            links: links.links,
            userId: userId
        },
        update: {
            links: links.links
        },
    })
}