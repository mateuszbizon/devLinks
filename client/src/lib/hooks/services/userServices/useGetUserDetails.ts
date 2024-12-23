import { getUserDetails } from '@/lib/services/userServices'
import { GetUserDetailsResponse, MainResponse } from '@/types/response'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useEffect } from 'react'

type Props = {
    userEmail: string
}

function useGetUserDetails({ userEmail }: Props) {
    const { data, isLoading, isError, error } = useQuery<MainResponse<GetUserDetailsResponse>, AxiosError>({
        queryKey: ['getUserDetails'],
        queryFn: () => getUserDetails(userEmail)
    })

    useEffect(() => {
      if (data?.data?.userDetails) {
        console.log(data.data.userDetails)
      }
    }, [data])

  return {
    isLoading,
    isError,
    error,
  }
}

export default useGetUserDetails