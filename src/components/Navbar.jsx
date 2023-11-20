import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {setIsOpen(!isOpen);}

  return (
   <>
      <nav className='flex items-center justify-between px-4  h-14 fixed z-40 top-0 bg-white w-full  border-gold shadow-md'>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo flex items-center text-gold text-xl"><img src={logo} className='w-12' alt="logo" />Mes tutorat</a>
        </div>
        <ul className="hidden gap-4 md:flex">
          <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="/">Accueil</a></li>
          <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="#">Nous choisir</a></li>
          <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="#">FAQ's</a></li>
          <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="/appointment">Prendre RDV</a></li>
        </ul>
        <div className='w-8 h-8 cursor-pointer flex-shrink-0 flex md:hidden'> 
          { isOpen? <XMarkIcon onClick={toggleOpen} className="" /> : <Bars3BottomRightIcon onClick={toggleOpen} className="" />}          
        </div>
        {isOpen &&  
          <ul className="gap-4 flex flex-col bottom-0 h-screen right-0 absolute  items-center top-0 pt-12 mt-14 bg-green w-full">
            <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="/">Accueil</a></li>
            <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="#">Nous choisir</a></li>
            <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="#">FAQ's</a></li>
            <li><a className="text-black hover:border-b-2 border-gold py-3.5" href="/appointment">Prendre RDV</a></li>
          </ul>
        }
      </nav>
  </>
  )
}
