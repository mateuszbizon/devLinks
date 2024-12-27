import React from 'react'
import NavContainer from '../containers/NavContainer'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { useAuthContext } from '@/context/AuthContext'
import { useDispatch } from 'react-redux'
import { showCopyToClipboardMessage } from '@/lib/store/slices/popupMessageSlice'
import { MESSAGES } from '@/constants/messages'

function PreviewNav() {
    const { userData } = useAuthContext()
    const dispatch = useDispatch()

    function copyPreviewLink() {
        const url = window.location.href + `/${userData?.email}`

        navigator.clipboard.writeText(url)
        dispatch(showCopyToClipboardMessage(MESSAGES.user.linkCopied))
    }

  return (
    <nav>
        <NavContainer>
            <div className='bg-white grid grid-cols-2 sm:flex sm:justify-between gap-3 px-6 py-4 md:rounded-xl'>
                <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
                    Back to Editor
                </Link>
                <Button onClick={copyPreviewLink}>
                    Share Link
                </Button>
            </div>
        </NavContainer>
    </nav>
  )
}

export default PreviewNav