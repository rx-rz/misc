import React from "react";
import { NavLink } from "react-router-dom";
type LinkProps = {
  children: string;
  location: string;
};
export default function Link({ children, location }: LinkProps) {
  return (
    <NavLink
      to={location}
      className="text-sm text-amber-800 hover:text-amber-600 mx-1"
    >
      {children}
    </NavLink>
  );
}
