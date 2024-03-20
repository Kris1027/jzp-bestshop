import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./views/MainPage";
import { Favourites } from "./views/Favourites";
import { Bag } from "./views/Bag";
import { ProductsList } from "./views/ProductsList";
import { mainPageLoader } from "./components/api/mainPageLoader";
import { productsListLoader } from "./components/api/productsListLoader";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "bag",
        element: <Bag />,
      },
      {
        path: ":gender",
        element: <MainPage />,
        loader: mainPageLoader, //fix problem with types
      },
      {
        path: ":gender/:category/:subcategory?",
        element: <ProductsList />,
        loader: productsListLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
