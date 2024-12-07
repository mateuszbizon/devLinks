"use client"

import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import FormImageHolder from '../form-elements/FormImageHolder'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { profileDetailsSchema, ProfileDetailsSchema } from '@/validations/profileDetailsSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/lib/store'
import { updateDetails } from '@/lib/store/slices/profileLinksSlice'
import { getFileFromUrl } from '@/lib/utils/getFileFromUrl'

function ProfileDetailsForm() {
    const { profileDetails } = useSelector((state: RootState) => state.profileLinks)
    const dispatch = useDispatch<AppDispatch>()
    const { handleSubmit, setValue, formState: { errors } } = useForm<ProfileDetailsSchema>({
        resolver: zodResolver(profileDetailsSchema),
        defaultValues: {
            name: profileDetails.name,
            surname: profileDetails.surname,
            email: profileDetails.email,
        }
    })

    function onChangeImage(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]

        if (file) {
            const imageUrl = URL.createObjectURL(file)

            setValue("image", file)
            dispatch(updateDetails({ ...profileDetails, image: imageUrl }))
            return
        }
    }

    function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
        setValue("name", e.target.value)
        dispatch(updateDetails({ ...profileDetails, name: e.target.value }))
    }

    function onChangeSurname(e: React.ChangeEvent<HTMLInputElement>) {
        setValue("surname", e.target.value)
        dispatch(updateDetails({ ...profileDetails, surname: e.target.value }))
    }

    function onChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setValue("email", e.target.value)
        dispatch(updateDetails({ ...profileDetails, email: e.target.value }))
    }

    function onSubmit(data: ProfileDetailsSchema) {
        console.log(data)
    }

    useEffect(() => {
        const handleGetFile = async () => {
            if (profileDetails.image) {
                const image = await getFileFromUrl(profileDetails.image)

                setValue("image", image)
            }
        }

        handleGetFile()
    }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-6 space-y-5'>
            <div className='p-5 rounded-md bg-grey-light grid grid-cols-1 md:grid-cols-3 text-grey gap-3'>
                <div className='flex items-center'>
                    <span className='body-m'>Profile picture</span>
                </div>
                <div className='flex flex-col md:flex-row md:items-center gap-3 md:col-end-4 md:col-span-2'>
                    <FormImageHolder image={profileDetails.image} onChangeImage={onChangeImage} />
                    <span className='body-s'>Image must be below 1024x1024px. Use PNG or JPG format.</span>
                </div>
            </div>
            <div className='p-5 rounded-md bg-grey-light space-y-3'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex items-center'>
                        <Label htmlFor='name' className='md:body-m md:text-grey'>First name*</Label>
                    </div>
                    <div className='md:col-end-4 md:col-span-2'>
                        <Input id='name' placeholder='e.g. John' value={profileDetails.name} onChange={onChangeName} />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex items-center'>
                        <Label htmlFor='surname' className='md:body-m md:text-grey'>Last name*</Label>
                    </div>
                    <div className='md:col-end-4 md:col-span-2'>
                        <Input id='surname' placeholder='e.g. Appleseed' value={profileDetails.surname} onChange={onChangeSurname} />
                        <span className='text-rose-600'>{errors.surname && errors.surname.message}</span>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex items-center'>
                        <Label htmlFor='email' className='md:body-m md:text-grey'>Email</Label>
                    </div>
                    <div className='md:col-end-4 md:col-span-2'>
                        <Input id='email' placeholder='e.g. email@exmaple.com' value={profileDetails.email} onChange={onChangeEmail} />
                        <span className='text-rose-600'>{errors.email && errors.email.message}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[1px] bg-borders'></div>
        <div className='flex justify-end p-6'>
            <Button className='w-full md:w-auto'>
                Save
            </Button>
        </div>
    </form>
  )
}

export default ProfileDetailsForm