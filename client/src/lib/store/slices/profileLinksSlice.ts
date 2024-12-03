import { ProfileLink } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type ProfileLinksState = {
    profileLinks: ProfileLink[]
}

const initialState: ProfileLinksState = {
    profileLinks: []
} 

export const profileLinksSlice = createSlice({
    name: "profile_links",
    initialState,
    reducers: {

    }
})

export default profileLinksSlice.reducer