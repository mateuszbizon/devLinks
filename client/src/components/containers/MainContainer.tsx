import React, { PropsWithChildren } from 'react'

type MainContainerProps = PropsWithChildren

function MainContainer({ children }: MainContainerProps) {
  return (
    <div className='px-6 xl:container mx-auto'>
        {children}
    </div>
  )
}

export default MainContainer