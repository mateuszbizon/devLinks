import { PrismaClient } from "@prisma/client";

type Props = {
    name: string;
    surname: string;
    email: string;
    image: string | null;
    userId: string;
}

const prisma = new PrismaClient()

export async function updateUserDetailsService({ name, surname, email, image, userId }: Props) {
    return await prisma.userDetails.upsert({
        where: {
            userId: userId
        },
        create: {
            name: name,
            surname: surname,
            email: email,
            image: image,
            links: [],
            userId: userId
        },
        update: {
            name: name,
            surname: surname,
            email: email,
            image: image
        },
    })
}