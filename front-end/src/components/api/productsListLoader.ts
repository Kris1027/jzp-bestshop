import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_MAPPING } from "../../constants/api";
import { CATEGORIES } from "../../constants/categories";

type Props = {
  gender: string;
  category: string;
  subcategory?: string;
};

type ParamsProps = {
  params: Props;
};

export function productsListLoader({
  params: { gender, category, subcategory },
}: ParamsProps) {
  const backEndPath = PATH_MAPPING[gender];

  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = backEndPath;

  if (foundCategory && foundGender) {
    let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=${category}`;

    if (subcategory) {
      const foundSubcategory = foundCategory.subcategories.find(
        (sc) => sc.path === subcategory
      );
      if (foundSubcategory) {
        url = `${url}&subcategory=${subcategory}`;
      } else {
        return redirect("/kobieta");
      }
    }

    return fetch(url);
  } else {
    redirect("/kobieta");
  }
}
