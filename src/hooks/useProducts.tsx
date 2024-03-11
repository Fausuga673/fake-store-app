import { useState, useEffect } from "react";

import { Product } from "../interfaces/interfaces.ts";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>();

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return { products };
}
