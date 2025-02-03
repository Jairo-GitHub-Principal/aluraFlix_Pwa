import style from "./modal.module.css"
import Form from "../ReusableComponent/FormComponent/form"
import Text from "../ReusableComponent/TextComponent/text"
import { IoIosCloseCircleOutline } from "react-icons/io";
import useService from "../../Hooks/Services/useService";
import { useContext } from "react";
import { VideosContext } from "../../Context/videoContext";



const Modal = () => {
    const {isModalTest} = useContext(VideosContext);
    const {closeModal} = useService();
    console.log("Modal isModalTest", isModalTest);
       

   

    if (!isModalTest) {// quando isOpen for falso
        return null; //não exibe o modal
    } else {
        
        return (
            <div className={style.overlay}>
            <section className={style.novoVideoContainer}>
            
                <div className={style.novoVideoTitulo}>

                    <Text size="60px" weight="900" color="white" family="Roboto" lineHeight="1.5" textAline="center">NOVO VÍDEO</Text>
                    <Text size="25px" weight="400" color="white" family="Roboto" lineHeight="23px" textAline="center">Complete o formulário para criar um novo card de vídeo.</Text>

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
                        setVideo={"http://localhost:3000/videos"}

                    />
                </div>


            </section>
            </div>
        )
    }
}

export default Modal