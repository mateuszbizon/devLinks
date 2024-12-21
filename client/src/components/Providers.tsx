"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from '@/lib/store'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
      </Provider>
    </QueryClientProvider>
  )
}

export default Providers