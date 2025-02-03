import styled from "styled-components";

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width:1442px;
     background-color: #000000;
    color: #ffffff;
    margin:0;
    box-sizing: border-box;
    box-shadow: 0px 5px 29px 0px rgba(34, 113, 209, 0.7);

    // mudar  a cor da barra de rolagem
     
   
`

 const HomeMainStyled = styled.main`
    display: flex;
    flex-direction: column;       
    width: 100%;    
    max-width:1356px;  
    margin:40px;
    box-sizing: border-box;
`



export{HomeMainStyled, HomeStyled};
    