import { CardContainerStyled, CardContainerButtonStyled } from "./cardStyled.js";
import Button from "../ButtonComponent/button.jsx";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaRegCirclePlay } from "react-icons/fa6";
import useService from "../../../Hooks/Services/useService.js";






const Card = ({  id, titulo, categoria, img, src, descricao ,atualizarListVideos }) => {
    
    const {editVideo,playVideo,deletarVideo} = useService();
    const handleEditClick = (event) => {

        const videoData = { id, titulo, categoria, img, src, descricao };
        editVideo(videoData); // Passa os dados do vídeo para o método edit
    };

    const handlePlay = (event) => {
        const idVideo = id;
        playVideo(idVideo);        
    }

    const handleDeleteClick = (event) => {
     
        event.preventDefault();
        const idVideo = Number(id);
        console.log("Delete Card", id);
        deletarVideo(idVideo);
        /** abaixo temos uma chamada prra uma função que atualiza a lista de videos que esta sendo exibida
         * essa função foi criada no componente categoria, pois é nesse componente que a lista de videos
         * está sendo renderizada, note que nessa função é passado um id, que corresponde ao id do video que foi deletado
         * e la no escopo da função atualizarLista esse id serar usdo para localizar o  video que foi deletado
         * e renderizar novamente a lista sem esse video que esta relacionado ao id que esta sendo passado como argumento para a função atualiza lista
         */
         atualizarListVideos(id); 

    };

   





    return (
        <CardContainerStyled $categoria={categoria} >

            <img style={{ borderRadius: "10px" }} width={"100%"} height={"100%"} src={img} alt={titulo} />
         
            <CardContainerButtonStyled>

                <Button click={handleDeleteClick} $size={"2rem"}>
                    <MdDelete /> {/** react icon icone de lixeira para o botão de delete */}
                </Button>

                <Button $size={"1.5rem"} click={handlePlay}>         
                        <FaRegCirclePlay  />
                </Button>

                <Button $size={"2.3rem"} click={handleEditClick}>
                    <CiEdit />
                </Button>


            </CardContainerButtonStyled>
        </CardContainerStyled>
    );
};


export default Card;