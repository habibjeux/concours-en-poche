import React from 'react'

export default function Card(props) {
  return (
    <div className="flex w-full gap-2 bg-[#f1f1ef] py-4 pl-3 pr-4 rounded-[3px]">
        <p>{props.icon}</p>
        <p>{props.children}</p>
    </div>
  )
}
