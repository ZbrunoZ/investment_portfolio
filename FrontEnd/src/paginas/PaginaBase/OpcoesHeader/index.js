import styled from "styled-components"
const textoOpcoes = ["QUEM SOMOS", "CONTATO", "NOTÍCIAS"]

const OpcoesContainer = styled.ul`
    display: flex;
`
const OpcoesLista = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    `

function opcoesHeader() {
   return (
    <OpcoesContainer>
        {textoOpcoes.map((texto) => (
        <OpcoesLista><p>{texto}</p></OpcoesLista>
        ) ) }
    </OpcoesContainer>
   )
}

export default opcoesHeader;