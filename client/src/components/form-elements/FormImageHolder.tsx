import React from 'react'
import UploadImageIcon from '../icons/UploadImageIcon'
import Image from 'next/image'

type FormImageHolderProps = {
    image: string | null
    onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function FormImageHolder({ image, onChangeImage }: FormImageHolderProps) {
  return (
    <label htmlFor="profile-image" className='size-[193px] cursor-pointer rounded-xl overflow-hidden shrink-0'>
        <input id='profile-image' type="file" className='hidden' onChange={onChangeImage} />
        {!image ? (
            <div className='size-full bg-purple-light text-purple flex flex-col justify-center items-center gap-2'>
                <UploadImageIcon />
                <span className='heading-s'>+ Upload Image</span>
            </div>
        ) : (
            <div className='relative size-full'>
                <Image src={image} width={200} height={200} alt='User profile image' className='size-full object-cover' />
                <div className='absolute inset-0 bg-black/50 text-white flex flex-col justify-center items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    <UploadImageIcon />
                    <span className='heading-s'>+ Upload Image</span>
                </div>
            </div>
        )}
    </label>
  )
}

export default FormImageHolder