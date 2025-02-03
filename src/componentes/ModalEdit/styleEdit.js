import styled from "styled-components";

const OverLay = styled.div`
   position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

`

const DialogStyled = styled.dialog`
    
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    
    display: flex;
    justify-content: center;
    
    `

const ModalContainer = styled.div`
background: #070000;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 974px;
  position: relative;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;
  padding: 60px 30px;

  @media(max-width:420px){
      height: 100vh;
      width: 100%;
  }

  `

  




export {OverLay, ModalContainer, DialogStyled}