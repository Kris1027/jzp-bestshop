import { useLoaderData } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ExpandableMenu } from "../components/ExpandableMenu";
import { Product } from "../components/Product";
import { ProductsProps } from "../types/product";

export function ProductDetails() {
  const product = useLoaderData() as ProductsProps;

  return (
    <div className="flex">
      <ExpandableMenu />
      <div className="flex-1">
        <Breadcrumbs />
        <Product product={product} />
      </div>
    </div>
  );
}
