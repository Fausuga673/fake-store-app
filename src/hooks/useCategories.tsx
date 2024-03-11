import { useEffect, useState } from "react";
import resultsCategories from "../mocks/resultsCategories.json";

export default function useCategories() {
  const [categories, setCategories] = useState<string[]>(resultsCategories);

  async function getCategories() {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    setCategories(data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  return { categories };
}
