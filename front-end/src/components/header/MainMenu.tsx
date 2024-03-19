import { NavLink } from "react-router-dom";
import { GENDERS } from "../../constants/categories";

// "text-base py-4 font-bold text-textGrey"

export function MainMenu() {
  return (
    <ul className="uppercase flex gap-4 py-4">
      {GENDERS.map((gender) => {
        return (
          <li key={gender.path}>
            <NavLink
              to={gender.path}
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-textBlack font-bold pb-4"
                  : "text-textGrey font-bold"
              }
            >
              {gender.genderName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
