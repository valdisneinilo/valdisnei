import Image from "next/dist/client/image";
import styles from '../styles/Projetos.module.css'
import Blur3 from "./components/Blur3";

const Projetos = () => {
  return (
    <section className={styles.projetos} id="projetos">
      <h2 className="subtitulo">Projetos</h2>
      <div className={styles.containerProj}>
        <div className={styles.ProjetosCont}>
          <div className={styles.imgProjeto}>
            <Image
              src="/foto1.png"
              alt="Picture of the author"
              width={440}
              height={380}
            />
          </div>
          <div className={styles.textoProjeto}>
            <div>
              <h3>Shopify</h3>
              <p>HTML5 | CSS3 | .JS</p>
            </div>
            <p>Site institucional desenvolvido para a Shopify.</p>
            <a href="#" target="_blank" rel="noreferrer">
              Acessar site{" "}
              <Image
                src="/Arrow.svg"
                alt="Picture of the author"
                width={50}
                height={10}
              />
            </a>
          </div>
        </div>

        <div className={styles.ProjetosCont}>
          <div className={styles.imgProjeto}>
            <Image
              src="/foto2.png"
              alt="Picture of the author"
              width={440}
              height={380}
            />
          </div>
          <div className={styles.textoProjeto}>
            <div>
              <h3>Norogy</h3>
              <p>HTML5 | CSS3 | .JS</p>
            </div>
            <p>Site institucional desenvolvido para a Norogy.</p>
            <a href="#" target="_blank" rel="noreferrer">
              Acessar site{" "}
              <Image
                src="/Arrow.svg"
                alt="Picture of the author"
                width={50}
                height={10}
              />{" "}
            </a>
          </div>
          <Blur3/>
        </div>
      </div>
    </section>

  )
}

export default Projetos
