import styled from "styled-components";

const ButtonStyled = styled.button`
position: relative;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self:${({$alignSelf}) => $alignSelf||"start" };
    font-weight: ${({ $weight }) => $weight || "normal"};
    font-size: ${({ $size }) => $size || "2rem"};
    width: ${({ $width }) => $width || "100px"};
    height: ${({ $height }) => $height || "40px"};
    font-weight:${({ $weight }) => $weight || "normal"};
    border: ${({ $border }) => $border ? `solid 1px  ${$border}` : "none"};
    border-radius:${({ $borderRadius }) => $borderRadius || "15px"};
    box-shadow: ${({ $border }) => $border ? `0px 0px 10px 1px ${$border}` : "none"};
    margin-top: ${({ $marginTop }) => $marginTop || "0"};
    margin-bottom: ${({ $marginBottom }) => $marginBottom || "0"};
    margin: ${({ $margin }) => $margin || "0"};
    padding:${({ $padding }) => $padding || "0"};
    cursor: pointer;

    /** condição para a cor do botão e a cor do texto */
    background-color: ${({ $categoria }) => {
        switch ($categoria) {
            case "Front End":
                return "rgba(107, 209, 255, 1)"; 
            case "Back End":
                return "rgba(0, 200, 111, 1)";
            case "Mobile":
                return "rgba(255, 186, 5, 1)";
                case"Inovação e Gestão":
                return "rgba(255, 186, 155, 1)";
            default:
                return "black";
        }
    }};

    color: ${({ $categoria }) => {
        switch ($categoria) {
            case "Frontend":
                return "white";
            case "Backend":
                return "white";
            case "Mobile":
                return "white";
            default:
                return "white";
        }
    }};

   

    /**font */
    font-family: Source Sans Pro;    
    line-height: 24px;
    text-align: center;
    text-underline-position: under;
    text-decoration-skip-ink: none;

     /* Adicionar animação */
     transition: transform 0.1s ease;

&:active {
    transform: scale(0.85); /* Reduz o tamanho para 95% */
   
}

@media(max-width:1030px){
    font-size: ${({ $fontTablet }) => $fontTablet || "2rem"};
}

@media(max-width:820px){
    font-size: ${({ $fontTablet }) => $fontTablet || "2rem"};
    align-self:${({$alignSelf}) => $alignSelf||"center" };


}
@media(max-width:450px){
    width:${({$buttonSamrtPhone})=>$buttonSamrtPhone||"154px"};
    padding:${({$paddingSamrtPhone})=>$paddingSamrtPhone||"5px"};
    border-radius:30px; 
    padding-left:40px;
    display: ${({ $hide }) => ($hide ? 'none' : 'flex')};
    


}


`


export { ButtonStyled };