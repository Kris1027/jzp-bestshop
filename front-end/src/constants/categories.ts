export type GenderProps = {
  genderName: string;
  path: string;
};

export const GENDERS: GenderProps[] = [
  { genderName: "kobieta", path: "/woman" },
  { genderName: "mężczyzna", path: "/man" },
  { genderName: "dziecko", path: "/children" },
];
