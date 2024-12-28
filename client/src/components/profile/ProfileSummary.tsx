import { cn } from '@/lib/utils'
import Image, { ImageProps } from 'next/image'
import React, { createContext, PropsWithChildren, useContext } from 'react'

type ProfileSummaryContextType = {
    profileDetails: {
        name: string
        surname: string
        email: string
        image: string | null
    }
}

const ProfileSummaryContext = createContext<ProfileSummaryContextType | undefined>(undefined)

function useProfileSummaryContext() {
    const context = useContext(ProfileSummaryContext)

    if (!context) {
        throw new Error("Profile summary context must be used within Profile summary component")
    }

    return context
}

type ProfileSummaryProps = PropsWithChildren & {
    profileDetails: {
        name: string
        surname: string
        email: string
        image: string | null
    }
}

function ProfileSummary({ children, profileDetails }: ProfileSummaryProps) {
  return (
    <ProfileSummaryContext.Provider value={{ profileDetails }}>
        <div className='flex flex-col items-center gap-7'>
            {children}
        </div>
    </ProfileSummaryContext.Provider>
  )
}

type ProfileSummaryImageProps = ImageProps

function ProfileSummaryImage({ src, width, height, alt, className, ...props }: ProfileSummaryImageProps) {
    return (
        <Image 
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={cn("size-[96px] object-cover rounded-full border-4 border-purple", className)}
            {...props}
        />
    )
}

type ProfileSummaryNameProps = React.HTMLAttributes<HTMLSpanElement>

function ProfileSummaryName({ className, ...props }: ProfileSummaryNameProps) {
    const context = useProfileSummaryContext()

    return (
        <span className={cn('text-[1.125rem] font-semibold text-grey-dark', className)} {...props}>
            {context.profileDetails.name} {context.profileDetails.surname}
        </span>
    )
}

type ProfileSummaryEmailProps = React.HTMLAttributes<HTMLSpanElement>

function ProfileSummaryEmail({ className, ...props }: ProfileSummaryEmailProps) {
    const context = useProfileSummaryContext()

    return (
        <span className={cn('text-sm text-grey', className)} {...props}>
            {context.profileDetails.email}
        </span>
    )
}

type ProfileSummaryBoxProps = PropsWithChildren

function ProfileSummaryBox({ children }: ProfileSummaryBoxProps) {
    return (
        <div className='flex flex-col items-center gap-2'>
            {children}
        </div>
    )
}

type ProfileSummaryLinksProps = PropsWithChildren

function ProfileSummaryLinks({ children }: ProfileSummaryLinksProps) {
    return (
        <div className='space-y-5 max-w-[237px] w-full'>
            {children}
        </div>
    )
}

ProfileSummary.Image = ProfileSummaryImage
ProfileSummary.Name = ProfileSummaryName
ProfileSummary.Email = ProfileSummaryEmail
ProfileSummary.Box = ProfileSummaryBox
ProfileSummary.Links = ProfileSummaryLinks

export default ProfileSummary