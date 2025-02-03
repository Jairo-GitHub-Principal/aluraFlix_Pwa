import styled from "styled-components";
import Image from "../ReusableComponent/ImageComponent/img.jsx"
import imgLogo from "../../assets/img/logo/logoAluraFlix.png"


const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 125px;
    background: rgba(0, 0, 0,9);;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding:  0;
    border-top: 7px solid rgba(34, 113, 209, 0.2);
`
const Footer = () => {
    return (
        <FooterStyled>
            <Image maxWidth="168px"  height="40px" src={imgLogo} alt="Logo AluraFlix" />
        </FooterStyled>
    )
}

export default Footer