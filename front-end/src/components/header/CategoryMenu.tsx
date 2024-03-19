import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export function CategoryMenu() {
  const params = useParams();

  return (
    <div className="bg-bgGreen h-[50px] flex px-4">
      <ul className="flex gap-4 items-center text-white w-full max-w-[100rem] mx-auto">
        {CATEGORIES.map((category) => {
          return (
            <NavLink
              key={category.path}
              to={`${params.gender}/${category.path}`}
              className={({ isActive }) =>
                isActive ? "border-b-2" : "border-b-2 border-transparent"
              }
            >
              <li>{category.categoryName}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
