import styles from '../styles/QuemSou.module.css';
import Image from 'next/dist/client/image';
import Linha3 from './components/Linha3';

const QuemSou = () => {
  return (
    <>
    <div className={styles.quemSou} id="chamadaContato">
      <div className={styles.quemSouTexto}>
        <h2 className="subtitulo">Quem sou</h2>
        <p>
          Meu nome é Valdisnei Nilo, trabalho com desenvolvimento de sites
          e sistemas web. Transformo ideias em resultados através de{" "}
          <span id="mono"> &#10094; linhas de código, &#10095;</span> sou
          apaixonado por código e café ☕. Quer saber mais sobre mim? Me
          acompanhe nas redes. 👇🏻
        </p>

        <div className={styles.redes}>
          <div>
            <a
              href="https://www.linkedin.com/in/valdisnei-nilo-656b67202/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="Picture of the author"
                width={19}
                height={14}
              />
            </a>
          </div>

          <div>
            <a
              href="https://github.com/valdisneinilo"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/github.png"
                alt="Picture of the author"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.art}>
        <div className={styles.textoCirculo + " animaRotate"}>
          <Image
            src="/texto-circulo.svg"
            alt="Picture of the author"
            width={165.4}
            height={165.27}
          />
        </div>

        <div className={styles.nomeArte}>
          <Image
          src='/VN.png'
          alt='Valdisnei nilo logo'
          width={547}
          height={203}
          />
        </div>
      </div>
    </div>
    <Linha3/>
    </>
  )
}

export default QuemSou
