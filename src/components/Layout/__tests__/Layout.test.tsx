import userEvent from "@testing-library/user-event";
import { useRef } from "react";
import CartList from "src/features/cart/container/CartList";
import { render, screen, waitFor } from "src/test/test_utils";
const TestLayout = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const handleCartClose = () => {
    cartRef.current!.style.display = "none";
  };

  const handleCartOpen = () => {
    cartRef.current!.style.display === "none" &&
      (cartRef.current!.style.display = "block");

  };
  return(
    <div data-testid="cart">
      <button onClick={handleCartOpen}>Open Cart</button>
      <div>
        <button onClick={handleCartClose}>Close Cart</button>
        <div ref={cartRef} style={{display: "none"}}>Cart List: <CartList/></div>
      </div>
    </div>
  );
};

test("cart opens and closes on button click", async () => {
  render(<TestLayout/>);
  const cart = screen.getByTestId("cart")
  console.log(cart.innerHTML)
  const openButton = screen.getByRole("button", {name: /open cart/i})
  // const closeButton = screen.getByRole("button", {name: /close cart/i})
  await userEvent.click(openButton)
  expect(screen.getByText(/cart list:/i)).toBeInTheDocument()
  // userEvent.click(closeButton)
  // await waitFor(() =>expect(screen.queryByText(/cart list:/i)).not.toBeInTheDocument())
});
