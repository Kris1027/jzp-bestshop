import { ProductCart } from "./ProductCart";
import { type ProductsProps } from "../types/product";

export function Bestsellers({ bestsellers }: { bestsellers: ProductsProps[] }) {
  return (
    <div className="px-4">
      <h2 className="mt-8 mb-4 text-[24px] font-bold">
        Sprawdź nasze bestellery
      </h2>
      <ul className="flex justify-around pb-4">
        {bestsellers.map((bestseller) => {
          return (
            <li className="relative" key={bestseller.id}>
              <ProductCart product={bestseller} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
