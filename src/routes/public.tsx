import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/:name/:price", element: <ProductPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "*", element: <ErrorPage /> },
];
