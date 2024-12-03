import React from 'react'
import { Button } from '../ui/button'

function ProfileLinksView() {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-2xl font-bold text-grey-dark'>Customize your links</h1>
      <p className='body-m text-grey'>Add/edit/remove links below and then share all your profiles with the world!</p>
      <Button type='button' variant={"secondary"} className='w-full mt-5'>
        + Add new link
      </Button>
    </div>
  )
}

export default ProfileLinksView