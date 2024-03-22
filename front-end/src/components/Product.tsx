import { FullWidthButton } from "../components/FullWidthButton";
import CAR_ICON from "../assets/car.svg";
import RETURN_ICON from "../assets/return.svg";
import { useState } from "react";
import { ProductsProps } from "../types/product";
import { Accordion } from "./Accordion";

export function Product({ product }: { product: ProductsProps }) {
  const [photo, setPhoto] = useState<number>(0);

  return (
    <div className="flex items-start p-4 gap-4">
      <div className="flex flex-col gap-4">
        {product.photos.map((photo: string, index) => {
          return (
            <img
              className="w-[85px] h-[120px]"
              key={index}
              onClick={() => setPhoto(product.photos.indexOf(photo))}
              src={photo}
            />
          );
        })}
      </div>
      <div>
        <img className="w-[500px] h-[700px]" src={product.photos[photo]} />
      </div>
      <div className="flex-1">
        <h2 className="text-[24px] font-bold mb-2">{product.productName}</h2>
        <p className="font-bold mb-2">{product.brand}</p>
        <p className="text-textRed text-[24px] pb-[32px]">
          {product.pricePLN}zł
        </p>
        <FullWidthButton variant="black">Dodaj do koszyka</FullWidthButton>
        <div className="pt-[32px] pb-4 flex gap-4">
          <img src={CAR_ICON} />
          <span>Dostawa do 24h</span>
        </div>
        <div className="flex gap-4 pb-8">
          <img src={RETURN_ICON} />
          <span>Zwrot do 100 dni</span>
        </div>
        <Accordion product={product} />
      </div>
    </div>
  );
}
