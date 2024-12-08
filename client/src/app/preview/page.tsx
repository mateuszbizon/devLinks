"use client"

import PreviewNav from '@/components/navs/PreviewNav'
import { RootState } from '@/lib/store'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

function PreviewPage() {
    const { profileDetails } = useSelector((state: RootState) => state.profileLinks)

  return (
    <div>
        <PreviewNav />
        <div className='absolute top-0 w-full bg-purple rounded-b-3xl h-[350px] -z-10 opacity-0 md:opacity-100'></div>
        <div className='bg-white rounded-3xl md:px-14 md:py-12 md:mt-24 max-w-[237px] md:max-w-[349px] mx-auto'>

        </div>
    </div>
  )
}

export default PreviewPage