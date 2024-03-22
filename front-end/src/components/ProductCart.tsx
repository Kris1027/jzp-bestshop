import { Link } from "react-router-dom";
import HEART_ICON from "../assets/heart.svg";
import { ProductsProps } from "../types/product";

const END_POINT_PATH_MAPPING: { [key: string]: string } = {
  men: "mezczyzna",
  women: "kobieta",
  children: "dziecko",
};

export function ProductCart({ product }: { product: ProductsProps }) {
  return (
    <li className="relative">
      <Link
        to={`/${END_POINT_PATH_MAPPING[product.gender]}/${product.category}/${
          product.subcategory
        }/${product.id}`}
      >
        <img
          className="h-[400px] w-[255px]"
          src={product.photos[0]}
          alt="product image"
        />
        <img className="absolute top-[8px] left-[7px]" src={HEART_ICON} />
        <h3 className="font-bold">{product.productName}</h3>
        <p className="text-textRed">{product.pricePLN}zł</p>
      </Link>
    </li>
  );
}
