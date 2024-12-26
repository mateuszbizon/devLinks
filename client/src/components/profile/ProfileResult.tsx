"use client"

import React from 'react'
import ProfileLinksList from '../lists/ProfileLinksList'
import PlatformCard from '../cards/PlatformCard'
import ProfileSummary from './ProfileSummary'
import useProfileResult from '@/lib/hooks/useProfileResult'

function ProfileResult() {
  const { profileLinks, profileDetails, defaultLinks } = useProfileResult()

  return (
    <div className='sticky top-0 flex justify-center py-6 rounded-md bg-white h-[calc(100vh-theme(height.nav)-2*theme(padding.nav-container))] overflow-auto'>
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

                  {defaultLinks.length > 0 && (
                      <div className='space-y-5'>
                          {defaultLinks.map((item) => (
                            <div key={item} className='h-11 rounded-lg bg-borders'></div>
                          ))}
                      </div>
                  )}
              </ProfileSummary.Links>
          </ProfileSummary>
        </div>
      </div>
    </div>
  )
}

export default ProfileResult