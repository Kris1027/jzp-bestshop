import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../assets/arrow.svg";
import { CATEGORIES, GENDERS } from "../constants/categories";

export function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();

  const breadcrumbs = [
    {
      categoryName: `${GENDERS.find((g) => g.path === gender)?.genderName}`,
      path: `/${gender}`,
    },
    {
      categoryName: `${
        CATEGORIES.find((c) => c.path === category)?.categoryName
      }`,
      path: `/${gender}/${category}`,
    },
    {
      categoryName: `${
        CATEGORIES.find((c) => c.path === category)?.subcategories.find(
          (sc) => sc.path === subcategory
        )?.categoryName
      }`,
      path: `/${gender}/${category}/${subcategory}`,
    },
  ];

  if (!subcategory) {
    breadcrumbs.pop();
  }

  return (
    <ul className="flex pt-4">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 font-bold"
                  : "flex items-center gap-2"
              }
              end
              to={breadcrumb.path}
            >
              {breadcrumb.categoryName}
              {index !== breadcrumbs.length - 1 && (
                <img className="mr-2" src={ARROW_ICON} />
              )}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
