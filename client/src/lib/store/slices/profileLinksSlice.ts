import { PLATFORMS_LIST } from "@/constants/platformsList";
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
            state.profileLinks = [...state.profileLinks, { id: generateRandomId(), platform: PLATFORMS_LIST[0].value, link: "" }]
        },
        deleteLink: (state, action: PayloadAction<string>) => {
            state.profileLinks = state.profileLinks.filter(link => link.id !== action.payload)
        },
        updateLink: (state, action: PayloadAction<ProfileLink>) => {
            state.profileLinks = state.profileLinks.map(link => {
                if (link.id === action.payload.id) {
                    return action.payload
                }

                return link
            })
        }
    }
})

export const { addLink, deleteLink, updateLink } = profileLinksSlice.actions
export default profileLinksSlice.reducer