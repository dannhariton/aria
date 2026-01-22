import { CiSearch } from "react-icons/ci";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="search" placeholder="Search this site" className={styles.input} />
      <button type="submit" aria-label="submit search" className={styles["search-icon-button"]}>
        <CiSearch className={styles.icon} />
      </button>
    </div>
  );
}
