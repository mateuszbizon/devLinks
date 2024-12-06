import React from 'react'
import ProfileDetailsForm from '../forms/ProfileDetailsForm'

function ProfileDetailsView() {
  return (
    <div>
      <div className='space-y-3 p-6'>
        <h1 className='text-2xl font-bold text-grey-dark'>Profile Details</h1>
        <p className='body-m text-grey'>Add your details to create a personal touch to your profile.</p>
      </div>

      <ProfileDetailsForm />
    </div>
  )
}

export default ProfileDetailsView