"use client"

import React, { useEffect } from 'react'
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
import { addLink, swapLinks } from '@/lib/store/slices/profileLinksSlice'
import { PLATFORMS_LIST } from '@/constants/platformsList'
import { generateRandomId } from '@/lib/utils/generateRandomId'
import useUpdateUserLinks from '@/lib/hooks/services/userServices/useUpdateUserLinks'
import { DndContext, DragEndEvent } from '@dnd-kit/core'

type ProfileLinksFormProps = {
    profileLinks: ProfileLink[]
}

function ProfileLinksForm({ profileLinks }: ProfileLinksFormProps) {
    const { handleUpdateUserLinks, isPending } = useUpdateUserLinks()
    const dispatch = useDispatch<AppDispatch>()
    const { handleSubmit, control, setValue, formState: { errors } } = useForm<ProfileLinksSchema>({
        resolver: zodResolver(profileLinksSchema),
        defaultValues: {
            profileLinks: profileLinks
        }
    })

    const { fields, append, remove, swap } = useFieldArray({
        control,
        name: "profileLinks",
        keyName: "fieldId"
    })

    function onSubmit(data: ProfileLinksSchema) {
        console.log(data)
        handleUpdateUserLinks(data)
    }

    function handleAddLink() {
        const newLink: ProfileLink = { id: generateRandomId(), link: "", platform: PLATFORMS_LIST[0].value }

        dispatch(addLink(newLink))
        append(newLink)
    }

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event

        if (over && active.id !== over.id) {
            const fromIndex = fields.findIndex(link => link.id === active.id)
            const toIndex = fields.findIndex(link => link.id === over.id)

            dispatch(swapLinks({ fromIndex, toIndex }))
            swap(fromIndex, toIndex)
        }
    }

    useEffect(() => {
        setValue("profileLinks", profileLinks)
    }, [profileLinks])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-6'>
            <Button
                variant={"secondary"}
                className='w-full mb-5'
                onClick={handleAddLink}
            >
                + Add new link
            </Button>
            <DndContext onDragEnd={handleDragEnd}>
                <ProfileLinksList
                    profileLinks={fields}
                    renderItem={(link, index) => (
                        <ProfileLinkCard key={link.id} profileLink={link} linkIndex={index} errors={errors} setValue={setValue} removeFieldArray={remove} />
                    )}
                />
            </DndContext>
            {!profileLinks.length && (
                <ProfileLinksEmpty />
            )}
        </div>
        <div className='w-full h-[1px] bg-borders'></div>
        <div className='flex justify-end p-6'>
            <Button className='w-full md:w-auto' disabled={!profileLinks.length || isPending}>
                Save
            </Button>
        </div>
    </form>
  )
}

export default ProfileLinksForm