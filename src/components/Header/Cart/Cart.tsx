import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCart } from "../../../hooks/useCart.tsx";
import { CartItem } from "./CartItem/CartItem.tsx";
import "./cart.css";

function NoProductsInCart() {
  return (
    <li className="cart__list--message">
      No hay productos añadidos al carrito.
    </li>
  );
}

function ListOfProductsInCart() {
  const { cart } = useCart();

  return (
    <>
      {cart.map((product) => (
        <CartItem key={product.id} product={product}></CartItem>
      ))}
    </>
  );
}

export function Cart() {
  const [cartVisible, setCartVisible] = useState(false);
  const { cart, getTotalOfProducts, getTotalPrice, clearCart } = useCart();
  const cartHasProducts = cart.length > 0;

  function handleClear() {
    clearCart();
  }

  function openAndCloseCart() {
    setCartVisible((prev) => !prev);
  }

  return (
    <article className="cart">
      <button onClick={openAndCloseCart}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <ul
        className={`cart__list ${
          cartVisible ? "cart__list visible" : "cart__list hidden"
        }`}
      >
        <li className="cart__list--top">
          <p>Número de productos ({getTotalOfProducts()})</p>
          <button onClick={handleClear}>Limpiar carrito</button>
        </li>
        {cartHasProducts ? <ListOfProductsInCart /> : <NoProductsInCart />}
        <li className="cart__list--bottom">
          <p className="cart__list--total">
            Total: <span> ${getTotalPrice().toFixed(2)}</span>
          </p>
          <button>Comprar</button>
        </li>
      </ul>
    </article>
  );
}
