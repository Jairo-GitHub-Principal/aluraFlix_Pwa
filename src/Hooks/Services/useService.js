// import {  useEffect } from "react";

import { useContext } from "react";
import { VideosContext } from "../../Context/videoContext";
import { useApi } from "../../Hooks/fetchApi/useApi";



const useService = () => {

   const {deleteVideo} = useApi(); // a função deleta sera chamada aqui nos serviços, ao inves do componente card
const {
  isModalTest,isModalOpenNovoVideo,isModaEditVideo,isModalVideoOpen,
  activeButton,  
        
        
 } = useContext(VideosContext);
const {
        setIsModalTest, setIsModalOpenNovoVideo, 
        setIsModaEditVideo, setIsModalVideo, 
        setEditVideos,setIdPlay,setUrlPlay,setVideo,
        setVideoEdit,setActiveButton,
        
      } = useContext(VideosContext);

   

    const abrirModal = () => { /* vai ser chamada la no coponente onde acontecera o primeiro clique, 
                                 que do  onde se  inicia  a  cadeia  de  eventos  que  resultara 
                                 na  abertura  do  modal e exibição  do conteudo, cuju  botão 
                                 foi implementado para chama-lo*/

        console.log("abrirModal() clicado", isModalTest);
        setIsModalTest(true);
    }

     

    const closeModal = () => { // fechar o modal
        // console.log("handleCloseModal");
        setIsModalTest(false);
        setIsModalOpenNovoVideo(false);
        setIsModaEditVideo(false);
        setIsModalVideo(false);
        setEditVideos(null);

      };


      const criarCardVideo = () => {
        setIsModalOpenNovoVideo(true);
        console.log("criarCardVideo clicado, isModalOpenNovoVideo: ",isModalOpenNovoVideo);
        setActiveButton("novoVideo");
      };


      
      const playVideo = (id) => {
        /** nas duas linhas abaixo nos garantimos que cada estado esteja vazio
         * pois temos um teste pra garantir que o que temos é uma url ou um id
         * o valor que vem com uma url ja defida é o video do banner, e o id vem do card
         * se eu clicar em um video do card, ele atualiza um estado a variave videoFilter
         * que é atribuida como valor para src do iframe, uma vez clicado no card
         * assistido e depois eu clicar no banner a variavel videoFilter vai ter o valor oriundo da filtragem 
         * feita por idPlay, e exibira o video do card, por isso é importante garantir que ambos os   estados estejam limpos
         * antes de executar o play         */
        setIdPlay(null);
        setUrlPlay(null);
       
        setIsModalVideo(true);
        console.log("userService playVideo clicado", id);
        /** abaixo temos uma  expressão regular de uma  url, que sera usada */
        const isUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/;
     
       
     
        if (isUrl.test(id)) { /**se for uma url chama o setUrlPlay, se não chama o setIdPlay  */

          console.log("Banner handlePlay clicado em banner: ",id);

         setUrlPlay(id);
     
        }else{
         setIdPlay(id);
        }

        console.log("isModalVideoOpen: ",isModalVideoOpen);
      }

      const editVideo = async (video) => {
         console.log("editVideo clicado ");
        // essa função vai decer até chegar no card, e la vai ser chamada, e pra ela vai ser  passado os video do card de video que sera editado
        // console.log("APP Edit chegou", video);
        // setEditVideos(video); // os video do card que serra editado agora vai ser passado para  o modal e do modal para o formulario
        setIsModaEditVideo(true); // ativa a abertura do modal
         setVideoEdit(video)
        
        console.log("useService isModalOpen ", isModaEditVideo);
        // console.log("useService videoEdit ", videoEdit);
      };

      const deletarVideo = (id) => {
        
        console.log("deletarVideo clicado" , id);
        deleteVideo(id);
       
      };
     
     
      const atualizarListVideos = (id) => {
        console.log("atualizarVideos",id);

        /** função para atualizar a lista de videos quando um video é deletado
    obs.: ao deletarr um video o mesmo sera deletado no banco de dados onde esta  armazenado o video
    mais a função  deletarVideo da api, não remove o video da do state do cocntext api, que prove os videos
    para toda a aplicação, então essa função é cchamada logo apos chamar a função deletar video for chamada no componente  card
    Essa função faz uma filtrragem no state e retorna os videos que nao tiverem o id do video que foi deletado
    e atualiza o estado com os videos filtrados
     */
    setVideo((prevSt) => prevSt.filter((video) => video.id !== id));
      };
    


    return {
         abrirModal,closeModal,
         criarCardVideo,editVideo,playVideo,deletarVideo,atualizarListVideos
         
    
    };

}


export default useService;