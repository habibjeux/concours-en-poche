import React from 'react'
import header from '../assets/header.jpg'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div className='flex w-full sm:h-[40vh] h-[30vh] relative overflow-hidden'>
        <img src={header} className='object-cover w-full' />
        <img src={logo} alt="logo" className='' />
    </div>
  )
}
