import styles from "../styles/Header.module.css";

const Header = () => {
  function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    menuButton.classList.toggle("active");
    const menuList = document.querySelector('[data-menu="list"]');
    menuList.classList.toggle("menuDisplay");
  }

  /*scroll inicio*/

  function handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  /*scroll fim*/

  return (
    <header className={styles.header}>
      <div onClick={initMenuMobile}>
        <div data-menu="button" className={styles.menuButton}></div>
      </div>
      <ul data-menu="list" className={styles.menuList}>
        <li>
          <a href="#chamadaContato" onClick={handleClick}>
            Sobre Mim
          </a>
        </li>

        <li>
          <a href="#tecnologias" onClick={handleClick}>
            Tecnologias
          </a>
        </li>
        <li>
          <a href="#faq" onClick={handleClick}>
            FAQ
          </a>
        </li>
        <li>
          <a href="#contato" onClick={handleClick}>
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
