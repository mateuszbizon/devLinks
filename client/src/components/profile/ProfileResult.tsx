"use client"

import { RootState } from '@/lib/store'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileLinksList from '../lists/ProfileLinksList'
import PlatformCard from '../cards/PlatformCard'
import ProfileSummary from './ProfileSummary'

function ProfileResult() {
  const { profileLinks, profileDetails } = useSelector((state: RootState) => state.profileLinks)
  const [defaultLinks, setDefaultLinks] = useState<any[]>([])
  const maxDefaultArrayLength = 5

  useEffect(() => {
    if (profileLinks.length >= maxDefaultArrayLength) {
      setDefaultLinks([])
      return
    }

    setDefaultLinks(new Array(maxDefaultArrayLength - profileLinks.length).fill(null))
  }, [profileLinks])

  return (
    <div className='flex justify-center p-6 rounded-md bg-white'>
      <div className='w-[308px] min-h-[632px] border border-grey rounded-3xl p-3'>
        <div className='size-full border border-grey rounded-2xl p-5'>
          <ProfileSummary profileDetails={profileDetails}>
              {profileDetails.image ? (
                <ProfileSummary.Image src={profileDetails.image} width={200} height={200} alt='' />
              ) : (
                <div className='size-[96px] rounded-full bg-borders'></div>
              )}

              <ProfileSummary.Box>
                  {profileDetails.name || profileDetails.surname ? (
                    <ProfileSummary.Name />
                  ) : (
                    <div className='w-40 h-4 rounded-[104px] bg-borders'></div>
                  )}

                  {profileDetails.email ? (
                    <ProfileSummary.Email />
                  ) : (
                    <div className='w-[72px] h-2 rounded-[104px] bg-borders'></div>
                  )}
              </ProfileSummary.Box>

              <ProfileSummary.Links>
                  <ProfileLinksList 
                      profileLinks={profileLinks} 
                      renderItem={(link) => (
                        <PlatformCard key={link.id} profileLink={link} />
                      )} 
                  />

                  <div className='space-y-5'>
                      {defaultLinks.map(() => (
                        <div className='h-11 rounded-lg bg-borders'></div>
                      ))}
                  </div>
              </ProfileSummary.Links>
          </ProfileSummary>
        </div>
      </div>
    </div>
  )
}

export default ProfileResult