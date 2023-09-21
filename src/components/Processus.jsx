import React from 'react'
import {CheckBadgeIcon} from '@heroicons/react/24/solid'
export default function Processus(props) {
  return (
    <div className='flex processus'>
        <CheckBadgeIcon  className='w-6 h-6 text-green flex-shrink-0'/>
        <p>{props.text}</p>
    </div>
  )
}
