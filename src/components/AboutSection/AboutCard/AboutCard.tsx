import image from "@/assets/about.png";
import { BiRightArrow } from "react-icons/bi";
import styles from "./AboutCard.module.css";

export function AboutCard({ title }: { title: string }) {
  return (
    <div className={styles.card}>
      <div className={styles["image-container"]}>
        <img src={image} alt="a picture with leaves" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>
          This is a description of the AboutCard component. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Necessitatibus perspiciatis
          laboriosam harum cupiditate in, velit incidunt pariatur dolores
          aliquid labore natus expedita enim similique facilis magnam maxime ea!
          Alias, officia.
        </p>
        <a href="#" className={styles.link}>
          Learn more about <BiRightArrow />
        </a>
      </div>
    </div>
  );
}
