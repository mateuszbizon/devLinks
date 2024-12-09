"use client"

import PlatformCard from '@/components/cards/PlatformCard'
import ProfileLinksList from '@/components/lists/ProfileLinksList'
import PreviewNav from '@/components/navs/PreviewNav'
import ProfileSummary from '@/components/profile/ProfileSummary'
import { RootState } from '@/lib/store'
import React from 'react'
import { useSelector } from 'react-redux'

function PreviewPage() {
    const { profileDetails, profileLinks } = useSelector((state: RootState) => state.profileLinks)

  return (
    <div>
        <PreviewNav />
        <div className='absolute top-0 w-full bg-purple rounded-b-3xl h-[350px] -z-10 opacity-0 md:opacity-100'></div>
        <div className='bg-white rounded-3xl md:px-14 md:py-12 md:mt-24 max-w-[237px] md:max-w-[349px] mx-auto'>
            <ProfileSummary profileDetails={profileDetails}>
                <ProfileSummary.Image src={profileDetails.image || ""} width={200} height={200} alt='' className='size-[104px]' />
                <ProfileSummary.Box>
                    <ProfileSummary.Name />
                    <ProfileSummary.Email />
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
        </div>
    </div>
  )
}

export default PreviewPage