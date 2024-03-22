import { BACK_END_URL } from "../../constants/api";

export function productLoader({
  params: { productId },
}: {
  params: { productId: string };
}) {
  return fetch(`${BACK_END_URL}/products/${productId}`);
}
