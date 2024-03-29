import { CATEGORIES } from "../constants/categories";
import ARROW_ICON from "../assets/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import clsx from "clsx";
import { PATH_MAPPING } from "../constants/api";

// const PATH_NAME: { [key: string]: string } = {
//   kobieta: "Kobieta",
//   mezczyzna: "Mężczyzna",
//   dziecko: "Dziecko",
// };

export function ExpandableMenu() {
  const params = useParams();

  const isActive = params.category;
  const isActiveSubcategory = params.subcategory;

  return (
    <div className="flex flex-col p-4">
      <h2 className="font-bold">
        {params.gender && PATH_MAPPING[params.gender]}
      </h2>
      <ul className="pt-4 px-4 w-[176px]">
        {CATEGORIES.map((category) => {
          return (
            <li key={category.categoryName}>
              <NavLink
                to={`/${params.gender}/${category.path}`}
                className={clsx(
                  "flex justify-between",
                  isActive === category.path ? "font-bold" : ""
                )}
              >
                {category.categoryName}
                <img
                  className={clsx(
                    "-rotate-90",
                    isActive === category.path ? "rotate-90" : ""
                  )}
                  src={ARROW_ICON}
                />
              </NavLink>
              {isActive === category.path && (
                <ul className="ml-4">
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.categoryName}>
                        <NavLink
                          className={
                            isActiveSubcategory === subcategory.path
                              ? "font-bold"
                              : ""
                          }
                          to={`/${params.gender}/${category.path}/${subcategory.path}`}
                        >
                          {subcategory.categoryName}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
