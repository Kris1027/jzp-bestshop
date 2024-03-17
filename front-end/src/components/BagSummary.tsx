import { FullWidthButton } from "./FullWidthButton";
import CAR_ICON from "../assets/car.svg";

export function BagSummary() {
  return (
    <div className="w-[432px]">
      <h3 className="font-bold text-[24px] border-b-2 py-2">Podsumowanie</h3>
      <div className="flex justify-between pt-4">
        <p>Wartość produktów:</p>
        <p>398zł</p>
      </div>
      <div className="flex justify-between pt-4">
        <p>Koszt dostawy:</p>
        <p>49zł</p>
      </div>
      <div className="flex justify-between py-4 font-bold">
        <p>Do zapłaty:</p>
        <p>447zł</p>
      </div>
      <div>
        <FullWidthButton>do kasy</FullWidthButton>
      </div>
      <div className="flex justify-between mt-4 p-4 bg-bgGrey">
        <img src={CAR_ICON} />
        <p className="font-bold">Darmowa dostawa od 500zł</p>
      </div>
    </div>
  );
}
