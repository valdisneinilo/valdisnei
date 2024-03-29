import styles from "../styles/QuemSou.module.css";
import Image from "next/dist/client/image";
import Linha3 from "./components/Linha3";
import Link from "next/dist/client/link";
import React from "react";
import { LinkedinOutlined, GithubOutlined } from "@ant-design/icons";

const QuemSou = () => {
  return (
    <>
      <div className={styles.quemSou} id="chamadaContato">
        <div className={styles.quemSouTexto}>
          <h2 className="subtitulo">Quem sou</h2>
          <p>
            Meu nome é Valdisnei Nilo e sou desenvolvedor fullstack. Transformo
            ideias em resultados através de{" "}
            <span id="mono"> &#10094; linhas de código &#10095;</span>, sou
            apaixonado por programação e café ☕. Quer saber mais sobre mim? Me
            acompanhe nas redes. 👇🏻
          </p>

          <div className={styles.redes}>
            <div>
              <Link
                href="https://www.linkedin.com/in/valdisnei-nilo-656b67202/"
                rel="noreferrer"
              >
                <a target="_blank" rel="noreferrer">
                  <LinkedinOutlined />
                </a>
              </Link>
            </div>

            <div>
              <Link href="https://github.com/valdisneinilo" rel="noreferrer">
                <a target="_blank" rel="noreferrer">
                  <GithubOutlined />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.art}>
          <div className={styles.textoCirculo + " spinner"}>
            <Image
              src="/texto-circulo.svg"
              alt="Valdisnei Nilo arte"
              width={165.4}
              height={165.27}
              priority
            />
          </div>

          <div className={styles.nomeArte}>
            {/* <Image
              src="/VN.svg"
              alt="Valdisnei nilo logo"
              width={547}
              height={203}
              priority
            /> */}
            VN
          </div>
        </div>
      </div>
      <Linha3 />
    </>
  );
};

export default QuemSou;
