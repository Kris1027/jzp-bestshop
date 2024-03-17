import { FullWidthButton } from "../FullWidthButton";

export function Hero() {
  return (
    <div className="h-[500px] bg-hero-pattern bg-cover flex items-start relative">
      <div className="absolute top-20 left-12 py-12 px-20 bg-bgGrey bg-opacity-50">
        <h2 className="text-[28px] font-bold mb-4">Letnie promocje do -70%!</h2>
        <p className="mb-6">Tylko najlepsze okazje!</p>
        <FullWidthButton>Sprawdź produkty</FullWidthButton>
      </div>
    </div>
  );
}
