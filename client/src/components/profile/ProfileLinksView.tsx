"use client"

import React from 'react'
import { Button } from '../ui/button'
import ProfileLinksForm from '../forms/ProfileLinksForm'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

function ProfileLinksView() {
  const { profileLinks } = useSelector((state: RootState) => state.profileLinks)

  return (
    <div>
      <div className='flex flex-col gap-3 p-6'>
        <h1 className='text-2xl font-bold text-grey-dark'>Customize your links</h1>
        <p className='body-m text-grey'>Add/edit/remove links below and then share all your profiles with the world!</p>
        <Button variant={"secondary"} className='w-full mt-5'>
          + Add new link
        </Button>
      </div>

      <ProfileLinksForm profileLinks={profileLinks} />
    </div>
  )
}

export default ProfileLinksView