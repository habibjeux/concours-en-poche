import React, { useState } from 'react'
import {ChevronRightIcon} from '@heroicons/react/24/solid'
export default function TextToggle(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => {setIsOpen(!isOpen)}

  return (
    <div className='flex'>
      <p className={`h-6 w-5  mr-1 my-0.5 flex items-center justify-center rounded flex-shrink-0 hover:bg-[#99999975] cursor-pointer`}  onClick={toggleText}>
        <ChevronRightIcon className={`h-4 w-4 transition-transform duration-200 ease-out ${isOpen && 'rotate-90'}`} />
      </p>
      <div>
        <h3 className='font-[600] m-0'>{props.title}</h3>
        {isOpen && <p className='text-gray'>{props.children}</p>}
      </div>
    </div>
  )
}
