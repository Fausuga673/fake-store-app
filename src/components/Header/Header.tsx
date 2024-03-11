import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useRef } from "react";

import { Cart } from "./Cart/Cart";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Menu from "./Menu/Menu";
import "./header.css";

function LoginLink() {
  return <Link to="/login" className="LoginLink">Login</Link>;
}

export default function Header() {
  const burgerMenuContent = useRef<HTMLUListElement>(null);
  const user = localStorage.getItem("user");

  return (
    <header>
      <section>
        <article>
          <div className="header__logo">mercadoNo libre</div>
          <form className="header__form">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Buscar productos"
              autoComplete="off" 
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
          <nav>
            {user ? (
              <>
                <Menu burgerMenuContent={burgerMenuContent} user={user}/>
                <BurgerMenu burgerMenuContent={burgerMenuContent.current} />
                <Cart />
              </>
            ) : (
              <LoginLink/>
            )}
          </nav>
        </article>
      </section>
    </header>
  );
}
