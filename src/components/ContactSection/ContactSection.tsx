import { FaFacebook } from "react-icons/fa";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles["card-left-side"]}>
          <div>
            <h2 className={styles.title}>Contact Us</h2>
            <p className={styles.description}>
              Fill up the form and ur Team will get back to you within 24 hours. Happy to see your
              message!
            </p>
            <ul className={styles.list}>
              <li className={styles["list-item"]}>
                <FaFacebook size={24} /> +380 93 15 32 456
              </li>
              <li className={styles["list-item"]}>
                <FaFacebook size={24} /> example@gmail.com
              </li>
              <li className={styles["list-item"]}>
                <FaFacebook size={24} /> Pidmurma 5a, Lviv
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <FaFacebook size={32} />
            <FaFacebook size={32} />
            <FaFacebook size={32} />
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles["input-container"]}>
              <label className={styles.label} htmlFor="first-name-field">
                First Name
              </label>
              <input
                className={styles.input}
                type="text"
                id="first-name-field"
                name="first-name"
                required
              />
            </div>
            <div className={styles["input-container"]}>
              <label className={styles.label} htmlFor="last-name-field">
                Last Name
              </label>
              <input
                className={styles.input}
                type="text"
                id="last-name-field"
                name="last-name"
                required
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles["input-container"]}>
              <label className={styles.label} htmlFor="email-field">
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                id="email-field"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className={styles["input-container"]}>
              <label className={styles.label} htmlFor="phone-field">
                Phone Number
              </label>
              <input className={styles.input} type="tel" id="phone-field" name="phone" />
            </div>
          </div>
          <div className={styles.roles}>
            <span className={styles.role}>
              <input type="radio" name="ui-dev" id="ui-dev-option" />
              <label htmlFor="ui-dev-option">UI Developer</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="ui-ux" id="ui-ux-option" />
              <label htmlFor="ui-ux-option">UI/UX Developer</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="role" id="role-option" />
              <label htmlFor="role-option">Role</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="something" id="something-option" />
              <label htmlFor="something-option">Some Developer</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="other" id="other-option" />
              <label htmlFor="other-option">Other</label>
            </span>
          </div>
          <div className={styles.message}>
            <label htmlFor={styles["text-area"]} className={styles.label}>
              Message
            </label>
            <textarea rows={5} name="message" id={styles["text-area"]} className={styles.input}>
              Text here...
            </textarea>
          </div>
          <div className={styles.terms}>
            <span className={styles.term}>
              <input type="checkbox" name="termsOne" id="termsOne-checkbox" />
              <label htmlFor="termsOne-checkbox">Accept Terms</label>
            </span>
            <span className={styles.term}>
              <input type="checkbox" name="termsTwo" id="termsTwo-checkbox" />
              <label htmlFor="termsTwo-checkbox">Accept Terms 2</label>
            </span>
          </div>
          <span className={styles["button-container"]}>
            <button className={styles.button}>Send Message</button>
          </span>
        </form>
      </div>
    </section>
  );
}
