import styles from "../styles/Formulario.module.css";
import Image from "next/dist/client/image";
import { useState } from "react";
import Swal from "sweetalert2";
import { LoadingOutlined } from "@ant-design/icons";

function Formulario() {
  /* Formulário início*/
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    if (nome.length === 0 || telefone.length === 0 || email.length === 0) {
      setTimeout(() => setLoading(false), 3000);
      Swal.fire({
        title: `preencha todos os campos`,
        html: "",
        icon: "error",
        showConfirmButton: true,
        timer: 5000,
      });
    } else if (nome.length > 0 || telefone.length > 0 || email.length > 0) {
      console.log("Enviando");
      let data = {
        nome,
        email,
        telefone,
      };

      try {
        fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          console.log("Resposta recebida");
          if (res.status === 200) {
            console.log("Sucesso na resposta!");
            setNome("");
            setEmail("");
            setTelefone("");
            Swal.fire({
              title: `Email enviado com sucesso, em breve entro em contato com você`,
              html: "",
              icon: "success",
              showConfirmButton: true,
              timer: 5000,
            });
            setLoading(false);
          }
          if (res.status === 500) {
            Swal.fire({
              title: `Email não enviado, por favor tente novamente`,
              html: "",
              icon: "error",
              showConfirmButton: true,
              timer: 5000,
            });
            setLoading(false);
          }
        });
      } catch (error) {
        Swal.fire({
          title: `Email não enviado, tente novamente`,
          html: "",
          icon: "warning",
          showConfirmButton: true,
          timer: 5000,
        });
      }
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
              maxLength={11}
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
            {loading ? (
              <button className="boxMove">
                <LoadingOutlined style={{ fontSize: "3rem" }} />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="boxMove"
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
            )}
          </form>

          <div className={styles.contatos}>
            <p>Tem alguma pergunta?</p>
            <div>
              <p>
                <a href="mailto:valdisneidev@gmail.com">
                  valdisneinilo@gmail.com
                </a>
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
