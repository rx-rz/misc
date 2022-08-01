import {  render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StateContext } from "src/context/countContext";
import { CartItem } from "./CartItem";


test("the reduce item quantity button should not work if the quantity is 1", () => {
  const toggleCartItemQuantity = jest.fn();
  render(
    <StateContext.Provider value={{ toggleCartItemQuantity }}>
      <CartItem name="micah" price={100} quantity={1} />
    </StateContext.Provider>
  );
  const number = screen.getByText("1");
  const incrementButton = screen.getByText("+");
  userEvent.click(incrementButton);
  // userEvent.click(incrementButton)
  expect(toggleCartItemQuantity).toHaveBeenCalledTimes(1)
  expect(number.innerHTML).toBe("1")
});
