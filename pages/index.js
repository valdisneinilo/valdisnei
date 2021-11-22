import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import QuemSou from "./QuemSou";
// import Projetos from "./Projetos";
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
    <div className="corpoSite">
      <Head>
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
          content="Valdisnei Nilo || Desenvolvedor Full Stack"
          key="title"
        />
        <meta
          property="og:description"
          content="Meu nome é Valdisnei Nilo, trabalho com desenvolvimento de sites e sistemas web transformo ideias em resultados através de linhas de código. "
        />
        <meta property="og:url" content="https://valdev.com.br" />
        <meta
          property="og:image"
          content="https://valdev.com.br/public/og-image.png"
        />

        <title>Valdisnei Nilo || Desenvolvedor Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header/>
        <Whatsapp/>
        <section className={styles.home }>
          <div className={styles.tituloContainer}>
            <div>
              <Blur1/>
              <Blur2/>
              <h2>Full Stack Developer</h2>
              <h1 className="animaNome">Valdisnei Nilo.</h1>
              <Linha1/>
              <Linha2/>
            </div>
          </div>

          <div className={styles.chamadaContato}>
            <p>
              👋 Olá, sou responsável por dar vida ao seu projeto. Quer saber
              como? Clique no botão abaixo. 🙋
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5563991030921&text=Ol%C3%A1%2C%20preciso%20de%20um%20desenvolvedor%20para%20meu%20projeto%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                Fale comigo 👋🏻
                <span>
                  <Image
                    src="/Arrow.svg"
                    alt="Picture of the author"
                    width={30}
                    height={10}
                  />
                </span>
              </button>
            </a>
          </div>

          <QuemSou/>
          {/* <Projetos/> */}
          <Tecnologias/>
          <Faq/>

        </section>
      </main>
      <section className="segundaSection">
        <Formulario/>
        <Footer/>
      </section>
    </div>
  );
}
