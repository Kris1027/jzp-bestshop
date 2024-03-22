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
import { ProductDetails } from "./views/ProductDetails";
import { productLoader } from "./components/api/productLoader";
import { favouritesLoader } from "./components/api/favouritesLoader";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "favourites",
        element: <Favourites />,
        loader: favouritesLoader,
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
      {
        path: ":gender/:category?/:subcategory?/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
