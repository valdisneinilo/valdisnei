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
        <nav data-menu="button" className={styles.menuButton}></nav>
      </div>
      <ul data-menu="list" className={styles.menuList}>
        <li>
          <a href="#chamadaContato" onClick={handleClick} className='neonHeader'>
            Sobre Mim
          </a>
        </li>

        <li>
          <a href="#tecnologias" onClick={handleClick} className='neonHeader'>
            Tecnologias
          </a>
        </li>
        <li>
          <a href="#faq" onClick={handleClick} className='neonHeader'>
            FAQ
          </a>
        </li>
        <li>
          <a href="#contato" onClick={handleClick} className='neonHeader'>
            Contato
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
