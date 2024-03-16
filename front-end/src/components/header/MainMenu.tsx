import { NavLink } from "react-router-dom";
import { GENDERS, type GenderProps } from "../../constants/categories";

export function MainMenu() {
  return (
    <ul className="uppercase flex gap-4 py-4">
      {GENDERS.map((gender: GenderProps) => {
        return (
          <li key={gender.path}>
            <NavLink
              className="text-base py-4 font-bold text-textGrey"
              to={gender.path}
            >
              {gender.genderName}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
