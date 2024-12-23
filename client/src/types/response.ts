import { User, UserDetails } from ".";

export type MainResponse<Data = any> = {
    message: string;
    data?: Data;
}

export type ErrorResponse = {
    message: string;
    messageCode: string;
}

export type SignInResponse = {
    token: string;
    user: User;
}

export type GetUserDetailsResponse = {
    userDetails?: Pick<UserDetails, "name" | "surname" | "links" | "email" | "image"> | null;
}