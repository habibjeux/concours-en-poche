import React from 'react'

export default function Button(props) {
  return (
    <a className='text-black border-2 inline-block mt-2 px-4 py-3 rounded-full hover:border-green hover:bg-green hover:text-white text-center' href={props.href}>{props.text}</a>
  )
}
