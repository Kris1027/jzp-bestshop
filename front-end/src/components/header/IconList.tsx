import { CurrencySwitcher } from "./CurrencySwitcher";
import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { Link } from "react-router-dom";

export function IconList() {
  const bagItems: number = 2;

  return (
    <ul className="flex gap-4 items-center">
      <li>
        <CurrencySwitcher />
      </li>
      <li>
        <Link to="favourites">
          <img src={HEART_ICON} />
        </Link>
      </li>
      <li className="relative">
        <Link to="cart">
          <img src={BAG_ICON} />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-bgYellow flex justify-center items-center rounded-lg p-2">
            {bagItems}
          </div>
        </Link>
      </li>
    </ul>
  );
}
