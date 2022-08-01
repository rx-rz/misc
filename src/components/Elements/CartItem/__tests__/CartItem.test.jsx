import { render, screen } from "@testing-library/react";
import { StateContext } from "src/context/countContext";
import { CartItem } from "../CartItem";

const price = 200;
const name = "micah";
const quantity = 3;

test("all the cart item properties displays correctly", () => {
  render(
    <StateContext>
      <CartItem name={name} price={price} quantity={quantity} />
    </StateContext>
  );
  const cartItem = screen.getByRole("article");
  expect(cartItem).toHaveTextContent(name);
  expect(cartItem).toHaveTextContent(`${price}`);
  expect(cartItem).toHaveTextContent(`${name}`);
});

// test("button click functions are fired correctly", () => {
//     const toggleQuantity = jest.fn()
//     render(<StateContext.Provider value={toggleQuantity}><CartItem name={name} price={price} quantity={quantity} /></StateContext.Provider>);
//     const increment = screen.getByRole("button", {name: "+"})
//     const decrement = screen.getByRole("button", {name: "-"})
//     userEvent.click(increment)
//     expect(toggleQuantity).toBeCalledTimes(1)
//     userEvent.click(decrement)
//     // expect(toggleQuantity).toBeCalledTimes(2)
// })
