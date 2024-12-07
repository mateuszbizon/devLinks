import { PLATFORMS_LIST } from "@/constants/platformsList";
import { generateRandomId } from "@/lib/utils/generateRandomId";
import { ProfileDetailsFormValues, ProfileLink } from "@/types";
import { ProfileDetailsSchema } from "@/validations/profileDetailsSchema";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ProfileLinksState = {
    profileLinks: ProfileLink[]
    profileDetails: {
        name: string
        surname: string
        email: string
        image: string | null
    }
}

const initialState: ProfileLinksState = {
    profileLinks: [],
    profileDetails: {
        name: "",
        surname: "",
        email: "",
        image: null
    }
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
        },
        updateDetails: (state, action: PayloadAction<ProfileDetailsFormValues>) => {
            state.profileDetails = action.payload
        }
    }
})

export const { addLink, deleteLink, updateLink, updateDetails } = profileLinksSlice.actions
export default profileLinksSlice.reducer