import { MESSAGES } from '@/constants/messages'
import { signIn } from '@/lib/services/userServices'
import { AppDispatch } from '@/lib/store'
import { showDefaultMessage } from '@/lib/store/slices/popupMessageSlice'
import getMessageCodes from '@/lib/utils/getMessageCode'
import { ErrorResponse, MainResponse, SignInResponse } from '@/types/response'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

function useSignIn() {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const { mutate: handleSignIn, isPending } = useMutation({
        mutationFn: signIn,
        onSuccess: (data: MainResponse<SignInResponse>) => {
            router.push('/')
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            if (error.response?.status === 400) {
                dispatch(showDefaultMessage(getMessageCodes(error.response.data.messageCode, error.response.data.message)))
                return
            }

            dispatch(showDefaultMessage(MESSAGES.database.databaseFail))
        }
    })

  return {
    handleSignIn,
    isPending
  }
}

export default useSignIn