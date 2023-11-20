import React from 'react'
import { InlineWidget } from "react-calendly";

export default function Appointment() {
  return (
    <div>
        <h1 className='text-center text-3xl sm:text-5xl md:text-6xl pt-12'>Appointment</h1>
        <InlineWidget url="https://calendly.com/concoursenpochesn/15min"  styles={{ minWidth: '320px', height: '700px' }} />
    </div>
  )
}
