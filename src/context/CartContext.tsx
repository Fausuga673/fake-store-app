import { createContext, useEffect, useState } from "react";
import { Product } from "../interfaces/interfaces";
import { CartContextProps } from "../interfaces/interfaces";

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalOfNewProducts, setTotalOfNewProducts] = useState(0);

  function addToCart(product: Product) {
    const productIsNotAddedToCart =
      cart.findIndex((item) => item.id === product.id) === -1;

    if (productIsNotAddedToCart) {
      setCart((prevState) => [
        ...prevState,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    console.log(cart);
  }

  function deleteProductFromCart(product: Product) {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalOfProducts() {
    return cart.reduce((total, product) => total + (product?.quantity || 0), 0);
  }

  function getTotalPrice() {
    return cart.reduce((total, product) => total + product.price, 0);
  }

  function updateTotalOfNewProducts(quantity: number) {
    setTotalOfNewProducts(quantity);
  }

  useEffect(() => {
    getTotalPrice();
  }, [totalOfNewProducts]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalOfNewProducts,
        addToCart,
        deleteProductFromCart,
        clearCart,
        getTotalPrice,
        getTotalOfProducts,
        updateTotalOfNewProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
