import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function createUserService({ email, password }: { email: string, password: string }) {
    return await prisma.user.create({
        data: {
            email: email,
            password: password
        },
        select: {
            id: true,
            email: true,
        }
    })
}