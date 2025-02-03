
import React,{ createContext, useEffect, useState } from "react"
import categoriasDB from "../Mocks/categoria.json"
import {useApi} from "../Hooks/fetchApi/useApi.js"




export const VideosContext = createContext() // aqui foi criado o contexto com o nome VideoContext
//VideosContext.displayName = "Videos" // aqui definimos que o contexto VideosContext vai ser chamado de "Videos"


export default function VideoProvider({children}){

    const {getVideos} = useApi()
    const [video, setVideo] = useState([]) // estsdo que armazena os videos
    const [categorias, setCategorias] = useState(categoriasDB); //estado que armazena as categorias
    const [isModalTest, setIsModalTest] = useState(false);// estado que controla a visibilidade do modal
    const [isModalOpenNovoVideo, setIsModalOpenNovoVideo] = useState(false);
    const [isModaEditVideo, setIsModaEditVideo] = useState(false);
    const [isModalVideoOpen, setIsModalVideo] = useState(false);
    const [videoEdit, setVideoEdit] = useState([null]);
    const [idPlay, setIdPlay] = useState(null);
    const [urlPlay,setUrlPlay] = useState(null);
    const [editVideos, setEditVideos] = useState([null]);
    const [activeButton, setActiveButton] = useState("home");
    







     
    useEffect(()=>{ /**  função getVideos que faz a requisicao get, carrega os videos no estado no context video */
        getVideos(video, setVideo)
     },[]) 

    

    return(
        <VideosContext.Provider 
        value={{
            video, setVideo, 
            categorias,setCategorias,
            isModalTest,setIsModalTest,
            isModalOpenNovoVideo,setIsModalOpenNovoVideo,
            isModaEditVideo,setIsModaEditVideo,
            isModalVideoOpen, setIsModalVideo,
            idPlay, setIdPlay,
            urlPlay,setUrlPlay,
            editVideos, setEditVideos,
            videoEdit, setVideoEdit,
            activeButton, setActiveButton,
            
            }}>
            {children}
        </VideosContext.Provider>
    )
}
