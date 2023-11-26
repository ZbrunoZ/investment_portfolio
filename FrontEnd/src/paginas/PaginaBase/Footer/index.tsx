import "./Footer.css"

export const Rodape = () => {
  return (<footer className="rodape">
    <h2 className="rodape__titulo">ETHEREUM Asset</h2>
    <ul className="lista-rodape">
      <li className="lista-rodape__titulo">Tesouro Nacional</li>
      <li className="lista-rodape__item">
        <img src="" alt="" />
        <a href="#!" className="lista-rodape__link">Tesouro Direto</a>
      </li>
      <li className="lista-rodape__item">
        <img src="/imagens/Caelum.svg"  alt="" />
        <a href="#!" className="lista-rodape__link">Serpro</a>
      </li>
      <li className="lista-rodape__titulo">Rede Ethereum</li>
      <li className="lista-rodape__item">
        <img src="/imagens/HipstersTech.svg" alt="" />
        <a href="#!" className="lista-rodape__link">Blockchain</a>
      </li>
      <li className="lista-rodape__item">
        <img src="/imagens/ScubaDev.svg" alt="" />
        <a href="#!" className="lista-rodape__link">Contratos Inteligentes</a>
      </li>
      <li className="lista-rodape__item">
        <img src="" alt="" />
        <a href="#!" className="lista-rodape__link">Ativos Tokenizados</a>
      </li>
      <li className="lista-rodape__item">
        <img src="/imagens/LikeABoss.svg" alt="" />
        <a href="#!" className="lista-rodape__link">Portfólios Inteligentes</a>
      </li>
    </ul>

    <ul className="lista-rodape">
      <li className="lista-rodape__titulo">Redes Sociais</li>
      <li className="lista-rodape__item">
        <img src="/imagens/instagram.svg" alt="" />
        <a href="#!" className="lista-rodape__link">Ethereum Asset - Instagram</a>
      </li>
      <li className="lista-rodape__item">
        <img src="/imagens/facebook.svg" alt=""/>
        <a href="#!" className="lista-rodape__link">Ethereum Asset - Facebook</a>
      </li>
      <li className="lista-rodape__item">
        <img src="/imagens/linkedin.svg" alt="" />
        <a href="#!" className="lista-rodape__link">Ethereum Asset - Linkedn</a>
      </li>
      <li className="lista-rodape__item">
        <img src="/imagens/twitter.svg" alt="" />
        <a href="#!" className="lista-rodape__link">Ethereum Asset - Twitter</a>
      </li>
      <li className="lista-rodape__item">
        <img src="/imagens/whatsapp.svg" alt="" />
        <a href="#!" className="lista-rodape__link">Ethereum Asset - Fale Conosco - Atendimento WhatsApp</a>
      </li>
    </ul>
  </footer>
  );
};

export default Rodape