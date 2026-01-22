import styles from "./Menu.module.css";

export function Menu() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles["menu-list"]}>
        <li className={styles["menu-item"]}>
          <a href="#about-us">About Us</a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="#contact-us">Contact Us</a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="#blog">Blog</a>
        </li>
        <li className={styles["menu-item"]}>
          <a href="#site-map">Site Map</a>
        </li>
        <li>
          <select aria-label="Select Language" style={{ width: 100 }}>
            <option value="en">Eng</option>
            <option value="es">Spa</option>
            <option value="fr">Fre</option>
          </select>
        </li>
      </ul>
    </nav>
  );
}
