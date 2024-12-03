"use client"

import { ProfileLink } from '@/types'
import React from 'react'
import { Button } from '../ui/button'
import DragDropIcon from '../icons/DragDropIcon'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/store'
import { deleteLink } from '@/lib/store/slices/profileLinksSlice'

type ProfileLinkCardProps = {
    profileLink: ProfileLink
    linkIndex: number
}

function ProfileLinkCard({ profileLink, linkIndex }: ProfileLinkCardProps) {
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
    </div>
  )
}

export default ProfileLinkCard