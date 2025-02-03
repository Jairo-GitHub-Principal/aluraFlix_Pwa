import styled from "styled-components";


const CategoriaContainerStyled = styled.div` // vai conter o titulo da categoria e  o container com os videos
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    align-items:start;
    width: 100%;
    max-width:1356.39px;
    min-height: 200px;
    margin-bottom: 90px;
    background-color: #000000;
    color: #ffffff;
    padding: 0 30px;
    overflow: auto;
    @media(max-width:880px){
       align-items: center;
    }

    
        

    
`

const CategoriaMovieContainerStyled = styled.section` // vai  conter apenas  o container de videos
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    scroll-behavior: smooth;
    box-sizing: border-box;
    margin-top: 40px;
    box-sizing: border-box;
    padding :20px ;
  
    
    // personalizar o scrollbar 

    &::-webkit-scrollbar {
    height: 15px; /* Altura da barra de rolagem horizontal */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 60, 95, 1); /* Cor do controle da barra */
    border-radius: 5px; /* Bordas arredondadas */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(10, 130, 125, 1); /* Cor ao passar o mouse */
  }

  &::-webkit-scrollbar-track {
    background: black; /* Cor do fundo da barra */
  }

  /* Estilo para Firefox */
  //scrollbar-width: none; /* Reduz a largura no Firefox */
  //scrollbar-color: #888 #f1f1f1; /* Controle e fundo no Firefox */
        
   
     /* Personalização da barra de rolagem para Chrome, Edge e Safari */
  
   

    @media (max-width: 450px) {
        flex-direction: row;
        flex-wrap: nowrap; /* Desabilita quebra de linha */
        overflow-x: scroll; /* Habilita rolagem horizontal */
        gap: 10px; /* Espaçamento entre os itens */
        padding: 10px; /* Espaçamento interno */
        justify-content: flex-start;
        /* Opcional: remover borda para melhorar o layout */    
        
        &&:hover{
            padding: 10px;
        }
    }
    
    `
export { CategoriaContainerStyled, CategoriaMovieContainerStyled };