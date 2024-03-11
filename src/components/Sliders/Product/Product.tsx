import { ProductProps } from "../../../interfaces/interfaces.ts";
import "../../../css/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../hooks/useCart.tsx";

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article key={product.id} className="content__sliders--slider-product">
      <div className="content__sliders--slider-product-image">
        <img src={product.image} alt={`image from ${product.title}`} />
      </div>
      <ul className="content__sliders--slider-product-info">
        <li className="title">
          {product.title.length > 25
            ? product.title.substring(0, 25) + "..."
            : product.title}
        </li>
        <li className="price">${product.price}</li>
        <li className="free">{product.price > 50 ? "Envío gratis" : ""}</li>
        <li className="add">
          <button onClick={handleAddToCart}>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </button>
        </li>
      </ul>
    </article>
  );
}
