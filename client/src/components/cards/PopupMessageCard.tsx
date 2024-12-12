import { COPY_CLIPBOARD_POPUP_MESSAGE } from '@/constants'
import { PopupMessage } from '@/types'
import React, { useEffect, useState } from 'react'
import LinkInputIcon from '../icons/LinkInputIcon'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/store'
import { hideMessage } from '@/lib/store/slices/popupMessageSlice'

type PopupMessageCardProps = {
    popupMessage: PopupMessage
    index: number
}

function PopupMessageCard({ popupMessage, index }: PopupMessageCardProps) {
    const dispatch = useDispatch<AppDispatch>()
    const [messageClose, setMessageClose] = useState(false)

    const popupMessageHeight = 56
    const popupMessageBottomGap = 20

    const popupMessageTypes: { [key: string]: React.ReactNode } = {
        [COPY_CLIPBOARD_POPUP_MESSAGE]: <LinkInputIcon />
    }

    function handleHideMessage() {
        setMessageClose(true)
    }

    function handleAnimationEnd() {
        if (messageClose) {
            dispatch(hideMessage(popupMessage.id))
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleHideMessage()
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

  return (
    <div
        className={`absolute flex gap-2 items-center w-full px-6 py-4 bg-grey-dark text-grey-light text-lg rounded-xl z-10 ${messageClose ? "animate-fadeOut" : "animate-fadeIn"}`} 
        style={{ height: `${popupMessageHeight}px`, bottom: `${(index * popupMessageHeight) + ((index + 1) * popupMessageBottomGap)}px` }}
        onClick={handleHideMessage}
        onAnimationEnd={handleAnimationEnd}
    >
        <div>
            {popupMessageTypes[popupMessage.messageType] || null}
        </div>
        {popupMessage.message}
    </div>
  )
}

export default PopupMessageCard