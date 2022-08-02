import userEvent from "@testing-library/user-event";
import { Toaster } from "react-hot-toast";

import { render, screen, waitFor } from "src/test/test_utils";
import ProductSettings from "../ProductSettings";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

test("item is added to cart", async () => {
  render(
    <>
      <div>
        <Toaster />
      </div>
      <ProductSettings name="micah" price={100} />
    </>
  );

  const addtoCartButton = screen.getByRole("button", { name: /add to cart/i });
  userEvent.click(addtoCartButton);
  await waitFor(() => expect(screen.queryByText(/item added to cart/i)));
});
