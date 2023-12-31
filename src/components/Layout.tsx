import React, { ReactNode } from 'react'

export const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex'>{children}</div>
  )
}
