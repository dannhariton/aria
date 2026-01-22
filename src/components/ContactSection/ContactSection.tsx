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
                <FaFacebook size={24} /> <a href="callto:123456789">+123-456-789</a>
              </li>
              <li className={styles["list-item"]}>
                <FaFacebook size={24} />
                <a href="mailto:platme.store@gmail.com">platme.store@gmail.com</a>
              </li>
              <li className={styles["list-item"]}>
                <FaFacebook size={24} />
                <a href="https://www.google.com/maps/place/Lviv,+Lviv+Oblast,+Ukraine,+79000/@49.8327706,23.9298355,12z/data=!4m15!1m8!3m7!1s0x473add7c09109a57:0x4223c517012378e2!2sLviv,+Lviv+Oblast,+Ukraine,+79000!3b1!8m2!3d49.839683!4d24.029717!16zL20vMGQ3X24!3m5!1s0x473add7c09109a57:0x4223c517012378e2!8m2!3d49.839683!4d24.029717!16zL20vMGQ3X24?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D">
                  Lviv
                </a>
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
              <input type="radio" name="role" id="ui-dev-option" />
              <label htmlFor="ui-dev-option">UI Developer</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="role" id="ui-ux-option" />
              <label htmlFor="ui-ux-option">UI/UX Developer</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="role" id="role-option" />
              <label htmlFor="role-option">Role</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="role" id="something-option" />
              <label htmlFor="something-option">Some Developer</label>
            </span>
            <span className={styles.role}>
              <input type="radio" name="role" id="other-option" />
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
