"use client"

import publicRoute from '@/components/auth/publicRoute'
import SignInForm from '@/components/forms/SignInForm'
import LogoLargeIcon from '@/components/icons/LogoLargeIcon'
import Link from 'next/link'
import React from 'react'

function SignInPage() {
  return (
    <div>
      <div className='flex md:justify-center mb-12'>
        <LogoLargeIcon />
      </div>
      <div className='md:bg-white rounded-xl md:p-8'>
        <div className='space-y-2 mb-10'>
          <h1 className='text-3xl text-grey-dark'>Login</h1>
          <p className='text-base text-grey'>Add your details below to get back into the app</p>
        </div>
        <div className='mb-5'>
          <SignInForm />
        </div>
        <div className='flex justify-center flex-wrap gap-1'>
          <span className='text-base text-grey'>Don't have an account?</span>
          <Link href={"/sign-up"} className='link text-base'>Create account</Link>
        </div>
      </div>
    </div>
  )
}

export default publicRoute(SignInPage)