import React from 'react'
import { NavLink } from 'react-router-dom'

type LinkProps = {
    children: string,
    location: string,
    className: string,
}
export default function CustomLink({children, location, className}: LinkProps) {
  return <NavLink to={location} className={className}>
    {children}
  </NavLink>
}
