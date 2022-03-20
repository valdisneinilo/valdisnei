import styles from "../styles/Formulario.module.css";
import Image from "next/dist/client/image";
import { useState } from "react";

function Formulario() {
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
  return (
    <section className={styles.formCont} id="contato">
      <div className={styles.textForm}>
        <h2 className={styles.subtitulo}>Vamos iniciar um projeto?</h2>
        <p>
          Vamos dar vida às suas ideias, basta preencher o formulário para
          conversarmos sobre o que podemos construir juntos.
        </p>
      </div>
      <div className={styles.containerformulario}>
        <div className={styles.duvida}>
          <form
            action=""
            method="POST"
            className={styles.formulario}
            autoComplete="off"
          >
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              name="name"
              autoComplete="off"
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
              autoComplete="off"
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
              autoComplete="off"
              value={email}
            />

            <select
              name="projeto"
              id="projeto"
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
              className='boxMove'
            >
              Iniciar Projeto
              <span>
                <Image
                  src="/Arrow.svg"
                  alt="Picture of the author"
                  width={30}
                  height={10}
                />
              </span>
            </button>
          </form>

          <div className={styles.contatos}>
            <p>Tem alguma pergunta?</p>
            <div>
              <p>
                <a href="mailto:valdisneidev@gmail.com">valdisneinilo@gmail.com</a>
              </p>
              <p>
                <a href="tel:063991030921">+55 (63) 99103-0921</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
