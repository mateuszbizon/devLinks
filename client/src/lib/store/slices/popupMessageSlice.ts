import { COPY_CLIPBOARD_POPUP_MESSAGE, DEFAULT_POPUP_MESSAGE } from "@/constants"
import { generateRandomId } from "@/lib/utils/generateRandomId"
import { PopupMessage } from "@/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type PopupMessgeState = {
    popupMessages: PopupMessage[]
}

const initialState: PopupMessgeState = {
    popupMessages: []
}

export const popupMessageSlice = createSlice({
    name: "popup_message",
    initialState,
    reducers: {
        showCopyToClipboardMessage: (state, action: PayloadAction<string>) => {
            state.popupMessages = [...state.popupMessages, { id: generateRandomId(), messageType: COPY_CLIPBOARD_POPUP_MESSAGE, message: action.payload }]
        },
        showDefaultMessage: (state, action: PayloadAction<string>) => {
            state.popupMessages = [...state.popupMessages, { id: generateRandomId(), messageType: DEFAULT_POPUP_MESSAGE, message: action.payload }]
        },
        hideMessage: (state, action: PayloadAction<string>) => {
            state.popupMessages = state.popupMessages.filter(message => message.id !== action.payload)
        }
    }
})

export const { showCopyToClipboardMessage, showDefaultMessage, hideMessage } = popupMessageSlice.actions
export default popupMessageSlice.reducer