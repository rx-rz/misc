import userEvent from "@testing-library/user-event";
import { StateContext } from "src/context/countContext";
import { render, screen } from "src/test/test_utils";
import { CartItem } from "../CartItem";
const name = "micah";
const price = 200;
const quantity = 1;

const toggleCartItemQuantity = jest.fn();
const removeItemFromCart = jest.fn();

const TestCartItem = (
  <StateContext.Provider value={{toggleCartItemQuantity, removeItemFromCart}}>
    <CartItem name={name} price={price} quantity={quantity} />
  </StateContext.Provider>
);

test("all the cart item properties displays correctly", () => {
  render(TestCartItem);
  const cartItem = screen.getByRole("article");
  expect(cartItem).toHaveTextContent(name);
  expect(cartItem).toHaveTextContent(`${price}`);
  expect(cartItem).toHaveTextContent(`${name}`);
});

test("the cart item's quantity is correctly increased", () => {
  render(TestCartItem)
  const incrementButton = screen.getByRole("button", {name: "+"})
  userEvent.click(incrementButton)
  expect(toggleCartItemQuantity).toHaveBeenCalledTimes(1)
  expect(toggleCartItemQuantity).toHaveBeenCalledWith(name, "increment")
})

test("the cart item's quantity is correctly decreased", () => {
  render(TestCartItem)
  const decrementButton = screen.getByRole("button", {name: "-"})
  userEvent.click(decrementButton)
  expect(toggleCartItemQuantity).toHaveBeenCalledTimes(1)
  expect(toggleCartItemQuantity).toHaveBeenCalledWith(name, "decrement")
})

test("the cart item is removed on remove button click", () => {
  render(TestCartItem)
  const removeButton = screen.getByTestId("remove-button")
  userEvent.click(removeButton)
  expect(removeItemFromCart).toHaveBeenCalledTimes(1)
  expect(removeItemFromCart).toHaveBeenCalledWith(name)
})