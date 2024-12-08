"use client"

import { RootState } from '@/lib/store'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileLinksList from '../lists/ProfileLinksList'
import PlatformCard from '../cards/PlatformCard'

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
        <div className='flex flex-col items-center size-full border border-grey rounded-2xl p-5'>
          <div className='size-[96px]'>
            {profileDetails.image ? (
              <Image src={profileDetails.image} alt='' width={200} height={200} className='size-full object-cover rounded-full border-4 border-purple' />
            ) : (
              <div className='size-full rounded-full bg-borders'></div>
            )}
          </div>

          <div className='mt-7 mb-2'>
            {!profileDetails.name || !profileDetails.surname ? (
              <div className='w-40 h-4 rounded-[104px] bg-borders'></div>
            ) : (
              <span className='text-lg font-semibold text-grey-dark'>{profileDetails.name} {profileDetails.surname}</span>
            )}
          </div>

          <div className='mb-10'>
            {!profileDetails.email ? (
              <div className='w-[72px] h-2 rounded-[104px] bg-borders'></div>
            ) : (
              <span className='text-sm text-grey'>{profileDetails.email}</span>
            )}
          </div>

          <div className='space-y-5 w-[237px]'>
            <ProfileLinksList 
              profileLinks={profileLinks} 
              renderItem={(link) => (
                <PlatformCard profileLink={link} />
              )} 
            />

            <div className='space-y-5'>
              {defaultLinks.map(() => (
                <div className='h-11 rounded-lg bg-borders'></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileResult