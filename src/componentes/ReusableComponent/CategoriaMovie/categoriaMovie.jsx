import { CategoriaContainerStyled, CategoriaMovieContainerStyled } from "./categoriaMovieStyled.js";
// import { ButtonStyled } from "../ButtonComponent/styledButton.js";
import Button from "../ButtonComponent/button.jsx";
import Card from "../Card/card.jsx";
import { useContext } from "react";
import {VideosContext} from "../../../Context/videoContext.jsx";
import useService from "../../../Hooks/Services/useService.js";
// import { v4 as uuidv4 } from 'uuid';




const Categoria = () => {

    const { atualizarListVideos } = useService();
    const { video } = useContext(VideosContext);
    const {categorias} = useContext(VideosContext);

    // const atualizarLista =  (id) => { /** função para atualizar a lista de videos quando um video é deletado
    // obs.: ao deletarr um video o mesmo sera deletado no banco de dados onde esta  armazenado o video
    // mais a função  deletarVideo da api, não remove o video da do state do cocntext api, que prove os videos
    // para toda a aplicação, então essa função é cchamada logo apos chamar a função deletar video for chamada no componente  card
    // Essa função faz uma filtrragem no state e retorna os videos que nao tiverem o id do video que foi deletado
    // e atualiza o estado com os videos filtrados
    //  */
    //     setVideo((prevSt) => prevSt.filter((video) => video.id !== id));
    // }; 

    
    

    return (
        (video.length > 0 )?
        <>
            {categorias.map((cat) => {
                // Filtra os vídeos pela categoria
                const videosNaCategoria = video.filter((videos) => videos.categoria === cat.categoria);

                // Se não houver vídeos para a categoria, não renderiza o contêiner da categoria
                if (videosNaCategoria.length === 0) {
                    return null; // Retorna null para não renderizar o contêiner
                }

                return (
                    <CategoriaContainerStyled key={cat.id}>
                        <Button
                            $width="432px"
                            $height="70px"
                            $size="2.2rem"
                            $categoria={cat.categoria}
                            $buttonSamrtPhone="292px"
                        >
                            {cat.categoria}
                        </Button>
                        <CategoriaMovieContainerStyled>
                            {videosNaCategoria.map((video) => (
                                <Card
                                    key={video.id}
                                    id={video.id}
                                    titulo={video.titulo}
                                    categoria={video.categoria}
                                    img={video.img}
                                    src={video.src}
                                    descricao={video.descricao}
                                    atualizarListVideos={atualizarListVideos}
                                />
                            ))}
                        </CategoriaMovieContainerStyled>
                    </CategoriaContainerStyled>
                );
            })}
        </>:<h1>Carregando...</h1>
    );
};



export default Categoria;