import { Bestsellers } from "../components/Bestsellers";
import { Hero } from "../components/header/Hero";

export function MainPage() {
  return (
    <main className="flex-1">
      <Hero />
      <Bestsellers />
    </main>
  );
}
