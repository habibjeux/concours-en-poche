import React, { useState } from 'react'
import {HomeIcon, ArrowDownRightIcon, MegaphoneIcon} from '@heroicons/react/24/solid'

export default function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

  return (
    <nav className="bg-gold p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Excellence Mentorat</div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-green hover:text-gold">
              {mobileMenuOpen ? <ArrowDownRightIcon className="h-6 w-6" /> : <MegaphoneIcon className="h-6 w-6" />}
            </button>
          </div>
          <ul className={`md:flex space-x-4 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <a href="#" className="text-green hover:text-gold transition duration-300 ease-in-out">
                <MegaphoneIcon className="h-6 w-6 inline-block -mt-1 mr-1" />
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="text-green hover:text-gold transition duration-300 ease-in-out">
                À propos
              </a>
            </li>
            <li>
              <a href="#" className="text-green hover:text-gold transition duration-300 ease-in-out">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-green hover:text-gold transition duration-300 ease-in-out">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
