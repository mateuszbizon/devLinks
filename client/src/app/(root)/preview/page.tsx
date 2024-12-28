"use client"

import protectRoute from '@/components/auth/protectedRoute'
import PlatformCard from '@/components/cards/PlatformCard'
import ProfileLinksList from '@/components/lists/ProfileLinksList'
import PreviewNav from '@/components/navs/PreviewNav'
import PreviewBackground from '@/components/preview/PreviewBackground'
import PreviewDetailsBox from '@/components/preview/PreviewDetailsBox'
import ProfileSummary from '@/components/profile/ProfileSummary'
import { RootState } from '@/lib/store'
import React from 'react'
import { useSelector } from 'react-redux'

function PreviewPage() {
    const { profileDetails, profileLinks } = useSelector((state: RootState) => state.profileLinks)

  return (
    <div>
        <PreviewNav />
        <PreviewBackground />
        <PreviewDetailsBox>
            <ProfileSummary profileDetails={profileDetails}>
                {profileDetails.image && (
                    <ProfileSummary.Image src={profileDetails.image} width={200} height={200} alt='' className='size-[104px]' />
                )}
                <ProfileSummary.Box>
                    <ProfileSummary.Name className='text-3xl' />
                    <ProfileSummary.Email className='text-base' />
                </ProfileSummary.Box>
                <ProfileSummary.Links>
                    <ProfileLinksList 
                        profileLinks={profileLinks} 
                        renderItem={(link) => (
                            <PlatformCard key={link.id} profileLink={link} />
                        )}
                    />
                </ProfileSummary.Links>
            </ProfileSummary>
        </PreviewDetailsBox>
    </div>
  )
}

export default protectRoute(PreviewPage)