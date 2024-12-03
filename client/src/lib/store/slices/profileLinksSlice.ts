import { generateRandomId } from "@/lib/utils/generateRandomId";
import { ProfileLink } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        addLink: (state) => {
            state.profileLinks = [...state.profileLinks, { id: generateRandomId(), platform: "github", link: "" }]
        }
    }
})

export const { addLink } = profileLinksSlice.actions
export default profileLinksSlice.reducer