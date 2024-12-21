import { signIn } from '@/lib/services/userServices'
import getMessageCodes from '@/lib/utils/getMessageCode'
import { ErrorResponse, MainResponse, SignInResponse } from '@/types/response'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'

function useSignIn() {
    const router = useRouter()
    const { mutate: handleSignIn, isPending } = useMutation({
        mutationFn: signIn,
        onSuccess: (data: MainResponse<SignInResponse>) => {
            router.push('/')
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            if (error.response?.status === 400) {
                console.log(getMessageCodes(error.response.data.messageCode, error.response.data.message))
                return
            }

            console.log(error.response?.data.message)
        }
    })

  return {
    handleSignIn,
    isPending
  }
}

export default useSignIn