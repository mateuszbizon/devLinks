import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { hideMessage } from '../store/slices/popupMessageSlice'

type Props = {
    popupMessageId: string
}

function usePopupMessage({ popupMessageId }: Props) {
    const dispatch = useDispatch<AppDispatch>()
    const [messageClose, setMessageClose] = useState(false)

    function handleHideMessage() {
        setMessageClose(true)
    }

    function handleAnimationEnd() {
        if (messageClose) {
            dispatch(hideMessage(popupMessageId))
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

  return {
    messageClose,
    handleHideMessage,
    handleAnimationEnd,
  }
}

export default usePopupMessage