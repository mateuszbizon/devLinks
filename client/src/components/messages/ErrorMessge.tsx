import { MESSAGES } from '@/constants/messages';
import React from 'react'

type ErrorMessageProps = {
    statusCode?: number;
}

function ErrorMessage({ statusCode = 404 }: ErrorMessageProps) {
  const errorMessages: { [key: string]: string } = {
    404: MESSAGES.page.pageNotFound,
  }

  return (
    <div className='flex flex-col items-center gap-5 text-grey-dark py-10'>
        <span className='font-bold text-2xl'>{errorMessages[statusCode] || MESSAGES.database.databaseFail}</span>
        <span className='font-semibold text-xl'>{statusCode}</span>
    </div>
  )
}

export default ErrorMessage