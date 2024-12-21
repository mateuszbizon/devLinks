import { SignInSchema } from "@/validations/signInSchema"
import { API } from "."
import { SignUpSchema } from "@/validations/signUpSchema"

export async function signIn(data: SignInSchema) {
    const response = await API.post("/users/sign-in", data)

    return response.data
}

export async function signUp(data: SignUpSchema) {
    const response = await API.post("/users/sign-up", data)

    return response.data
}