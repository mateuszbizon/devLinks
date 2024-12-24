import { SignInSchema } from "@/validations/signInSchema"
import { API } from "."
import { SignUpSchema } from "@/validations/signUpSchema"
import { ProfileLinksSchema } from "@/validations/profileLinksSchema"

export async function signIn(data: SignInSchema) {
    const response = await API.post("/users/sign-in", data)

    return response.data
}

export async function signUp(data: SignUpSchema) {
    const response = await API.post("/users/sign-up", data)

    return response.data
}

export async function getUserDetails(userEmail: string) {
    const response = await API.get(`/users/get-user-details/${userEmail}`)

    return response.data
}

export async function updateUserLinks(data: ProfileLinksSchema) {
    const response = await API.put("/users/update-user-links", { links: data.profileLinks })

    return response.data
}