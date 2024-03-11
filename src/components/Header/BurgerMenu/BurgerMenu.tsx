import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { BurgerMenuProps } from "../../../interfaces/interfaces.ts";

export default function BurgerMenu({ burgerMenuContent }:BurgerMenuProps) {
  const burgerMenuClose = useRef<HTMLButtonElement>(null);
  const burgerMenuOpen = useRef<HTMLButtonElement>(null);

  function openMenuBurger() {
    burgerMenuOpen.current!.style.display = "none";
    burgerMenuClose.current!.style.display = "block";
    burgerMenuContent!.style.display = "block";
  }

  function closeMenuBurger() {
    burgerMenuOpen.current!.style.display = "block";
    burgerMenuClose.current!.style.display = "none";
    burgerMenuContent!.style.display = "none";
  }

  return (
    <article className="burgerMenu">
      <button
        onClick={openMenuBurger}
        ref={burgerMenuOpen}
        className="burgerMenu__open"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button
        onClick={closeMenuBurger}
        ref={burgerMenuClose}
        className="burgerMenu__close"
      >
        <FontAwesomeIcon icon={faX} />
      </button>
    </article>
  );
}
