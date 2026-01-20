import logo from "@/assets/Logo.svg";
import { Menu } from "./components/Menu";
import { SearchBar } from "./components/SearchBar";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["left-side"]}>
        <img src={logo} alt="Logo" />
        <Menu />
      </div>
      <SearchBar />
    </header>
  );
}
