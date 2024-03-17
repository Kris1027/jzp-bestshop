import { FavouriteProduct } from "../components/FavouriteProduct";
import { ProductsProps } from "../types/product";

export function Favourites() {
  const products: ProductsProps[] = [
    {
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
    },
    {
      id: 2,
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
    },
  ];

  return (
    <main className="flex-1">
      <div className="bg-bgGrey m-4 max-w-[100rem]">
        <h2 className="px-4 pt-4 text-[24px] font-bold">Ulubione</h2>
        <ul className="px-4">
          {products.map((product) => {
            return <FavouriteProduct product={product} />;
          })}
        </ul>
      </div>
    </main>
  );
}
