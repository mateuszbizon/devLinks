import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function getUserDetailsService(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email
        },
        select: {
            userDetails: {
                select: {
                    name: true,
                    surname: true,
                    links: true,
                    email: true,
                    image: true,
                }
            }
        }
    })
}