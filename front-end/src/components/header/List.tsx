import { CurrencySwitcher } from "./CurrencySwitcher";
import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { Link } from "react-router-dom";

export function List() {
  return (
    <ul className="flex gap-4">
      <li>
        <CurrencySwitcher />
      </li>
      <li>
        <Link to="#">
          <img src={BAG_ICON} />
        </Link>
      </li>
      <li>
        <Link to="#">
          <img src={HEART_ICON} />
        </Link>
      </li>
    </ul>
  );
}
