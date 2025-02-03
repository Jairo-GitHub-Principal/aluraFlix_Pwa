import styled from "styled-components";

const TextStyled = styled.p`
  font-size: ${(props) => props.$size || "16px"};
  font-weight: ${(props) => props.$weight || "normal"};
  color: ${(props) => props.$color || "#000"};
  margin: ${(props) => props.$margin || "0px"};
  padding: ${({$padding}) => $padding || "0"};
  line-height: ${(props) => props.$lineHeight || "1.5"};
  text-align: ${({$textAline}) => $textAline || "left"};
  width: ${({$width}) => $width || "100%"};
  font-family:${({$family}) => $family || "Arial"};
  text-justify:justify;
  /* border: solid 1px red; */



  @media (max-width: 1100px) {
    font-size:${({$tabletFont}) => $tabletFont || "14px"};
  }

 
 
`

const TextContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    max-width:${({$maxWidth}) => $maxWidth || "100%"};
    width:${({$width}) => $width || "100%"};
    height:${({$height}) => $height };
    padding:0;
    margin:0;
    
`


export { TextStyled,TextContainerStyled };
