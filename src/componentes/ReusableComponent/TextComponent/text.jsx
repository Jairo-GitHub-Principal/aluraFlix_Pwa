import { TextStyled, TextContainerStyled } from "./styled";

const Text = ({tabletFont,smartPhoneFont,children,size,weight,color,margin,padding,lineHeight,width,maxWidth,height,textAline,family}) => {
  return (
    <>
    <TextContainerStyled $width={width} $maxWidth= {maxWidth} $height={height}  >
      <TextStyled
      padding="0px"
       $size={size} 
       $weight={weight} 
       $color={color} 
       $margin={margin} 
       $padding={padding}
       $lineHeight={lineHeight}
       $textAline={textAline}
       $width={width}
       $maxWidth= {maxWidth}
       $family={family}
       $tabletFont={tabletFont}
       $smartPhoneFont={smartPhoneFont}

            
       
       >
        {children}
      </TextStyled>
      </TextContainerStyled>
    </>
  );
};

export default Text;