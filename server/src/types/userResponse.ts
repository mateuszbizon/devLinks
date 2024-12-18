export type SignInResponse = {
    token: string;
    user: {
        id: string;
        email: string;
    }
}