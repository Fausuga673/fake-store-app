import { Product } from "../interfaces/interfaces.ts";
import { useEffect, useState } from "react";
import useSort from "./useSort";

export default function useSliders() {
  const { productsSortByCategory } = useSort();
  const [slidersForEachCategory, setSlidersForEachCategory] =
    useState<Product[][][]>();

  useEffect(() => {
    let slidersForEachCategory: Product[][][] = [];
    let productsForEachSlider = 4;

    productsSortByCategory?.map((products) => {
      let slider = [];
      while (products && products?.length > 0) {
        slider.push(products.splice(0, productsForEachSlider));
      }

      slidersForEachCategory.push(slider);
    });

    setSlidersForEachCategory(slidersForEachCategory);
  }, [productsSortByCategory]);

  return { slidersForEachCategory };
}
