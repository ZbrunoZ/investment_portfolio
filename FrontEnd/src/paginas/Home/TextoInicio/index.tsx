import styled from "styled-components"
import TituloEstilo from "../../PaginaBase/TituloEstilo"

const CorpoContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    `


const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h1`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;

`
const Subtitulo = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;

`

function Pesquisa(){

    return (

        <><PesquisaContainer>
            <Titulo>Já sabe por onde começar a investir?</Titulo>
            <Subtitulo>Encontre o produto que você precisa</Subtitulo>
        </PesquisaContainer>
        <CorpoContainer>
            <TituloEstilo texto="PORTFÓLIOS CARTEIRAS ANBIMA" />
        </CorpoContainer></>

    )

}

export default Pesquisa