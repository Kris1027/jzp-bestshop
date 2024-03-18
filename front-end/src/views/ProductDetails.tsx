import { FullWidthButton } from "../components/FullWidthButton";
import CAR_ICON from "../assets/car.svg";
import RETURN_ICON from "../assets/return.svg";
import { useState } from "react";

export function ProductDetails() {
  const [photo, setPhoto] = useState<number>(0);

  const product = {
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
  };

  return (
    <div className="flex items-start p-4 gap-4">
      <div className="flex flex-col gap-4">
        {product.photos.map((photo) => {
          return (
            <img
              className="w-[85px] h-[120px]"
              key={photo}
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
        <div className="flex gap-4">
          <img src={RETURN_ICON} />
          <span>Zwrot do 100 dni</span>
        </div>
      </div>
    </div>
  );
}
