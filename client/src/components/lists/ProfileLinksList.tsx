import { ProfileLink } from '@/types'
import React from 'react'
import ProfileLinksEmpty from '../messages/ProfileLinksEmpty'

type ProfileLinksListProps = {
    profileLinks: ProfileLink[]
    renderItem: (profileLink: ProfileLink, linkIndex: number) => React.ReactNode
}

function ProfileLinksList({ profileLinks, renderItem }: ProfileLinksListProps) {
  return (
    <div className='space-y-3'>
        {profileLinks.map((item, index) => renderItem(item, index))}
        {!profileLinks.length && (
            <ProfileLinksEmpty />
        )}
    </div>
  )
}

export default ProfileLinksList