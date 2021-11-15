import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
// import initMenuMobile from '../js/menu-mobile'

// import Link from 'next/link';

export default function Home() {
  /* Formulário início*/
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [projeto, setProjeto] = useState("");
  const [error, setError] = useState("");
  const [cor, setCor] = useState(false);

  function handleSubmit(e) {
    if (
      nome.length === 0 ||
      telefone.length === 0 ||
      email.length === 0 ||
      projeto.length === 0
    ) {
      setError("Preencha todos os campos");
      setCor(true);
    } else if (
      nome.length > 0 ||
      telefone.length > 0 ||
      email.length > 0 ||
      projeto.length > 0
    ) {
      e.preventDefault();
      console.log("Enviando");
      let data = {
        nome,
        email,
        telefone,
        projeto,
      };

      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log("Resposta recebida");
          if (res.status === 200) {
            console.log("Sucesso na resposta!");
            setNome("");
            setEmail("");
            setTelefone("");
            setProjeto("");
            setCor(false);
            setError(
              "Parabens! o primeiro passo foi dado, em breve entro em contato com você"
            );
          }
        })
        .catch((error) => {
          if (res.status === 500) {
            res.status(500).send(error);
            setError("Seu email não foi enviado tente novamente");
          }
        });
    }
  }
  /* Formulário fim */

  /* faq inicio*/
  function handleRes(evt) {
    const remove = document.querySelectorAll(".ativo");
    let agora = evt.target.innerHTML;
    remove.forEach((item) => {
      item.classList.remove("ativo");
    });
    evt.target.nextElementSibling.classList.toggle("ativo");
  }
  /* faq fim*/

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

  function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    menuButton.classList.toggle("active");
    const menuList = document.querySelector('[data-menu="list"]');
    menuList.classList.toggle("menuDisplay");
  }

  return (
    <div>
      <Head>
        <meta 
          name="google-site-verification" content="modJdQ2HzlEyRr8r_h2bMUmKKXPHVL6JoK-iVOmFoR0"
         />
        <meta
          name="description"
          content="Meu nome é Valdisnei Nilo, trabalho com desenvolvimento de sites e sistemas web transformo ideias em resultados através de linhas de código."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Valdisnei Nilo || Desenvolvedor Full Stack"
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

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />

        <title>Valdisnei Nilo || Desenvolvedor Full Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.whatsapp}>
          <a
            href="https://api.whatsapp.com/send?phone=5563991030921&text=Ol%C3%A1%2C%20preciso%20de%20um%20desenvolvedor%20para%20meu%20projeto%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/Frame.svg"
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </a>
        </div>

        <header className={styles.header}>
          <button
            data-menu="button"
            className={styles.menuButton}
            onClick={initMenuMobile}
          >
            <i className="fas fa-bars"></i>
          </button>
          <ul data-menu="list" className={styles.menuList}>
            <li>
              <a href="#chamadaContato" onClick={handleClick}>
                Sobre Mim
              </a>
            </li>
            {/* <li><a href="#projetos" onClick={handleClick}>Projetos</a></li> */}
            <li>
              <a href="#tecnologias" onClick={handleClick}>
                Tecnologias
              </a>
            </li>
            <li href="#faq" onClick={handleClick}>
              FAQ
            </li>
            <li>
              <a href="#contato" onClick={handleClick}>
                Contato
              </a>
            </li>
          </ul>
        </header>

        <section className={styles.home}>
          <div className={styles.tituloContainer}>
            <div>
              <div className={styles.ellipse1 + " animaBlur"}></div>
              <div className={styles.ellipse2 + " animaBlur"}></div>
              <h2>Full Stack Developer</h2>
              <h1 className="animaNome">Valdisnei Nilo.</h1>
              <div className={styles.linha1 + " animaLeft"}></div>
              <div className={styles.linha2 + " animaLeft"}></div>
            </div>
          </div>

          <div className={styles.chamadaContato}>
            <p>
              👋 Olá, sou responsável por dar vida ao seu projeto. Quer saber
              como? Clique no botão abaixo. 🙋
            </p>
            <button>
              <a
                href="https://api.whatsapp.com/send?phone=5563991030921&text=Bom%20dia%20gostaria%20de%20falar%20sobre%20o%20desenvolvimento%20de%20um%20projeto"
                target="_blank"
                rel="noreferrer"
              >
                Fale comigo 👋🏻
              </a>
            </button>
          </div>

          <div className={styles.quemSou} id="chamadaContato">
            <div className={styles.quemSouTexto}>
              <h2 className={styles.subtitulo}>Quem sou</h2>
              <p>
                Meu nome é Valdisnei Nilo, trabalho com desenvolvimento de sites
                e sistemas web. Transformo ideias em resultados através de{" "}
                <span id="mono"> &#10094; linhas de código, &#10095;</span> sou
                apaixonado por código e café ☕. Quer saber mais sobre mim? Me
                acompanhe nas redes. 👇🏻
              </p>

              <div className={styles.redes}>
                {/* <div>
                  <a href='' target="_blank" rel="noreferrer">
                    <Image
                      src="/instagram.png"
                      alt="Picture of the author"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                 */}
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

            <div>
              <div className={styles.textoCirculo + " animaRotate"}>
                <Image
                  src="/texto-circulo.svg"
                  alt="Picture of the author"
                  width={165.4}
                  height={165.27}
                />
              </div>

              <div className={styles.nomeArte}>VN</div>
            </div>
          </div>
          <div className={styles.linha3 + " animaLeft"}></div>

          <section className={styles.projetos} id="projetos">
            <h2 className={styles.subtitulo}>Projetos</h2>
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
                <div className={styles.ellipse3 + " animaBlur"}></div>
              </div>
            </div>
          </section>

          <section className={styles.tecnologias} id="tecnologias">
            <h2 className={styles.subtitulo}>Tecnologias</h2>

            <div className={styles.tecnologiasDiv}>
              <p>
                A escolha do conjunto de tecnologias faz toda a diferença na
                hora de “botar a mão na massa”. Construir soluções
                personalizadas de acordo com a sua necessidade, utilizando o que
                há de mais sólido e moderno no mercado é a minha especialidade.
              </p>

              <ul className={styles.listaTec}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>MySQL</li>
                {/* <div class="linha4"></div> */}
              </ul>
            </div>
            <div className={styles.nomeArte2Cont}>
              <div className={styles.nomeArte2}>Full Stack Developer</div>
            </div>

            <div className={styles.linha4 + " animaLeft"}></div>
            <div className={styles.ellipse + " animaBlur"}></div>
          </section>

          <section className={styles.faq} id="faq">
            <h2 className={styles.subtitulo}>Perguntas Frequentes</h2>
            <div>
              <p>
                Se você não conseguir encontrar uma resposta para sua pergunta
                em nosso FAQ, você pode{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=5563991030921&text=Ol%C3%A1%2C%20preciso%20de%20um%20desenvolvedor%20para%20meu%20projeto%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F"
                  target="_blank"
                  rel="noreferrer"
                >
                  entrar em contato.
                </a>{" "}
                Responderei em breve!{" "}
              </p>
              <dl className={styles.faqPerguntas}>
                <div className={styles.contPerunta}>
                  <div>
                    <dt onClick={handleRes}>Por que me contratar?</dt>
                    <dd data-menu="resposta" className="ativo">
                      {" "}
                      <span className={styles.risco}>
                        {" "}
                        Por que preciso de dinheiro
                      </span>{" "}
                      kkk🤣. Desenvolvo sites e sistemas 100% profissionais e
                      personnalizados, construo todo seu projeto do absoluto
                      zero e de acordo com sua necessidade.
                    </dd>
                  </div>
                  <span className={styles.sinal}>+</span>
                </div>
                <div className={styles.linhaFaq}></div>

                <div className={styles.contPerunta}>
                  <div>
                    <dt onClick={handleRes}>Posso parcelar o pagamento?</dt>
                    <dd data-menu="resposta">
                      Sim! Você pode parcelar no cartão de crédito.
                    </dd>
                  </div>
                  <span className={styles.sinal}>+</span>
                </div>
                <div className={styles.linhaFaq}></div>

                <div className={styles.contPerunta}>
                  <div>
                    <dt onClick={handleRes}>
                      Você cria E-commerce? (Loja Virtual)
                    </dt>
                    <dd data-menu="resposta">
                      {" "}
                      Sim! desenvolvo lojas virtuais de qualidade e 100%
                      personalizadas.
                    </dd>
                  </div>
                  <span className={styles.sinal}>+</span>
                </div>
                <div className={styles.linhaFaq}></div>

                <div className={styles.contPerunta}>
                  <div>
                    <dt onClick={handleRes}>
                      Preciso de uma API para meu projeto, você desenvolve?
                    </dt>
                    <dd data-menu="resposta">
                      {" "}
                      Sim! desenvolvo Rest API em Node.js.
                    </dd>
                  </div>
                  <span className={styles.sinal}>+</span>
                </div>
                <div className={styles.linhaFaq}></div>

                <div className={styles.contPerunta}>
                  <div>
                    <dt onClick={handleRes}>Você cria landing page?</dt>
                    <dd data-menu="resposta">
                      {" "}
                      Sim! desenvolvo landing pages voltadas diretamente para
                      altas conversões.
                    </dd>
                  </div>
                  <span className={styles.sinal}>+</span>
                </div>
                <div className={styles.linhaFaq}></div>

                <div className={styles.contPerunta}>
                  <div>
                    <dt onClick={handleRes}>
                      Preciso de um site para minha empresa, você cria sites
                      institucionais?
                    </dt>
                    <dd data-menu="resposta">
                      {" "}
                      Sim! desenvolvo seu site, com a identidade visual de sua
                      empresa.
                    </dd>
                  </div>
                  <span className={styles.sinal}>+</span>
                </div>
                <div className={styles.linhaFaq}></div>

                <div className={styles.contPerunta}>
                  <div>
                    <dt onClick={handleRes}>
                      Na contratação do serviço está incluso domínio e
                      hospedagem?
                    </dt>
                    <dd data-menu="resposta">
                      Não, é necessário que o cliente já possua domínio e
                      hospedagem. Caso cliente não possua, irei auxiliá-lo.
                    </dd>
                  </div>
                  <span className={styles.sinal}>+</span>
                </div>
                <div className={styles.linhaFaq}></div>
              </dl>
            </div>
          </section>
        </section>
      </main>

      <section className={styles.formCont} id="contato">
        <div className={styles.textForm}>
          <h2 className={styles.subtitulo}>Vamos iniciar um projeto?</h2>
          <p>
            Vamos dar vida às suas ideias, basta preencher o formulário para
            conversarmos sobre o que podemos construir e elevar juntos.
          </p>
        </div>
        <div className={styles.containerformulario}>
          <div className={styles.duvida}>
            <form
              action=""
              method="POST"
              className={styles.formulario}
              autoComplete="none"
            >
              <input
                type="text"
                id="nome"
                placeholder="Nome"
                name="name"
                autoComplete="none"
                required
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />

              <input
                type="text"
                id="telefone"
                placeholder="Telefone"
                name="telefone"
                autoComplete="none"
                required
                onChange={(e) => {
                  setTelefone(e.target.value);
                }}
                value={telefone}
              />

              <input
                type="email"
                id="email"
                placeholder="seu-email@domínio.com"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                autoComplete="none"
                value={email}
              />

              <select
                name="projeto"
                id="projeto"
                type="select"
                value={projeto}
                onChange={(e) => {
                  setProjeto(e.target.value);
                }}
                required
              >
                <option value="" disabled>
                  Selecione o projeto
                </option>
                <option value="landing page">Landing page</option>
                <option value="site institucional">Site institucional</option>
                <option value="ecommerce">E-commerce</option>
                <option value="Sistema Web">Sistema Web</option>
              </select>

              {error && (
                <p style={cor ? { color: "red" } : { color: "yellowgreen" }}>
                  {error}
                </p>
              )}

              {/* span */}
              <label className={styles.nao}>
                Se vc não é um robô, deixe em brancos
              </label>
              <input type="text" className={styles.nao} name="leaveblank" />
              <label className={styles.nao}>
                Se vc não é um robô, deixe em brancos
              </label>
              <input
                type="text"
                className={styles.nao}
                id="dontchang"
                name="dontchang"
              />
              {/* span */}

              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Iniciar Projeto
              </button>
            </form>

            <div className={styles.contatos}>
              <p>Tem alguma pergunta?</p>
              <div>
                <p>
                  <a href="mailto:valdisneidev@gmail.com">contato@valdev.com</a>
                </p>
                <p>
                  <a href="tel:063991030921">+55 (63) 99103-0921</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.duvidas}></section>

      <footer className={styles.footer}>
        <p className={styles.developer}>
          Developed by <span>Valdisnei Nilo</span>
        </p>
        <p> Copyright © 2021 Todos os direitos reservados Valdisnei Nilo</p>
        <p>
          Design by <span>DECO</span>{" "}
        </p>
      </footer>
    </div>
  );
}


