import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.developer}>
        Developed by <span>Valdisnei Nilo</span>
      </p>
      <p> Copyright © 2021 Todos os direitos reservados Valdisnei Nilo</p>
      <p>
        Design by <span>DECO</span>{" "}
      </p>
    </footer>
  );
}

export default Footer;
