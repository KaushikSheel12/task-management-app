import React, { ReactNode } from 'react'

interface IProps{
    children:ReactNode,
    title:string
    color:string
}

export const ColoumnWrapper = ({children,title,color}:IProps) => {
  return (
    <div className='min-w-[280px]  '>
        <header className='flex items-center space-x-[12px]'>
            <div style={{background:color}} className="h-[15px] w-[15px] rounded-full "/>
            <p className='text-[12px] text-gray-100 uppercase tracking-[3px]'>{title}</p>
        </header>
        {children}</div>
  )
}
