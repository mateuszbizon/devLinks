import { MESSAGES } from '@/constants/messages'
import { updateUserLinks } from '@/lib/services/userServices'
import { AppDispatch } from '@/lib/store'
import { showChangesSavedMessage, showDefaultMessage } from '@/lib/store/slices/popupMessageSlice'
import getMessageCodes from '@/lib/utils/getMessageCode'
import { ErrorResponse } from '@/types/response'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'

function useUpdateUserLinks() {
    const dispatch = useDispatch<AppDispatch>()
    const { mutate, isPending } = useMutation({
        mutationFn: updateUserLinks,
        onSuccess: () => {
            dispatch(showChangesSavedMessage(MESSAGES.user.changesSaved))
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            if (error.response?.status == 400) {
                const message = getMessageCodes(error.response.data.messageCode, error.response.data.message)

                dispatch(showDefaultMessage(message))
                return
            }

            dispatch(showDefaultMessage(MESSAGES.database.databaseFail))
        }
    })

  return {
    handleUpdateUserLinks: mutate,
    isPending,
  }
}

export default useUpdateUserLinks