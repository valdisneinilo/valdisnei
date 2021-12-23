import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "./Header";

import QuemSou from "./QuemSou";
import Faq from "./Faq";
import Tecnologias from "./Tecnologias";
import Formulario from "./Formulario";
import Footer from "./Footer";

import Blur1 from "./components/Blur1";
import Blur2 from "./components/Blur2";
import Whatsapp from "./components/Whatsapp";
import Linha1 from "./components/Linha1";
import Linha2 from "./components/Linha2";

export default function Home() {
  return (
    <div
      lang="pt-br"
      className="corpoSite"
      style={{ background: "rgb(12, 12, 12)" }}
    >
      <Head>
        <link
          rel="preload"
          href="/_next/static/media/Monument%20Extended%20Regular%20400.41c61de7.otf"
          as="font"
          type="font/otf"
        />
        <link
          rel="preload"
          href="/_next/static/media/Monument%20Extended%20Ultrabold%20800.b33587e5.otf"
          as="font"
          type="font/otf"
        />
        {/* <link rel="preload" href="/_next/static/chunks/main.js?ts=1637698103808" as="script" /> */}
        <link rel="preload" href="Vector.png" as="image" />
        <link rel="preload" href="VN.svg" as="image" />
        <link rel="preload" href="Arrow.svg" as="image" />
        <link rel="preload" href="favicon.ico" as="image" />
        <link rel="preload" href="github.png" as="image" />
        <link rel="preload" href="instagram.png" as="image" />
        <link rel="preload" href="linkedin.png" as="image" />
        <link rel="preload" href="menu.svg" as="image" />
        <link rel="preload" href="texto-circulo.svg" as="image" />

        <link rel="preconnect" href="https://valdisnei.vercel.app/" />

        <meta charset="utf-8" />
        <meta
          name="google-site-verification"
          content="modJdQ2HzlEyRr8r_h2bMUmKKXPHVL6JoK-iVOmFoR0"
        />
        <meta
          name="description"
          content="Meu nome é Valdisnei Nilo, trabalho com desenvolvimento de sites e sistemas web transformo ideias em resultados através de linhas de código."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Valdisnei Nilo || Desenvolvedor Web"
          key="title"
        />
        <meta
          property="og:description"
          content="Meu nome é Valdisnei Nilo, trabalho com desenvolvimento de sites e sistemas web transformo ideias em resultados através de linhas de código."
        />
        <meta property="og:url" content="https://valdisnei.vercel.app/" />

        <title>Valdisnei Nilo || Desenvolvedor Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header />
        <Whatsapp />
        <section className={styles.home}>
          <div className={styles.tituloContainer}>
            <div>
              <Blur1 />
              <Blur2 />
              <h2>Desenvolvedor Web</h2>
              <h1>Valdisnei Nilo.</h1>
              <Linha1 />
              <Linha2 />
            </div>
          </div>

          <div className={styles.chamadaContato}>
            <p>
              👋 Olá, sou responsável por dar vida ao seu projeto. Quer saber
              como? Clique no botão abaixo. 🙋
            </p>
            <Link
              href="https://api.whatsapp.com/send?phone=5563991030921&text=Ol%C3%A1%2C%20preciso%20de%20um%20desenvolvedor%20para%20meu%20projeto%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F"
              rel="noreferrer"
            >
              <a target="_blank" rel="noreferrer">
                <button>
                  Fale comigo 👋🏻
                  <span>
                    <Image
                      src="/Arrow.svg"
                      alt="->"
                      width={30}
                      height={10}
                      priority
                    />
                  </span>
                </button>
              </a>
            </Link>
          </div>

          <QuemSou />
          <Tecnologias />
          <Faq />
        </section>
      </main>
      <section className="segundaSection">
        <Formulario />
        <Footer />
      </section>
    </div>
  );
}
