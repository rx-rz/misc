// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

import { render, screen } from "@testing-library/react";
import SmallerProductCard from "./SmallerProductCard";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders correct product name and price", () => {
  render(
    <SmallerProductCard
      name="Name"
      price={20}
      imageUrl="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  );
  const productPrice = screen.getByTestId("product-price");
  expect(productPrice).toBe(20);

  const productName = screen.getByTestId("product-name");
  expect(productName).toBe("Name");
});
