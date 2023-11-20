import React from 'react'
import header from '../assets/header.jpg'
export default function Header() {
  return (
    <div className='mt-14 flex w-full sm:h-[40vh] h-[30vh] relative overflow-hidden'>
        <img src={header} className='object-cover w-full' />
    </div>
  )
}
