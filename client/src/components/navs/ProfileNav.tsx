import React from 'react'
import NavContainer from '../containers/NavContainer'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import LinkIcon from '../icons/LinkIcon'
import ProfileIcon from '../icons/ProfileIcon'
import PreviewIcon from '../icons/PreviewIcon'
import LogoSmallIcon from '../icons/LogoSmallIcon'
import LogoLargeIcon from '../icons/LogoLargeIcon'

function ProfileNav() {
  return (
    <nav>
        <NavContainer>
            <div className='bg-white flex justify-between items-center px-6 py-4'>
                <div>
                    <div className='md:hidden'>
                        <LogoSmallIcon />
                    </div>
                    <div className='hidden md:block'>
                        <LogoLargeIcon />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <Button variant={"tab-active"}>
                        <LinkIcon />
                        <span className='hidden md:block'>Links</span>
                    </Button>
                    <Button variant={"tab"}>
                        <ProfileIcon />
                        <span className='hidden md:block'>Profile Details</span>
                    </Button>
                </div>
                <div>
                    <Link href={"/preview"} className={buttonVariants({ variant: "secondary" })}>
                        <div className='md:hidden'>
                            <PreviewIcon />
                        </div>
                        <span className='hidden md:block'>Preview</span>
                    </Link>
                </div>
            </div>
        </NavContainer>
    </nav>
  )
}

export default ProfileNav