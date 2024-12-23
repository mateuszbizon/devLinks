import { CHANGES_SAVED_POPUP_MESSAGE, COPY_CLIPBOARD_POPUP_MESSAGE } from '@/constants'
import { PopupMessage } from '@/types'
import React from 'react'
import LinkInputIcon from '../icons/LinkInputIcon'
import usePopupMessage from '@/lib/hooks/usePopupMessage'
import ChangeSaveIcon from '../icons/ChangeSaveIcon'

type PopupMessageCardProps = {
    popupMessage: PopupMessage
    index: number
}

function PopupMessageCard({ popupMessage, index }: PopupMessageCardProps) {
    const { messageClose, handleHideMessage, handleAnimationEnd } = usePopupMessage({ popupMessageId: popupMessage.id })

    const popupMessageHeight = 56
    const popupMessageBottomGap = 20

    const popupMessageTypes: { [key: string]: React.ReactNode } = {
        [COPY_CLIPBOARD_POPUP_MESSAGE]: <LinkInputIcon />,
        [CHANGES_SAVED_POPUP_MESSAGE]: <ChangeSaveIcon />
    }

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