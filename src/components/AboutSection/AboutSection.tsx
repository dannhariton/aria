import { AboutCard } from "./AboutCard";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  return (
    <section className={styles.about}>
      {["About Us", "About Card"].map((title) => (
        <AboutCard key={title} title={title} />
      ))}
    </section>
  );
}
