import React from 'react'
import NavContainer from '../containers/NavContainer'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'

function ProfileNav() {
  return (
    <nav>
        <NavContainer>
            <div className='bg-white flex justify-between items-center px-6 py-4'>
                <div>
                    <span>Dev</span>
                </div>
                <div className='flex gap-4'>
                    <Button variant={"tab-active"}>
                        A
                    </Button>
                    <Button variant={"tab"}>
                        B
                    </Button>
                </div>
                <div>
                    <Link href={"/preview"} className={buttonVariants({ variant: "secondary" })}>
                        C
                    </Link>
                </div>
            </div>
        </NavContainer>
    </nav>
  )
}

export default ProfileNav