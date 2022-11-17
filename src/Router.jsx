import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { CartDetails } from "./components/CartDetails/CartDetails";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import ShipmentData from "./components/Summary/ShipmentData";
import Summary from "./components/Summary/Summary";
import ErrorPage from "./ErrorPage";
import { Root } from "./Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/products",
        element: <ProductsList />
      },
      {
        path: "/cart",
        element: <CartDetails />
      },
      {
        path: "products/:productId",
        element: <ProductDetails />
      },
      {
        path: "/shipment",
        element: <ShipmentData />
      },
      {
        path: "/summary",
        element: <Summary />
      }
    ]
  },
]);


export function Router() {
  return (
    <RouterProvider router={router} />
  )
}

