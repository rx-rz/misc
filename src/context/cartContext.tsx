import React, { useContext, useMemo, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type Product = {
  name: string;
  price: string | number;
};

type CartContextType = {
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

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const itemsInStorage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")!)
    : [];
  const [cartItems, setCartItems] = useState(itemsInStorage);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(2);

  useMemo(() => {
    /*get cart items from localStorage if it is available. */
    localStorage.setItem("cart", JSON.stringify(cartItems));
    let price = 0;
    for (let item of cartItems) {
      price += item.price * item.quantity;
    }
    /*looping through the items in the cart object gotten from localStorage,
    set the price variable to the value of the total available price. */
    setTotalPrice(price);

    let quantity = 0;
    for (let item of cartItems) {
      quantity += item.quantity;
    }

    /*looping through the items in the cart object gotten from localStorage,
    set the quantity variable to the value of the total available quantities. */
    setTotalQuantities(quantity);
  }, [cartItems]);

  /*sucess toast called on sucessful adding to cart. */
  const sucessToast = () =>
    toast.success("Item added to cart", {
      style: {
        borderRadius: 0,
        color: "#000",
        backgroundColor: "#fff",
        border: "1px solid #000",
      },
      duration: 700,
    });

  const onAddtoCart = (product: Product) => {
    /*check if the item added to cart already exists in the cart */
    const exist = cartItems.find(
      (item: CartItem) => item.name === product.name
    );
    if (!exist) {
      /*if the item does not exist, add both the product and quantity 
      of the item to the cart. Each cart item has a quantity default of 1 */
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      sucessToast();
    } else {
      /*if the item does exist, update the quantity of the item by increasing 
      it with a value of 1 */
      const updatedCartItems = cartItems.map((cartItem: CartItem) =>
        cartItem.name === product.name
          ? { ...exist, quantity: exist.quantity + 1 }
          : cartItem
      );
      /*proceed to update the value of the cart variable */
      setCartItems(updatedCartItems);
      sucessToast();
    }
  };

  /*function that increases the quantity of a cart item by 1 */
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  /*function that decreases the quantity of the cart item by 1. 
  Cart item has a minimum value of 1 */
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) return 1;
      return prevQuantity - 1;
    });
  };

  const toggleCartItemQuantity = (name: string, value: string) => {
    /*this function looks for the particular cart item quantity to be toggled based on their unique name.  */
    let foundProduct = cartItems.find((item: CartItem) => item.name === name);
    /*if the function has a value of "incerement", the cart item quantity is increased by 1 */
    if (value === "increment") {
      const updatedCartItems = cartItems.map((cartItem: CartItem) =>
        cartItem.name === name
          ? { ...foundProduct, quantity: foundProduct.quantity + 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else if (value === "decrement") {
      /*if the function has a value of "decrement", the cart item quantity is decreased by 1 */
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
    /*this function removes an item from the cart by 
    filtering the cart items based on cart name and 
    removing the one whose name matches the name 
    given as the function's parameter.  */
    const newCartItems = cartItems.filter(
      (item: CartItem) => item.name !== name
    );
    setCartItems(newCartItems);
  };
  return (
    <CartContext.Provider
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
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
