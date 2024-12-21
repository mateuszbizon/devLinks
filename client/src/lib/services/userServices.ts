import { SignInSchema } from "@/validations/signInSchema"
import { API } from "."

export async function signIn(data: SignInSchema) {
    const response = await API.post("/users/sign-in", data)

    return response.data
}