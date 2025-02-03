import styled from "styled-components";


const CardContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 432px;
    min-width: 350px;
    height: 325px;
    background-color: #000000;
    color: #ffffff;
    box-sizing: border-box;
    border: 4px solid rgba(107, 209, 255, 1);
    border-radius: 15px 15px ;
    margin:0;
    padding: 0;

    &:hover{
       scale: 1.09;
       transition: 0.5s;
      
    }

    

    // condição para cor da borda do card
    /** condição para a cor do botão e a cor do texto */
    border: ${({ $categoria }) => {
        switch ($categoria) {
            case "Front End":
                return " 4px solid rgba(107, 209, 255, 1)";
            case "Back End":
                return " 4px solid rgba(0, 200, 111, 1)";
            case "Mobile":
                return " 4px solid rgba(255, 186, 5, 1)";
            default:
                return "black";
        }
    }};

@media(max-width:1000px){
        width: 80%;
        

@media(max-width:450px){
    min-width: 100%;

    
}}





`


const  CardContainerButtonStyled = styled.div`
    display: flex;
     align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    background-color: #000000;
    color: #ffffff;
    box-sizing: border-box;
    border-style: none;
    border-radius: 0px 0px 14px 14px;
    margin:0;
    padding: 3px 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid rgba(107, 209, 255, 1);
   

    

`


export { CardContainerStyled,CardContainerButtonStyled };