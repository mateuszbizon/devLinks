import { User, UserDetails } from "./models";

export type SignInResponse = {
    token: string;
    user: Pick<User, "id" | "email">;
}

export type GetUserDetailsResponse = {
    userDetails?: Pick<UserDetails, "name" | "surname" | "links" | "email" | "image"> | null;
}