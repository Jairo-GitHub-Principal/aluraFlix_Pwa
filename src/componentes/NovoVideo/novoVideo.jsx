import style from "./novoVideo.module.css"
import Form from "../ReusableComponent/FormComponent/form"
import Text from "../ReusableComponent/TextComponent/text"
import { useContext, useEffect } from "react"
import { VideosContext } from "../../Context/videoContext.jsx"
import { IoIosCloseCircleOutline } from "react-icons/io";
import useService from "../../Hooks/Services/useService.js"



const NovoVideo = () => {
    const {closeModal}= useService();
    const {isModalOpenNovoVideo} = useContext(VideosContext);
    // console.log("NovoVideo", isModalOpenNovoVideo);
    const {  setVideo } = useContext(VideosContext) /** usado para passar o setVideo para  o metodo 
                                                              saveVideo, que o passara pa getVideos, pra 
                                                           atualizar o estdo, apos salvar o video ou atualizar*/

          useEffect(() => { // ao abrrir o componente NovoVideo, vai rolar a tela para o topo
              window.scrollTo(0, 0);
          },[])                                                 
                                                           
    if (!isModalOpenNovoVideo) {// quando isOpen for falso
        return null; //não exibe o modal
    } else {
        return (
            <>
            {/** para o elemento overlay seria mais interressante um styleComponent
             * perceba que nos não envolvemos o conteudo que  sera exibido nesse modal, 
             * dentro do overlay, pois isso vai nos possibilitar, ter um scrow para rolar 
             * a tela, e ter mais facilidade de visualizar o conteudo que vamos interagir 
             * que é o formulario.
             * dessa forma isso se torna possivel, porque ao colocar nosso contudo fora da tag
             * do overlay, nos não submetemos o conteudo que sera exibido ao position fixed, que  
             * acaba sendo obrigatorio no overlay, para que ele cubra todo o conteudo da tela 
             * que ele sera sobre posto.
             * obs.: o nosso outro formulario, esta dentro do overlay, portanto submetido ao position fixed
             * e por isso foi nescessario colocar um overflow no container do forrmulario para rrolar o mesmo em telas 
             * que não permitir a  visualização completa do mesmo
             */}
            <div className={style.overlay}>            </div> 

        
            <section className={style.novoVideoContainer}>
               

                <div className={style.novoVideoTitulo}>

                    <h1><Text size="30px" weight="900" color="white" family="Roboto" lineHeight="1.5">NOVO VÍDEO</Text>  </h1>
                    <Text size="20px" weight="400" color="white" family="Roboto" lineHeight="23px" textAline="center">Complete o formulário para criar um novo card de vídeo.</Text>

                </div>

                <div className={style.novoVideoForm}>
                <button className={style.modalclose} onClick={closeModal}>
                    <IoIosCloseCircleOutline  size={50} className={style.xclose} />
                </button>
                    
                    <Form titulo="Criar Card de Video"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        padding="30px"
                        setVideo={setVideo}

                    />
                </div>


            </section>
            </>
        )
    }
}

export default NovoVideo