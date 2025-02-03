import style from "./player.module.css"
import { VideosContext } from "../../Context/videoContext.jsx";
import { useContext } from "react";

const Player = () => {
    
    
   

    const { video,idPlay,urlPlay } = useContext(VideosContext);
    let videoFilter={src:""};// precisei fazer assim pois se caso, não chegar o id pra fazer a filtragem, vai chegar uma url pronta, 
    // e como estou passando como props o videoFilter.src, o video vai ficar vazio, mais eu pego 
    //  url que chegar como props e passo como valor de src, assim não preciso mudar a props, videoFilter.src.
   
    if(idPlay){
        videoFilter = video.find((video) => { return video.id === idPlay})
    }else if(urlPlay){
        videoFilter.src = urlPlay;
    }

    
   

    return (
        <div className={style.player} >
           

            <div className={style.iframeContainer}>
                <iframe
                    width="100%"
                    height="100%"
                    src={videoFilter.src}
                    allowFullScreen
                ></iframe>
            </div>
        </div>

    )
}

export default Player