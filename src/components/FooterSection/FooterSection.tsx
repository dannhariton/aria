import mastercard from "@/assets/mastercard.svg";
import visa from "@/assets/visa.svg";

import styles from "./FooterSection.module.css";

export function FooterSection() {
  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.newsletter}>
          <h2 className={styles.title}>PlantMe</h2>
          <p className={styles.subtitle}>
            Subscribe and be the first to know about our news and promotions.
          </p>
          <div className={styles["input-group"]}>
            <input type="email" placeholder="example@gmail.com" className={styles.input} />
            <button className={styles["subscribe-button"]}>Subscribe</button>
          </div>
        </div>
        <ul className={styles.menu}>
          <li className={styles.link}>
            <a href="#about-us">About Us</a>
          </li>
          <li className={styles.link}>
            <a href="#contact-us">Contact Us</a>
          </li>
          <li className={styles.link}>
            <a href="#blog">Blog</a>
          </li>
          <li className={styles.link}>
            <a href="#site-map">Site Map</a>
          </li>
        </ul>
        <div className={styles.contacts}>
          <h3 className={styles["contacts-title"]}>Contact</h3>
          <ul className={styles["contacts-info"]}>
            <li className={styles.phone}>
              <a href="callto:123456789">+123-456-789</a>
            </li>
            <li className={styles.email}>
              <a href="mailto:platme.store@gmail.com">platme.store@gmail.com</a>
            </li>
          </ul>
          <div className={styles.partners}>
            <img src={visa} alt="Visa Logo" />
            <img src={mastercard} alt="Mastercard Logo" />
          </div>
        </div>
      </div>
      <div className={styles["bottom-bar"]}>
        <p className={styles.copyright}>© 2022 PlantMe. All Rights Reserved.</p>

        <ul className={styles.policies}>
          <li className={styles.policy}>
            <a href="#privacy-policy">Privacy Policy</a>
          </li>
          <li className={styles.policy}>
            <a href="#terms-of-service">Terms of Service</a>
          </li>
          <li className={styles.policy}>
            <a href="#language">Language</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
