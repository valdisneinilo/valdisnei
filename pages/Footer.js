import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.developer}>
        Developed by <span>Valdisnei Nilo</span>
      </p>
      <p> © {new Date().getFullYear()} Valdisnei Nilo</p>
      <p>
        Design by <span>DECO</span>{" "}
      </p>
    </footer>
  );
}

export default Footer;
