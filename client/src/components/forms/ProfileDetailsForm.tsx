"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import FormImageHolder from '../form-elements/FormImageHolder'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { ProfileDetailsFormValues } from '@/types'

function ProfileDetailsForm() {
    const [form, setForm] = useState<ProfileDetailsFormValues>({ name: "", surname: "", email: "", image: null })

    function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        const { name, value } = e.target

        if (file) {
            const imageUrl = URL.createObjectURL(file)
            
            setForm({ ...form, image: imageUrl })
            return
        }

        setForm({ ...form, [name]: value })
    }

  return (
    <form>
        <div className='p-6 space-y-5'>
            <div className='p-5 rounded-md bg-grey-light grid grid-cols-1 md:grid-cols-3 text-grey gap-3'>
                <div className='flex items-center'>
                    <span className='body-m'>Profile picture</span>
                </div>
                <div className='flex flex-col md:flex-row md:items-center gap-3 md:col-end-4 md:col-span-2'>
                    <FormImageHolder image={form.image} onChangeImage={onChangeInput} />
                    <span className='body-s'>Image must be below 1024x1024px. Use PNG or JPG format.</span>
                </div>
            </div>
            <div className='p-5 rounded-md bg-grey-light space-y-3'>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex items-center'>
                        <Label htmlFor='name' className='md:body-m md:text-grey'>First name*</Label>
                    </div>
                    <div className='md:col-end-4 md:col-span-2'>
                        <Input id='name' name='name' placeholder='e.g. John' onChange={onChangeInput} />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex items-center'>
                        <Label htmlFor='surname' className='md:body-m md:text-grey'>Last name*</Label>
                    </div>
                    <div className='md:col-end-4 md:col-span-2'>
                        <Input id='surname' name='surname' placeholder='e.g. Appleseed' />
                    </div>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='flex items-center'>
                        <Label htmlFor='email' className='md:body-m md:text-grey'>Email</Label>
                    </div>
                    <div className='md:col-end-4 md:col-span-2'>
                        <Input id='email' name='email' type='email' placeholder='e.g. email@exmaple.com' />
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