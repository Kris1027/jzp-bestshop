import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./views/MainPage";
import { Favourites } from "./views/Favourites";
import { Bag } from "./views/Bag";
import { ProductsList } from "./views/ProductsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ":gender?",
        element: <MainPage />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "bag",
        element: <Bag />,
      },
      {
        path: ":gender?/:category?",
        element: <ProductsList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
