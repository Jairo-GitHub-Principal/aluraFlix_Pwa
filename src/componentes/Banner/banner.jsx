import Text from "../ReusableComponent/TextComponent/text";
import { BannerStyled } from "./styleBanner";
import style from "./banner.module.css"
import Button from "../ReusableComponent/ButtonComponent/button";
import imgVideo from "./imgbaner/imgVideo.png"
import useService from "../../Hooks/Services/useService";


const Banner = (props) => {

    const { playVideo } = useService();

    const handlePlay = () => {
        const url = "https://www.youtube.com/embed/7x4_HNC4Uu4?si=fUmZExvz3RRLS0G4";
        playVideo(url);
    };

    return (
        <BannerStyled
            $width={props.width}
            $height={props.height}
            $backgroundImage={props.backgroundImage}>

               

            <article className={style.textBannerContainer}>
                <Button
                    border="none"
                    $width="296px"
                    $height="92px"
                    $size="3.2rem"
                    $weight="600"
                    $categoria="Front End"
                    $fontTablet="2rem"
                    $alignSelf="start"  
                    $padding="5px"
                   


                >
                    Frontend
                </Button>
                <Text

                    size="46px"
                    weight="normal"
                    color="white"
                    width="100%"
                    margin="0"
                    tabletFont="26px"
                    smartPhoneFont="20px"
                >
                    SEO com React
                </Text>
                <div style={{ display: "flex", width:"90%" }}>
                    <Text size="18px"
                        weight="normal"
                        color="white"
                        width="100%"
                        maxWidth="662px"
                        lineHeight="25px"
                        textAline="left"
                        margin="0"

                    >
                    Eu to aqui nesse vídeo pra dizer que a gente vai aprender fazer um app com Nextjs e React, inspirado no desenho Pokémon, vamos ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo. 
                        Aprenda a otimizar seus sites com React
                    </Text>
                </div>

            </article>
            <div className={style.videoContainer} >

                <img className={style.video} src={imgVideo} alt="Video"
                    onClick={handlePlay}
                />

            </div>
        </BannerStyled >
    )
}


export default Banner