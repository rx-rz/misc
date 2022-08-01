import React, { Suspense, useState } from "react";
import {  Outlet } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ErrorPage from "src/pages/ErrorPage";
import CheckoutPage from "src/pages/CheckoutPage";

const HomePage = React.lazy(() => import('../pages/HomePage'))
const ProductPage = React.lazy(() => import('../pages/ProductPage'))
const storageTheme = localStorage.getItem("theme")
const App = () => {
    const [theme, setTheme] = useState(storageTheme ? storageTheme : "dark");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
      document.body.classList!.toggle("dark")
    };
  
    return (
        <Layout handleChange={toggleTheme} theme={theme}>
            <Suspense fallback={<p>Loading...</p>}>
                <Outlet/>
            </Suspense>
        </Layout>
    )
}

export const publicRoutes = [
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '/', element: <HomePage/>},
            {path: '/:name/:price', element: <ProductPage/>},
            {path: '/checkout', element: <CheckoutPage/>},
            {path: '*', element: <ErrorPage/>}
        ]
    }
]
