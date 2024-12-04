"use client"

import { ProfileLink } from '@/types'
import React, { PropsWithChildren } from 'react'
import { Button } from '../ui/button'
import DragDropIcon from '../icons/DragDropIcon'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/store'
import { deleteLink } from '@/lib/store/slices/profileLinksSlice'

type ProfileLinkCardProps = PropsWithChildren & {
    profileLink: ProfileLink
    linkIndex: number
}

function ProfileLinkCard({ profileLink, linkIndex, children }: ProfileLinkCardProps) {
    const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='p-5 bg-grey-light rounded-md space-y-2'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <DragDropIcon />
                <span className='heading-s text-grey'>Link #{linkIndex + 1}</span>
            </div>
            <Button variant={"tab"} className='p-0 body-m' onClick={() => dispatch(deleteLink(profileLink.id))}>
                Remove
            </Button>
        </div>
        <div className='space-y-2'>
            {children}
        </div>
    </div>
  )
}

export default ProfileLinkCard