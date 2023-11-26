import styled from "styled-components"


const BannerContainer = styled.section`
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

const TituloCorpo = styled.h4`
    font-size: 32px;
    text-align: center;
    color: #EB9B00;
    margin: 16px 0;
`
const CorpoContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
    `

function Banner(props: { Titulo: string  ; Subtitulo: string ; TituloCorpo: string }){

    return (

        <><BannerContainer>
            <Titulo>{props.Titulo}</Titulo>
            <Subtitulo>{props.Subtitulo}</Subtitulo>
        </BannerContainer><CorpoContainer>
                <TituloCorpo>{props.TituloCorpo}</TituloCorpo>
            </CorpoContainer></>
    )

}

export default Banner