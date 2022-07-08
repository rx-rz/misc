import React, { useContext, useState } from "react";
import { createContext } from "react";


const StateContext = createContext()
export const StateContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.filter((item) => item.name === product.name)
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
    if(checkProductInCart){
      const updatedCartItems = cartItems.forEach((cartProduct) => {
        if(cartProduct.name === product.name){
          return {...cartProduct, quantity: cartProduct.quantity + quantity}
        }
      })
      // console.log(true)
      // const updatedCartItems = cartItems.map((cartProduct) => {
      //   if(cartProduct.name === product.name) return {
      //     ...cartProduct,
      //     quantity: cartProduct.quantity + quantity
      //   }
      // })
      setCartItems(updatedCartItems)
    }else{
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}])
    }
    console.log(cartItems)
  }

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if(prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1
    })

  }

  

  return (
    <StateContext.Provider value={{cartItems, totalPrice, totalQuantities, quantity, increaseQuantity, decreaseQuantity, onAdd}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext)
