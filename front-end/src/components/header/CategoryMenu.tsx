import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export function CategoryMenu() {
  return (
    <div className="bg-bgGreen h-[50px] flex px-4">
      <ul className="flex gap-4 items-center text-white w-full max-w-[100rem] mx-auto">
        {CATEGORIES.map((category) => {
          return (
            <NavLink to={category.path}>
              <li key={category.categoryName}>{category.categoryName}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
