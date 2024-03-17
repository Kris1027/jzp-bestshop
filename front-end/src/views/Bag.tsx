import { BagProductsList } from "../components/BagProductsList";
import { BagSummary } from "../components/BagSummary";

export function Bag() {
  return (
    <main className="flex">
      <BagProductsList />
      <BagSummary />
    </main>
  );
}
