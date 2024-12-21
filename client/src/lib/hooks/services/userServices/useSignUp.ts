import { MESSAGES } from '@/constants/messages'
import { signUp } from '@/lib/services/userServices'
import { AppDispatch } from '@/lib/store'
import { showDefaultMessage } from '@/lib/store/slices/popupMessageSlice'
import getMessageCodes from '@/lib/utils/getMessageCode'
import { ErrorResponse } from '@/types/response'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

function useSignUp() {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const { mutate: handleSignUp, isPending } = useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            dispatch(showDefaultMessage(MESSAGES.user.userCreated))
            router.push('/sign-in')
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
    handleSignUp,
    isPending
  }
}

export default useSignUp