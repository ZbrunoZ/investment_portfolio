import CardNovo from "./CardNovo";
import Banner from "../PaginaBase/Banner";

const Home = () => {
   

    return (<section className="portfolios">
        <section>
        <div>
        <Banner Titulo="Já sabe por onde começar a investir?" Subtitulo="Encontre o produto que você precisa" TituloCorpo='PORTFÓLIOS CARTEIRA ANBIMA'/>
        </div>
        <CardNovo></CardNovo>
        <script src="https://cdn.jsdelivr.net/npm/semantic-ui-react/dist/umd/semantic-ui-react.min.js"></script>
        <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
  />
    </section>
    </section>)
}
export default Home
