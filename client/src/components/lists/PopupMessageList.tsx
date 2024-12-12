import { PopupMessage } from '@/types'
import React from 'react'

type PopupMessageListProps = {
    popupMessages: PopupMessage[]
    renderItem: (message: PopupMessage, index: number) => React.ReactNode
}

function PopupMessageList({ popupMessages, renderItem }: PopupMessageListProps) {
  return (
    <div className='relative'>
        {popupMessages.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default PopupMessageList