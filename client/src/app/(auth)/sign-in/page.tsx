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
        <div className='mb-5'></div>
        <div className='flex justify-center'>
          <span className='text-base text-grey'>Don't have an account? <Link href={"/sign-up"} className='link'>Create account</Link></span>
        </div>
      </div>
    </div>
  )
}

export default SignInPage