"use client"

import { useAuthContext } from "@/context/AuthContext"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function publicRoute(Component: any) {
    return function PublicRoute(props: any) {
        const { isSignedIn } = useAuthContext()

        useEffect(() => {
            if (isSignedIn == true) {
                redirect('/')
            }
        }, [isSignedIn])

        if (isSignedIn == null) {
            return (
                <div>Loading...</div>
            )
        }

        return <Component {...props} />
    }
}