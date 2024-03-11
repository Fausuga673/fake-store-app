import { useEffect, useState } from "react";

export default function useCategories() {
  const [categories, setCategories] = useState<string[]>();

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
