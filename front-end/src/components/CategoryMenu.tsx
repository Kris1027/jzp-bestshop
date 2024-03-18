import { CATEGORIES } from "../constants/categories";
import ARROW_ICON from "../assets/arrow.svg";
import { NavLink } from "react-router-dom";

export function CategoryMenu() {
  return (
    <div className="flex flex-col pt-4 w-[300px]">
      <h2 className="font-bold">Kobieta</h2>
      <ul className="pt-4 px-4">
        {CATEGORIES.map((category) => {
          return (
            <li key={category.categoryName}>
              <NavLink
                className="flex justify-between"
                to={category.categoryName}
              >
                {category.categoryName}
                <img className="-rotate-90" src={ARROW_ICON} />
              </NavLink>
              <ul className="ml-4">
                {category.subcategories.map((subcategory) => {
                  return (
                    <li key={subcategory.categoryName}>
                      <NavLink to={subcategory.path}>
                        {subcategory.categoryName}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
