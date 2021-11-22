import styles from '../styles/Faq.module.css';

const Faq = () => {
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
  
  return (
    <section className={styles.faq} id="faq">
      <h2 className="subtitulo">Perguntas Frequentes</h2>
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
            <dt onClick={handleRes}>Por que me contratar?</dt>
            <dd data-menu="resposta" className="ativo">
              <span className={styles.risco}>
                Por que preciso de dinheiro
              </span>
              kkk🤣. Desenvolvo sites e sistemas 100% profissionais e
              personnalizados, construo todo seu projeto do absoluto zero
              e de acordo com sua necessidade.
            </dd>
          </div>
          <div className={styles.linhaFaq}></div>

          <div className={styles.contPerunta}>
            <dt onClick={handleRes}>Posso parcelar o pagamento?</dt>
            <dd data-menu="resposta">
              Sim! Você pode parcelar no cartão de crédito.
            </dd>
          </div>
          <div className={styles.linhaFaq}></div>

          <div className={styles.contPerunta}>
            <dt onClick={handleRes}>
              Você cria E-commerce? (Loja Virtual)
            </dt>
            <dd data-menu="resposta">
              {" "}
              Sim! desenvolvo lojas virtuais de qualidade e 100%
              personalizadas.
            </dd>
          </div>
          <div className={styles.linhaFaq}></div>

          <div className={styles.contPerunta}>
            <dt onClick={handleRes}>Você cria landing page?</dt>
            <dd data-menu="resposta">
              {" "}
              Sim! desenvolvo landing pages voltadas diretamente para
              altas conversões.
            </dd>
          </div>
          <div className={styles.linhaFaq}></div>

          <div className={styles.contPerunta}>
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
          <div className={styles.linhaFaq}></div>

          <div className={styles.contPerunta}>
            <dt onClick={handleRes}>
              Na contratação do serviço está incluso domínio e hospedagem?
            </dt>
            <dd data-menu="resposta">
              Não, é necessário que o cliente já possua domínio e
              hospedagem. Caso cliente não possua, irei auxiliá-lo.
            </dd>
          </div>
          <div className={styles.linhaFaq}></div>
        </dl>
      </div>
    </section>
  )
}

export default Faq
