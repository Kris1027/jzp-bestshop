import { Breadcrumbs } from "../components/Breadcrumbs";
import { CategoryMenu } from "../components/CategoryMenu";
import { Product } from "../components/Product";

export function ProductDetails() {
  return (
    <div className="flex">
      <CategoryMenu />
      <div className="flex-1">
        <Breadcrumbs />
        <Product />
      </div>
    </div>
  );
}
