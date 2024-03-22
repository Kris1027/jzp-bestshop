import { ProductsProps } from "../types/product";
import { ProductCart } from "./ProductCart";

export function ProductsContainer({
  products,
  headerText,
}: {
  products: ProductsProps[];
  headerText: string;
}) {
  return (
    <div>
      <h2 className="mt-8 mb-4 text-[24px] font-bold">{headerText}</h2>
      <ul className="flex justify-around pb-4 flex-wrap gap-20">
        {products.map((product) => {
          return (
            <li className="relative" key={product.id}>
              <ProductCart product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
