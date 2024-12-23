import { API, CustomAxiosRequestConfig } from '@/lib/services'
import { getToken } from '@/lib/services/authServices'
import { User } from '@/types'
import { MainResponse, SignInResponse } from '@/types/response'
import React, { createContext, PropsWithChildren, useContext, useEffect, useLayoutEffect, useState } from 'react'

type AuthContextType = {
    userData: User | null;
    isSignedIn: boolean | null;
    saveUser: (data: SignInResponse) => void;
    clearUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthContextProvider')
    }

    return context
}

function AuthContextProvider({ children }: PropsWithChildren) {
    const [userData, setUserData] = useState<User | null>(null)
    const [token, setToken] = useState<string | null>(null)
    const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null)

    function saveUser(data: SignInResponse) {
        setToken(data.token)
        setUserData(data.user)
        setIsSignedIn(true)
    }

    function clearUser() {
        setToken(null)
        setUserData(null)
        setIsSignedIn(false)
    }

    useEffect(() => {
        const handleGetToken = async () => {
            try {
                const response: MainResponse<SignInResponse> = await getToken()

                if (response.data) {
                    saveUser(response.data)
                }
            } catch {
                clearUser()
            }
        }

        handleGetToken()
    }, [])

    useLayoutEffect(() => {
        const authInterceptor = API.interceptors.request.use((config: CustomAxiosRequestConfig) => {
            config.headers.Authorization = token && !config._retry ? `Bearer ${token}` : config.headers.Authorization

            return config
        })

        return () => {
            API.interceptors.request.eject(authInterceptor)
        }
    }, [token])

    useLayoutEffect(() => {
        const refreshInterceptor = API.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest: CustomAxiosRequestConfig = error.config

                if (error.response.status == 403) {
                    try {
                        const response: MainResponse<SignInResponse> = await getToken()

                        if (response.data) {
                            saveUser(response.data)
                            originalRequest.headers.Authorization = `Bearer ${response.data.token}`
                            originalRequest._retry = true
                        }

                        return API(originalRequest)
                    } catch {
                        clearUser()
                    }
                }

                return Promise.reject(error)
            }
        )

        return () => {
            API.interceptors.response.eject(refreshInterceptor)
        }
    }, [])

    const value: AuthContextType = {
        userData,
        isSignedIn,
        saveUser,
        clearUser,
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider