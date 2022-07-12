import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { createContext } from "react";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const itemsInStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): []
  const [cartItems, setCartItems] = useState(itemsInStorage);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useLayoutEffect(() => {
    setTotalQuantities(cartItems.length)
  }, [cartItems])

  const onAdd = (product, quantity) => {
    // localStorage.clear()
    // setCartItems([])
    
    const exist = cartItems.find((item) => item.name === product.name);
    if (!exist) {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === product.name
          ? { ...exist, quantity: quantity }
          : cartItem
      );
      setCartItems(updatedCartItems)
      localStorage.setItem("cart", JSON.stringify(cartItems))
      console.log(localStorage.getItem("cart"))
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1;
    });
  };

  return (
    <StateContext.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        quantity,
        setQuantity,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
