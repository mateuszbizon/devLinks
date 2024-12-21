import { User } from ".";

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