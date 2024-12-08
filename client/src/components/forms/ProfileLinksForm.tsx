"use client"

import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import ProfileLinksList from '../lists/ProfileLinksList'
import { ProfileLink } from '@/types'
import ProfileLinkCard from '../cards/ProfileLinkCard'
import { useForm } from 'react-hook-form'
import { profileLinksSchema, ProfileLinksSchema } from '@/validations/profileLinksSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import ProfileLinksEmpty from '../messages/ProfileLinksEmpty'

type ProfileLinksFormProps = {
    profileLinks: ProfileLink[]
}

function ProfileLinksForm({ profileLinks }: ProfileLinksFormProps) {
    const { handleSubmit, setValue, formState: { errors } } = useForm<ProfileLinksSchema>({
        resolver: zodResolver(profileLinksSchema),
    })

    function onSubmit(data: ProfileLinksSchema) {
        console.log("Sent data!")
    }

    useEffect(() => {
        setValue("profileLinks", profileLinks)
    }, [profileLinks])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-6 pt-0'>
            <ProfileLinksList
                profileLinks={profileLinks}
                renderItem={(link, index) => (
                    <ProfileLinkCard key={link.id} profileLink={link} linkIndex={index} errors={errors} />
                )}
            />
            {!profileLinks.length && (
                <ProfileLinksEmpty />
            )}
        </div>
        <div className='w-full h-[1px] bg-borders'></div>
        <div className='flex justify-end p-6'>
            <Button className='w-full md:w-auto' disabled={!profileLinks.length}>
                Save
            </Button>
        </div>
    </form>
  )
}

export default ProfileLinksForm