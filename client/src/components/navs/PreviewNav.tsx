import React from 'react'
import NavContainer from '../containers/NavContainer'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'

function PreviewNav() {
  return (
    <nav>
        <NavContainer>
            <div className='bg-white grid grid-cols-2 sm:flex sm:justify-between gap-3 px-6 py-4 md:rounded-xl'>
                <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
                    Back to Editor
                </Link>
                <Button>
                    Share Link
                </Button>
            </div>
        </NavContainer>
    </nav>
  )
}

export default PreviewNav