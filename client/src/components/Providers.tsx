"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '@/lib/store'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import AuthContextProvider from '@/context/AuthContext'

function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </Provider>
    </QueryClientProvider>
  )
}

export default Providers