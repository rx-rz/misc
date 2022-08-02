import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type Product = {
    name: string;
    price: string | number
}

type StateContextType = {
  cartItems: CartItem[];
  totalPrice: number;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  totalQuantities: number;
  increaseQuantity: (product: number, quantity: number) => void;
  decreaseQuantity: (product: number, quantity: number) => void;
  onAddtoCart: (product: Product) => void;
  toggleCartItemQuantity: (name: string, value: string) => void;
  removeItemFromCart: (name: string) => void;
};

type StateContextProviderProps = {
  children: React.ReactNode;
};

export const StateContext = createContext<StateContextType | null>(null);

export const StateContextProvider = ({
  children,
}: StateContextProviderProps) => {
  const itemsInStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [];
  const [cartItems, setCartItems] = useState(itemsInStorage);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(2);

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

  const sucessToast = () =>
    toast.success("Item sucessfully added to cart", {
      style: {
        borderRadius: 0,
        color: "#725BFF",
        backgroundColor: "#ffffff",
        border: "1px solid #725BFF",
      },
      duration: 700,
    });


  const onAddtoCart = (product: Product) => {
    const exist = cartItems.find((item: CartItem) => item.name === product.name);
    if (!exist) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      sucessToast();
    } else {
      const updatedCartItems = cartItems.map((cartItem: CartItem) =>
        cartItem.name === product.name
          ? { ...exist, quantity: exist.quantity + 1 }
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

  const toggleCartItemQuantity = (name: string, value: string) => {
    let foundProduct = cartItems.find((item: CartItem) => item.name === name);
    if (value === "increment") {
      const updatedCartItems = cartItems.map((cartItem: CartItem) =>
        cartItem.name === name
          ? { ...foundProduct, quantity: foundProduct.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else if (value === "decrement") {
      if (foundProduct.quantity > 1) {
        const updatedCartItems = cartItems.map((cartItem: CartItem) =>
          cartItem.name === name
            ? { ...foundProduct, quantity: foundProduct.quantity - 1 }
            : cartItem
        );
        setCartItems(updatedCartItems);
      }
    }
  };

  const removeItemFromCart = (name: string) => {
    const newCartItems = cartItems.filter((item: CartItem) => item.name !== name);
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
        onAddtoCart,
        toggleCartItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
