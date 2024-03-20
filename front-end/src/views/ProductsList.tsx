import { useLoaderData, useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ExpandableMenu } from "../components/ExpandableMenu";
import { Pagination } from "../components/Pagination";
import { ProductsContainer } from "../components/ProductsContainer";
import { type ProductsProps } from "../types/product";
import { CATEGORIES } from "../constants/categories";

export function ProductsList() {
  const products: ProductsProps[] = useLoaderData();
  const params = useParams();

  const foundCategory = CATEGORIES.find((c) => c.path === params.category);

  let foundSubcategory;

  if (params.subcategory) {
    foundSubcategory = foundCategory?.subcategories.find(
      (sc) => sc.path === params.subcategory
    );
  }

  return (
    <main className="px-4 flex">
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <ProductsContainer
          headerText={
            foundSubcategory
              ? foundSubcategory.categoryName
              : foundCategory?.categoryName
          }
          products={products}
        />
        <Pagination />
      </div>
    </main>
  );
}
