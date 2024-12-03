import { ProfileLink } from '@/types'
import React from 'react'

type ProfileLinkCardProps = {
    profileLink: ProfileLink
}

function ProfileLinkCard({ profileLink }: ProfileLinkCardProps) {
  return (
    <div>
        {profileLink.platform}
        {profileLink.link}
    </div>
  )
}

export default ProfileLinkCard