import React, { PropsWithChildren } from 'react'

type AuthenticationProps = PropsWithChildren

function AuthContainer({ children }: AuthenticationProps) {
  return (
    <div className='p-5 mx-auto md:w-[476px]'>
        {children}
    </div>
  )
}

export default AuthContainer