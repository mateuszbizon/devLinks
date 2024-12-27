"use client"

import PlatformCard from '@/components/cards/PlatformCard'
import ProfileLinksList from '@/components/lists/ProfileLinksList'
import CircleLoading from '@/components/loading/CircleLoading'
import ErrorMessage from '@/components/messages/ErrorMessge'
import PreviewBackground from '@/components/preview/PreviewBackground'
import PreviewDetailsBox from '@/components/preview/PreviewDetailsBox'
import ProfileSummary from '@/components/profile/ProfileSummary'
import useGetUserDetails from '@/lib/hooks/services/userServices/useGetUserDetails'
import { RootState } from '@/lib/store'
import { useParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

function PreviewWithEmailPage() {
    const { email } = useParams<{ email: string }>()
    const { userDetailsData, isLoading, isError, error } = useGetUserDetails({ userEmail: email })
    const { profileDetails, profileLinks } = useSelector((state: RootState) => state.profileLinks)

  return (
    <div>
        {userDetailsData?.data && (
            <div>
                <PreviewBackground />
                <PreviewDetailsBox>
                    <ProfileSummary profileDetails={profileDetails}>
                        {profileDetails.image && (
                            <ProfileSummary.Image src={profileDetails.image} width={200} height={200} alt='' className='size-[104px]' />
                        )}
                        <ProfileSummary.Box>
                            <ProfileSummary.Name className='text-3xl' />
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
                </PreviewDetailsBox>
            </div>
        )}
        {isLoading && <CircleLoading />}
        {isError && <ErrorMessage statusCode={error?.response?.status} />}
    </div>
  )
}

export default PreviewWithEmailPage