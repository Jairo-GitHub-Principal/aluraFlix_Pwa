import { ButtonStyled } from "./styledButton";
import { memo } from "react";
import PropTypes from 'prop-types'; // fazer validação de props


// eslint-disable-next-line react/prop-types
const Button = memo(  ({ children, $padding, $size, $border, $width, $height, $weight,$categoria,click,$fontTablet,$alignSelf,$buttonSamrtPhone,$paddingSamrtPhone,$hide,activeButton}) => {
   


       const handleClick =  (event) => {
        
        // event.preventDefault(); // Impede o carregamento da página
    
        // Verifica se `click` é uma função antes de chamá-la
        if (typeof click === "function") {
            click(event); // Chama a função passada como prop
        } else {
            console.warn("A prop `click` não é uma função válida.");
        }
        
        
      
    };
    return (
        <ButtonStyled
        $size={$size}
        $width={$width}
        $height={$height} 
        $weight = {$weight} 
        $border = {$border}
        $categoria = {$categoria}
        onClick={handleClick} // Função vazia como fallback
        $fontTablet = {$fontTablet}
        $alignSelf = {$alignSelf}
        $buttonSamrtPhone = {$buttonSamrtPhone}
        paddingSamrtPhone = {$paddingSamrtPhone}
        $padding = {$padding}
        $hide = {$hide}
        $activeButton = {activeButton}
            >
            {children}
        </ButtonStyled>
    );
});

Button.displayName = "Button";
/**  validar as props */

Button.propTypes = {
    children: PropTypes.node.isRequired, // Valida que `children` é renderizável e obrigatório
    size: PropTypes.string, // Valida como string
    border: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    categoria: PropTypes.string,
};



export default Button;