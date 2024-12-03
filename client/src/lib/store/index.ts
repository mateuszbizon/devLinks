import { configureStore } from "@reduxjs/toolkit";
import profileLinksReducer from "./slices/profileLinksSlice"

export const store = configureStore({
    reducer: {
        profileLinks: profileLinksReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch