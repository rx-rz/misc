import React from 'react'
import Link from '../home/Link'

export default function Navbar() {
  return (
    <div className='w-screen flex flex-row justify-evenly h-8 bg-slate-200'>
        <Link children='Home' location='/'/>
        <Link children='About' location='/'/>
        <Link children='Profile' location='/'/>
    </div>
  )
}
