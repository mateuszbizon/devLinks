import { signIn } from '@/lib/services/userServices'
import { MainResponse, SignInResponse } from '@/types/response'
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
        onError: (error: AxiosError) => {
            console.log(error.message)
        }
    })

  return {
    handleSignIn,
    isPending
  }
}

export default useSignIn