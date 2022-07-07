import React, { useContext, useState } from "react";
import { createContext } from "react";


const StateContext = createContext()
export const StateContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if(prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1
    })

  }

  const addCartItem = (productName, productPrice,  quantity) => {
    cartItems.push({name: productName, price: productPrice, quantity: quantity})
    console.log(cartItems)
    
  }

  return (
    <StateContext.Provider value={{cartItems, totalPrice, totalQuantities, quantity, increaseQuantity, decreaseQuantity, addCartItem}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext)
