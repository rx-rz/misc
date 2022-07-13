import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const itemsInStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const [cartItems, setCartItems] = useState(itemsInStorage);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useLayoutEffect(() => {
    setTotalQuantities(cartItems.length);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    let price = 0;
    for (const i of cartItems) {
      price += i.price * i.quantity;
    }
    setTotalPrice(price);
  }, [cartItems]);

  const sucessToast = () => toast("Item sucessfully added to cart 💹");
  const onAdd = (product, quantity) => {
    // localStorage.clear()
    // setCartItems([])

    const exist = cartItems.find((item) => item.name === product.name);
    if (!exist) {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
      sucessToast();
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === product.name
          ? { ...exist, quantity: quantity }
          : cartItem
      );
      setCartItems(updatedCartItems);
      sucessToast();
    }
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1;
    });
  };

  const toggleCartItemQuantity = (name, value) => {
    let foundProduct = cartItems.find((item) => item.name === name);
    if (value === "inc") {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === name
          ? { ...foundProduct, quantity: foundProduct.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.name === name
            ? { ...foundProduct, quantity: foundProduct.quantity - 1 }
            : cartItem
        );
        setCartItems(updatedCartItems);
      }
    }
  };

  const removeItem = (name) => {
    const newCartItems = cartItems.filter((item) => item.name !== name);
    setCartItems(newCartItems);
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
        toggleCartItemQuantity,
        removeItem,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
