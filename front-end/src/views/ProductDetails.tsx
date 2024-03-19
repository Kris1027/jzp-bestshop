import { Breadcrumbs } from "../components/Breadcrumbs";
import { CategoryMenu } from "../components/CategoryMenu";
import { Product } from "../components/Product";
import { type ProductsProps } from "../types/product";

export function ProductDetails() {
  const product: ProductsProps = {
    id: 1,
    gender: "men",
    category: "odziez",
    subcategory: "koszulki",
    productName: "T-Shirt",
    brand: "Top Brand",
    pricePLN: 49,
    priceUSD: 10,
    photos: [
      "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
      "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
      "http://localhost:3000/product-photos/man-t-shirt-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
    maintenanceInfo:
      "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu",
  };

  return (
    <div className="flex">
      <CategoryMenu />
      <div className="flex-1">
        <Breadcrumbs />
        <Product product={product} />
      </div>
    </div>
  );
}
