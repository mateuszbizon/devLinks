"use client"

import { useAuthContext } from "@/context/AuthContext"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import CircleLoading from "../loading/CircleLoading"

export default function protectRoute(Component: any) {
    return function ProtectedRoute(props: any) {
        const { isSignedIn } = useAuthContext()

        useEffect(() => {
            if (isSignedIn == false) {
                redirect('/sign-in')
            }
        }, [isSignedIn])

        if (isSignedIn == null) {
            return (
                <CircleLoading />
            )
        }

        return <Component {...props} />
    }
}