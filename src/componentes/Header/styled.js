import styled from "styled-components";



const HeaderStyled = styled.header`
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width:1442px;
    align-items: center;
    padding:  0;

    @media(max-width:800px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:  0;
        gap: 0px;
        
    }   

    @media(max-width:450px){
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
       
    }


`;

const NavContainer = styled.nav`
    max-width: 385px;
    height: 54px;
    /* border: 1px solid red; */
    display: flex;
    padding: 0;
    box-sizing: border-box;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: end;
    gap: 25px;
    align-items: center;
    margin:35px 51px;

    @media(max-width:800px){
        flex-direction: row;
        align-items: center;
        height: 100%;
        gap: 50px;
        
    }
    @media(max-width:450px){
       
      
    }
    
`;



export {HeaderStyled,NavContainer}