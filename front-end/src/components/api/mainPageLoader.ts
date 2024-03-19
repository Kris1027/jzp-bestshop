import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_MAPPING } from "../../constants/api";

type GenderTypeProps = "kobieta" | "mezczyzna" | "dziecko";

type ParamsProps = {
  gender: GenderTypeProps;
};

export function mainPageLoader({ params }: { params: ParamsProps }) {
  const backEndPath = PATH_MAPPING[params.gender];

  if (backEndPath) {
    return fetch(`${BACK_END_URL}/${backEndPath}`);
  } else {
    return redirect("/kobieta");
  }
}
