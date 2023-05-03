import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://www.instagram.com/caio.m.vargas/" target="_blank">
              <img src="/imagens/instagram.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/imagens/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por Caio Vargas.</p>
      </section>
    </footer>
  );
};

export default Rodape;
