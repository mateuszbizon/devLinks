import { getUserDetails } from '@/lib/services/userServices'
import { setInitialState } from '@/lib/store/slices/profileLinksSlice'
import { GetUserDetailsResponse, MainResponse } from '@/types/response'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
    userEmail: string
}

function useGetUserDetails({ userEmail }: Props) {
    const dispatch = useDispatch()
    const { data, isLoading, isError, error} = useQuery<MainResponse<GetUserDetailsResponse>, AxiosError>({
        queryKey: ['getUserDetails'],
        queryFn: () => getUserDetails(userEmail),
        retry: false,
    })

    useEffect(() => {
      if (data?.data?.userDetails) {
        const userDetails = data.data.userDetails

        dispatch(setInitialState({
          profileLinks: userDetails.links,
          profileDetails: {
            name: userDetails.name,
            surname: userDetails.surname,
            email: userDetails.email,
            image: userDetails.image
          },
          isDataFetched: true
        }))
      }
    }, [data])

  return {
    userDetailsData: data,
    isLoading,
    isError,
    error,
  }
}

export default useGetUserDetails