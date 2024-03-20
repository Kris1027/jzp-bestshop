export type GenderProps = {
  genderName: string;
  path: string;
};

export type SubcategoriesProps = {
  categoryName: string;
  path: string;
};

export type CategoriesProps = {
  categoryName: string;
  path: string;
  subcategories: SubcategoriesProps[];
};

export const GENDERS: GenderProps[] = [
  { genderName: "Kobieta", path: "kobieta" },
  { genderName: "Mężczyzna", path: "mezczyzna" },
  { genderName: "Dziecko", path: "dziecko" },
];

export const CATEGORIES: CategoriesProps[] = [
  {
    categoryName: "Odzież",
    path: "odziez",
    subcategories: [
      { categoryName: "Koszulki", path: "koszulki" },
      { categoryName: "Swetry", path: "swetry" },
      { categoryName: "Spodnie", path: "spodnie" },
    ],
  },
  {
    categoryName: "Obuwie",
    path: "obuwie",
    subcategories: [
      { categoryName: "Eleganckie", path: "eleganckie" },
      { categoryName: "Sportowe", path: "sportowe" },
      { categoryName: "Sneakersy", path: "sneakersy" },
    ],
  },
  {
    categoryName: "Akcesoria",
    path: "akcesoria",
    subcategories: [
      { categoryName: "Torby", path: "torby" },
      { categoryName: "Zegarki", path: "zegarki" },
    ],
  },
  {
    categoryName: "Sport",
    path: "sport",
    subcategories: [
      { categoryName: "Piłka Nożna", path: "pilkanozna" },
      { categoryName: "Narty", path: "narty" },
      { categoryName: "Pływanie", path: "plywanie" },
    ],
  },
];
