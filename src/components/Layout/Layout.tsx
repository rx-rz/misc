import React, { useEffect, useRef } from "react";
import { useCartContext } from "src/context/cartContext";
import { NavLink, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Header, Switcher } from "src/components";

import {CartList} from "src/features"

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { totalQuantities } = useCartContext()!;

  //close cart if user changes page
  useEffect(() => {
    handleCartClose();
  }, [location]);

  const cartRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const handleCartClose = () => {
    cartRef.current!.style.display = "none";
    bodyRef.current!.style.opacity = "1";
  };

  const handleCartOpen = () => {
    cartRef.current!.style.display === "none" &&
      (cartRef.current!.style.display = "block");
    bodyRef.current!.style.opacity = "0.3";
  };

  return (
    <div className="dark:bg-gray-900  w-full bg-tertiary">
      
      <Header>
        <NavLink
          className="font-medium text-primary dark:text-white
           text-2xl md:text-3xl flex items-center"
          to="/"
        >
          <img src="/assets/logo.png" alt="MiscAvatars" width="60px" height="60px" />{" "}
          <h1 className="-ml-4">MA</h1>
        </NavLink>

        <div className="flex items-center">
          <Switcher />
          <button onClick={handleCartOpen} className="flex items-center ml-5">
            <img
              src="/assets/cart.svg"
              alt="Cart"
              width="30px"
              className="mr-2 dark:invert"
            />
            <p className="font-bold dark:text-white">{totalQuantities}</p>
          </button>
        </div>
      </Header>

      <div className="relative">
        <div ref={bodyRef}>
          <div>
            <Toaster />
          </div>
          <div>{children}</div>
        </div>
        <div
          className="right-0 z-50  bg-slate-100 shadow-sm
           sm:w-7/12 md:w-6/12  w-11/12 
          dark:bg-slate-900  fixed top-0
           overflow-x-hidden overflow-y-scroll
          bottom-0 m-auto"
          ref={cartRef}
        >
          <div className="w-10/12 m-auto">
            <button onClick={handleCartClose} className="my-8 dark:invert">
              <img
                src="/assets/close.svg"
                alt="Close"
                width="30px"
                title="Close Cart"
              />
            </button>
            <CartList />
          </div>
        </div>
      </div>
    </div>
  );
}
