import { CURRENCIES } from "../../constants/currencies";

export function CurrencySwitcher() {
  return (
    <select className="py-[9px] pl-[13px] bg-bgGrey border-2 border-bgDarkGrey active:outline-none focus:outline-none">
      <option>{CURRENCIES.PLN}</option>
      <option>{CURRENCIES.USD}</option>
    </select>
  );
}
