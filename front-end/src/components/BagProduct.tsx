import { ProductsProps } from "../types/product";
import CLOSE_ICON from "../assets/vector.svg";

export function BagProduct({ product }: { product: ProductsProps }) {
  return (
    <li className="flex border-t-2 gap-6 py-4" key={product.id}>
      <div>
        <img
          className="h-[140px] w-[85px]"
          src={product.photos[0]}
          alt="product main image"
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between flex-1 text-[20px] font-bold">
          <div>
            <h3 className="pb-4">{product.productName}</h3>
            <p className="text-textGrey font-normal">
              Cena:{" "}
              <span className="font-bold text-textBlack">
                {product.pricePLN}zł
              </span>
            </p>
          </div>
          <p>{product.pricePLN}zł</p>
        </div>
        <div>
          <div className="flex gap-8">
            <button className="flex items-center gap-2">
              <img src={CLOSE_ICON} />
              Usuń
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
