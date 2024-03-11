import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { MenuProps } from "../../../interfaces/interfaces";

export default function Menu({ burgerMenuContent, user }: MenuProps) {
  function Logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <article className="menu">
      <div className="dropdown">
        <button>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
        </button>
        <p>{user}</p>
        <p>
          <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </p>
      </div>
      <ul ref={burgerMenuContent} className="dropdownContent">
        <li className="dropdownContent__profile">
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <p>{user}</p>
        </li>
        <li onClick={Logout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </li>
      </ul>
    </article>
  );
}
