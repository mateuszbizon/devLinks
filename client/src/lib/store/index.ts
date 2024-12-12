import { configureStore } from "@reduxjs/toolkit";
import profileLinksReducer from "./slices/profileLinksSlice"
import popupMessageReducer from "./slices/popupMessageSlice"

export const store = configureStore({
    reducer: {
        profileLinks: profileLinksReducer,
        popupMessage: popupMessageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch