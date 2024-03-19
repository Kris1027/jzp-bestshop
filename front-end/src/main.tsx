import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MainPage } from "./views/MainPage";
import { Favourites } from "./views/Favourites";
import { Bag } from "./views/Bag";
import { ProductsList } from "./views/ProductsList";
import { ProductDetails } from "./views/ProductDetails";
import { mainPageLoader } from "./components/api/mainPageLoader";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: ":gender?",
        element: <MainPage />,
        loader: mainPageLoader, //fix problem with types
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
        path: ":gender?/:category/:subcategory?",
        element: <ProductsList />,
      },
      {
        path: ":gender?/:category/:subcategory/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
