import image from "@/assets/hero-image.jpg";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles["text-container"]}>
        <h1 className={styles.title}>Welcome to the Hero Section</h1>
        <h2 className={styles.subtitle}>
          This is where the main content of the hero section goes.
        </h2>
        <p className={styles.description}>
          Discover amazing features and benefits. More details coming soon! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolores officiis eos expedita libero dicta, hic ea
          vitae accusantium ut consequatur aliquam non assumenda, omnis mollitia reiciendis ex
          pariatur rem optio.
        </p>
        <button className={styles.button}>Buy Now</button>
      </div>
      <div className={styles["image-container"]}>
        <img src={image} alt="image with leaves" className={styles.image} />
      </div>
    </section>
  );
}
