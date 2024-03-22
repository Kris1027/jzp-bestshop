import { useLoaderData } from "react-router-dom";
import { FavouriteProduct } from "../components/FavouriteProduct";
import { ProductsProps } from "../types/product";

export function Favourites() {
  const favouriteProducts = useLoaderData() as {
    product: ProductsProps;
  }[];

  return (
    <main className="flex-1">
      <div className="bg-bgGrey m-4 max-w-[100rem]">
        <h2 className="px-4 pt-4 text-[24px] font-bold">Ulubione</h2>
        <ul className="px-4">
          {favouriteProducts.map((favourite) => {
            return (
              <FavouriteProduct
                favourite={favourite}
                key={favourite.product.id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
