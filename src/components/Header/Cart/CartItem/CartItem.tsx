import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { CartItemProps } from "../../../../interfaces/interfaces";
import { useCart } from "../../../../hooks/useCart";

export function CartItem({ product }: CartItemProps) {
  const [quantity, setQuantity] = useState(1);
  const [initialPrice] = useState(product.price);
  const { updateTotalOfNewProducts, deleteProductFromCart } = useCart();

  function handleDeleteProduct() {
    deleteProductFromCart(product);
  }

  function incrementQuantity() {
    setQuantity(quantity + 1);
    if (product.quantity) {
      product.quantity += 1;
      updateTotalOfNewProducts(product.quantity + 1);
    }
    product.price += initialPrice;
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      if (product.quantity) {
        product.quantity -= 1;
        updateTotalOfNewProducts(product.quantity - 1);
      }
      product.price -= initialPrice;
    }
  }

  return (
    <li className="cartItem">
      <div className="cartItem__img">
        <img src={product.image} alt={`image from ${product.title}`} />
      </div>
      <ul className="cartItem__info">
        <li className="cartItem__info--title">
          {product.title.length > 25
            ? product.title.substring(0, 25) + "..."
            : product.title}
        </li>
        <li className="cartItem__info--price">${product.price.toFixed(2)}</li>
        <li className="cartItem__info--free">
          {product.price > 50 ? "Envío gratis" : ""}
        </li>
        <li className="cartItem__info--buttons">
          <button className="btn" onClick={decrementQuantity}>
            -
          </button>
          <div>{quantity}</div>
          <button className="btn" onClick={incrementQuantity}>
            +
          </button>
          <button className="delete" onClick={handleDeleteProduct}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      </ul>
    </li>
  );
}
