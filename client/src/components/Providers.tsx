"use client"

import { store } from '@/lib/store'
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default Providers