import { User } from ".";

export type MainResponse<Data = any> = {
    message: string;
    data?: Data;
}

export type SignInResponse = {
    token: string;
    user: User;
}