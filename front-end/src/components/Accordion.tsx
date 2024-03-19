import { useState } from "react";
import ARROW_ICON from "../assets/arrow.svg";
import { ProductsProps } from "../types/product";

export function Accordion({ product }: { product: ProductsProps }) {
  const [showInfo, setShowInfo] = useState(true);
  const [showMaintenance, setShowMaintenance] = useState(false);

  const handleClick = () => {
    setShowInfo((prev) => !prev);
    setShowMaintenance((prev) => !prev);
  };

  return (
    <div>
      <div className="pb-4 ">
        <button
          onClick={handleClick}
          className="flex justify-between font-bold pb-4 w-full"
        >
          Opis produktu
          <img
            className={showInfo ? "rotate-90" : "-rotate-90"}
            src={ARROW_ICON}
          />
        </button>
        {showInfo && <p className="border-t-2">{product.description}</p>}
      </div>
      <button
        onClick={handleClick}
        className="flex justify-between font-bold pb-4 w-full"
      >
        Wskazówki pielęgnacyjne
        <img
          className={showMaintenance ? "rotate-90" : "-rotate-90"}
          src={ARROW_ICON}
        />
      </button>
      {showMaintenance && (
        <p className="border-t-2">{product.maintenanceInfo}</p>
      )}
    </div>
  );
}
