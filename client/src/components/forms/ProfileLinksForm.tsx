"use client"

import React from 'react'
import { Button } from '../ui/button'
import ProfileLinksList from '../lists/ProfileLinksList'
import { ProfileLink } from '@/types'
import ProfileLinkCard from '../cards/ProfileLinkCard'

type ProfileLinksFormProps = {
    profileLinks: ProfileLink[]
}

function ProfileLinksForm({ profileLinks }: ProfileLinksFormProps) {
  return (
    <form>
        <div className='p-6 pt-0'>
            <ProfileLinksList
                profileLinks={profileLinks}
                renderItem={(link) => (
                    <ProfileLinkCard key={link.id} profileLink={link} />
                )}
            />
        </div>
        <div className='w-full h-[1px] bg-borders'></div>
        <div className='flex justify-end p-6'>
            <Button className='w-full md:w-auto' disabled={!profileLinks.length}>
                Save
            </Button>
        </div>
    </form>
  )
}

export default ProfileLinksForm