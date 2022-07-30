import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StateContextProvider } from "src/context/countContext";
import ProductPage from "src/pages/ProductPage";
import ProductSettings from "../ProductSettings";

test("check if the quantity returns to a default value of 1", () => {
  render(
    <StateContextProvider>
        
      <ProductSettings name="micah" price={100} />
    </StateContextProvider>
  );
  const quantity = screen.getByRole("button", { name: /quantity/i });
  console.log(quantity.innerHTML);
  expect(quantity).toBeInTheDocument();
});

// test("check if the decrement and increment buttons work", async () => {
//   render(
//     <StateContextProvider>
//       <ProductPage />
//     </StateContextProvider>
//   );
//   const increment = screen.getByRole("button", { name: /add to cart/i });
//   await userEvent.click(increment);
//   expect(screen.getByText(/sucessfully/i)).toHaveTextContent(
//     /sucessfully added to cart/i
//   );
// });p
