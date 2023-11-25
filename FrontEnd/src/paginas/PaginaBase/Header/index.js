import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"
import Icones from "../Icones"
import styled from "styled-components"


const HeadContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
` 
function Header() {
    return (
        <HeadContainer>
            <Logo></Logo>
            <OpcoesHeader></OpcoesHeader>
            <Icones></Icones>
        </HeadContainer>
     )
}

export default Header