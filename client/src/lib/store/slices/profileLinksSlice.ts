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
        },
        deleteLink: (state, action: PayloadAction<string>) => {
            state.profileLinks = state.profileLinks.filter(link => link.id !== action.payload)
        }
    }
})

export const { addLink, deleteLink } = profileLinksSlice.actions
export default profileLinksSlice.reducer