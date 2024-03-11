import useCategories from "./useCategories";
import useProducts from "./useProducts.tsx";

import { Product } from "../interfaces/interfaces.ts";
import { useEffect, useState } from "react";

export default function useSort() {
  const { categories } = useCategories();
  const { products } = useProducts();

  const [productsSortByCategory, setProductsSortByCategory] = useState<
    (Product[] | undefined)[] | undefined
  >();

  useEffect(() => {
    const productsSort = categories?.map((category) => {
      return products?.filter((product) => {
        return product.category == category;
      });
    });

    setProductsSortByCategory(productsSort);
  }, [categories]);

  return { productsSortByCategory };
}
