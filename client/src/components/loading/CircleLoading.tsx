import React from 'react'

function CircleLoading() {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="relative rounded-full size-14 border-8 border-grey-dark">
            <div className='absolute -inset-2 rounded-full border-8 border-t-transparent border-purple animate-spin'></div>
        </div>
    </div>
  )
}

export default CircleLoading