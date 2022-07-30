import React, { useEffect, useRef } from "react";
import { Header } from "src/components/Header";
import ReactSwitch from "react-switch";
import { useStateContext } from "src/context/countContext";
import { NavLink, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Button } from "src/components/Button";
const CartList = React.lazy(() => import("src/features/cart/CartList"));

type LayoutProps = {
  handleChange: () => void;
  theme: string;
  children: React.ReactNode;
};

/**The Navbar Component accepts 3 link items as children and justifies them evenly */
export default function Layout({ handleChange, theme, children }: LayoutProps) {
  const location = useLocation();
  const { totalQuantities } = useStateContext()!;

  /**Upon change in location, the cart closes if it is */
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
          className="font-medium text-primary dark:text-white text-xl md:text-3xl"
          to="/"
        >
          MISC<span>avatars</span>
        </NavLink>
        <div>
          <ReactSwitch
            onChange={handleChange}
            checked={theme === "dark"}
            onColor="#ffffff"
            height={19}
            color="#ffffff"
            borderRadius={0}
            onHandleColor="#725BFF"
            uncheckedIcon={<p className="grid place-content-center">🌑</p>}
            checkedIcon={<p>🌞</p>}
          />
          <Button
            className="dark:text-white text-sm md:text-lg font-bold ml-2"
            handleClick={handleCartOpen}
            text={`CART[${totalQuantities}]`}
          />
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
          className="right-0 z-50  bg-white shadow-sm border-black border-2 dark:bg-gray-900 dark:border-primary fixed top-0"
          ref={cartRef}
        >
          <Button
            handleClick={handleCartClose}
            text="CLOSE CART"
            className=" w-4/12 ml-1 mt-2 font-bold dark:text-slate-100 py-4"
          />
          <CartList />
        </div>
      </div>
    </div>
  );
}
