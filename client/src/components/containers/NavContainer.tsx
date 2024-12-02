import React, { PropsWithChildren } from 'react'

type NavContainerProps = PropsWithChildren

function NavContainer({ children }: NavContainerProps) {
  return (
    <div className='md:p-6 xl:container mx-auto'>
        {children}
    </div>
  )
}

export default NavContainer