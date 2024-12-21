"use client"

import React from 'react'
import { Button } from '../ui/button'
import ProfileLinksList from '../lists/ProfileLinksList'
import { ProfileLink } from '@/types'
import ProfileLinkCard from '../cards/ProfileLinkCard'
import { useFieldArray, useForm } from 'react-hook-form'
import { profileLinksSchema, ProfileLinksSchema } from '@/validations/profileLinksSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import ProfileLinksEmpty from '../messages/ProfileLinksEmpty'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/lib/store'
import { addLink } from '@/lib/store/slices/profileLinksSlice'
import { PLATFORMS_LIST } from '@/constants/platformsList'
import { generateRandomId } from '@/lib/utils/generateRandomId'

type ProfileLinksFormProps = {
    profileLinks: ProfileLink[]
}

function ProfileLinksForm({ profileLinks }: ProfileLinksFormProps) {
    const dispatch = useDispatch<AppDispatch>()
    const { handleSubmit, control, setValue, formState: { errors } } = useForm<ProfileLinksSchema>({
        resolver: zodResolver(profileLinksSchema),
        defaultValues: {
            profileLinks: profileLinks
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "profileLinks",
        keyName: "fieldId"
    })

    function onSubmit(data: ProfileLinksSchema) {
        console.log(data)
    }

    function handleAddLink() {
        const newLink: ProfileLink = { id: generateRandomId(), link: "", platform: PLATFORMS_LIST[0].value }

        dispatch(addLink(newLink))
        append(newLink)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-6'>
            <Button
                variant={"secondary"}
                className='w-full'
                onClick={handleAddLink}
            >
                + Add new link
            </Button>
            <ProfileLinksList
                profileLinks={fields}
                renderItem={(link, index) => (
                    <ProfileLinkCard key={link.id} profileLink={link} linkIndex={index} errors={errors} setValue={setValue} removeFieldArray={remove} />
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