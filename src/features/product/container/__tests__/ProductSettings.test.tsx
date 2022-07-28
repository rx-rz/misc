import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import { StateContextProvider } from "src/context/countContext";
import ProductSettings from "../ProductSettings";

test("check if the quantity returns to a default value of 1", () => {
  render(
    <StateContextProvider>
      <ProductSettings name="micah" price={100} />
    </StateContextProvider>
  );
  const quantity = screen.getByRole('button', {name: /quantity/i})
  console.log(quantity.innerHTML)
  expect(quantity).toBeInTheDocument()
});

test('check if the decrement and increment buttons work', () => {
    const quantity = screen.getByRole('button', {name: /quantity/i})
    const increment = screen.getByRole("button", {name: /add to cart/i})
    userEvent.click(increment)
    expect(quantity).toHaveTextContent("Quantity: 1")
})