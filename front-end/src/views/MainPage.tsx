import { useLoaderData } from "react-router-dom";
import { Bestsellers } from "../components/Bestsellers";
import { Hero } from "../components/header/Hero";
import { type ProductsProps } from "../types/product";

export function MainPage() {
  const { heroImageUrl, bestsellers } = useLoaderData() as {
    heroImageUrl: string;
    bestsellers: ProductsProps[];
  };

  return (
    <main>
      <Hero heroImageUrl={heroImageUrl} />
      <Bestsellers bestsellers={bestsellers} />
    </main>
  );
}
