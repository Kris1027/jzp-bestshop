export type GenderProps = {
  genderName: string;
  path: string;
};

export type CategoriesProps = {
  categoryName: string;
  path: string;
};

export const GENDERS: GenderProps[] = [
  { genderName: "kobieta", path: "/woman" },
  { genderName: "mężczyzna", path: "/man" },
  { genderName: "dziecko", path: "/children" },
];

export const CATEGORIES: CategoriesProps[] = [
  { categoryName: "Odzież", path: "odziez" },
  { categoryName: "Obuwie", path: "obuwie" },
  { categoryName: "Akcesoria", path: "akcesoria" },
  { categoryName: "Sport", path: "sport" },
];
