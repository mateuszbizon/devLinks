import { ProfileLink } from '@/types'
import React from 'react'

type ProfileLinksListProps = {
    profileLinks: ProfileLink[]
    renderItem: (profileLink: ProfileLink, linkIndex: number) => React.ReactNode
}

function ProfileLinksList({ profileLinks, renderItem }: ProfileLinksListProps) {
  return (
    <div className='space-y-5'>
        {profileLinks.map((item, index) => renderItem(item, index))}
    </div>
  )
}

export default ProfileLinksList