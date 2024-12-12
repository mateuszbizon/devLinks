"use client"

import React from 'react'
import PopupMessageList from '../lists/PopupMessageList'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import PopupMessageCard from '../cards/PopupMessageCard'

function PopupMessage() {
    const { popupMessages } = useSelector((state: RootState) => state.popupMessage)

  return (
    <div className='fixed bottom-0 left-1/2 w-[300px] sm:w-[397px] -translate-x-1/2 z-10'>
        <PopupMessageList
            popupMessages={popupMessages}
            renderItem={(message, index) => (
                <PopupMessageCard key={message.id} popupMessage={message} index={index} />
            )}
        />
    </div>
  )
}

export default PopupMessage