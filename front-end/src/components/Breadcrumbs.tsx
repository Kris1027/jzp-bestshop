import { NavLink } from "react-router-dom";
import ARROW_ICON from "../assets/arrow.svg";

export function Breadcrumbs() {
  const breadcrumbs = [
    {
      categoryName: "Mężczyzna",
      path: "/man",
    },
    {
      categoryName: "Obuwie",
      path: "/man/obuwie",
    },
    {
      categoryName: "Koszulki",
      path: "/man/obuwie/koszulki",
    },
  ];

  return (
    <ul className="flex pt-4">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <li key={index}>
            <NavLink
              className="flex items-center gap-2"
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
