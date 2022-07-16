import styles from "./Menu.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ title, onBack }) {
  return (
    <header className={styles.header}>
      <button className={styles.backButton} onClick={onBack}>
        <FontAwesomeIcon className={styles.backIcon} icon={faChevronLeft} />
      </button>
      <h4 className={styles.headerTitle}>{title}</h4>
    </header>
  );
}

export default Header;
