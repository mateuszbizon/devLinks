export type MainResponse<Data = any> = {
    message: string;
    data?: Data;
}

export type RefreshTokenPayload = {
    id: string;
    email: string;
}

export type AccessTokenPayload = {
    id: string;
}