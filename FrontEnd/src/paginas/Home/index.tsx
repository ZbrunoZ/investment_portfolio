import CardNovo from "./CardNovo";
import TextoInicio from "./TextoInicio";


const Home = () => {
   

    return (<section className="portfolios">
        <section>
        <div>
        <TextoInicio></TextoInicio>
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
