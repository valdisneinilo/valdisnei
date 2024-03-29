import styles from "../styles/Tecnologias.module.css";
import Linha4 from "./components/Linha4";

const Tecnologias = () => {
  return (
    <section className={styles.tecnologias} id="tecnologias">
      <h2 className="subtitulo">Tecnologias</h2>

      <div className={styles.tecnologiasDiv}>
        <p>
          A escolha do conjunto de tecnologias faz toda a diferença na hora de
          “botar a mão na massa”. Construir soluções personalizadas de acordo
          com a sua necessidade, utilizando o que há de mais sólido e moderno no
          mercado é a minha especialidade.
        </p>

        <ul className={styles.listaTec}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>

          <li>TypeScript</li>
          <li>React Js</li>
          <li>Next Js</li>

          <li>Node Js</li>
          <li>SQL</li>
          <li>NoSQL</li>

          <li>Git</li>
          <li>Docker</li>
          <li>Linux</li>
        </ul>
      </div>
      <div className={styles.nomeArte2Cont}>
        <div className={styles.nomeArte2}>Full Stack Developer</div>
      </div>

      <Linha4 />
    </section>
  );
};

export default Tecnologias;
