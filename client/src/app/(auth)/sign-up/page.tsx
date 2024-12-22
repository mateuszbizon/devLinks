"use client"

import publicRoute from '@/components/auth/publicRoute'
import SignUpForm from '@/components/forms/SignUpForm'
import LogoLargeIcon from '@/components/icons/LogoLargeIcon'
import Link from 'next/link'
import React from 'react'

function SignUpPage() {
  return (
    <div>
        <div className='flex md:justify-center mb-12'>
            <LogoLargeIcon />
        </div>
        <div className='md:bg-white rounded-xl md:p-8'>
            <div className='space-y-2 mb-10'>
                <h1 className='text-3xl text-grey-dark'>Create account</h1>
                <p className='text-base text-grey'>Let’s get you started sharing your links!</p>
            </div>
            <div className='mb-5'>
                <SignUpForm />
            </div>
            <div className='flex justify-center flex-wrap gap-1'>
                <span className='text-base text-grey'>Already have an account?</span>
                <Link href={"/sign-in"} className='link text-base'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default publicRoute(SignUpPage)