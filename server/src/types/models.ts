import { JsonValue } from "@prisma/client/runtime/library";

export type User = {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    userDetails?: UserDetails | null;
}

export type UserDetails = {
    id: string;
    name?: string | null;
    surname?: string | null;
    image?: string | null;
    email?: string | null;
    links?: JsonValue | null;
    userId: string;
};  