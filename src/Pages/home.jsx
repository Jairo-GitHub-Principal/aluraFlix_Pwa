import { HomeMainStyled,HomeStyled, } from "./styledHome.js"
import Banner from "../componentes/Banner/banner.jsx"
import bannerImagem from "../componentes/Banner/imgbaner/bannerAlura.png"
import Categoria from "../componentes/ReusableComponent/CategoriaMovie/categoriaMovie.jsx"
import ModalEdit from "../componentes/ModalEdit/edit.jsx"
import NovoVideo from "../componentes/NovoVideo/novoVideo.jsx"
import { useContext } from "react"
import { VideosContext } from "../Context/videoContext.jsx"

const Home = (props) => {
    // outra forma de cocntrolar o estado do modal
   
    


    return (
        <HomeStyled >       

            <Banner height="832px" backgroundImage={bannerImagem}/>
            <HomeMainStyled>
               <Categoria  />

            </HomeMainStyled>
        </HomeStyled>
    )
}

export default Home