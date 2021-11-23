import styles from "../styles/QuemSou.module.css";
import Image from "next/dist/client/image";
import Linha3 from "./components/Linha3";
import Link from "next/dist/client/link";

const QuemSou = () => {
  return (
    <>
      <div className={styles.quemSou} id="chamadaContato">
        <div className={styles.quemSouTexto}>
          <h2 className="subtitulo">Quem sou</h2>
          <p>
            Meu nome é Valdisnei Nilo, trabalho com desenvolvimento de sites e
            sistemas web. Transformo ideias em resultados através de{" "}
            <span id="mono"> &#10094; linhas de código, &#10095;</span> sou
            apaixonado por código e café ☕. Quer saber mais sobre mim? Me
            acompanhe nas redes. 👇🏻
          </p>

          <div className={styles.redes}>
            <div>
              <Link
                href="https://www.linkedin.com/in/valdisnei-nilo-656b67202/"
                rel="preconnect"
              >
                <a target="_blank">
                  <Image
                    src="/linkedin.png"
                    alt="Valdisnei Nilo Linkedin"
                    width={19}
                    height={14}
                  />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://github.com/valdisneinilo" rel="preconnect">
                <a target="_blank">
                  <Image
                    src="/github.png"
                    alt="Valdisnei Nilo Github"
                    width={20}
                    height={20}
                    priority
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.art}>
          <div className={styles.textoCirculo + " animaRotate"}>
            <Image
              src="/texto-circulo.svg"
              alt="Valdisnei Nilo arte"
              width={165.4}
              height={165.27}
              priority
            />
          </div>

          <div className={styles.nomeArte}>
            <Image
              src="/VN.png"
              alt="Valdisnei nilo logo"
              width={547}
              height={203}
              priority
            />
          </div>
        </div>
      </div>
      <Linha3 />
    </>
  );
};

export default QuemSou;
