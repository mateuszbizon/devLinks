import { API } from ".";

export async function getToken() {
    const response = await API.get('/auth/get-token')

    return response.data
}