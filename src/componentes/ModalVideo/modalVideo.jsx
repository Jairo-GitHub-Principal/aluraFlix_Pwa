
import Player from "../Player/player.jsx";
import styles from "./modalVideo.module.css"

import useService from "../../Hooks/Services/useService.js";
import { useContext } from "react";
import { VideosContext } from "../../Context/videoContext.jsx";

const ModalVideo = () => {

  const {closeModal}= useService();
  const{isModalVideoOpen}=useContext(VideosContext);
  
  if (!isModalVideoOpen) {// quando isOpen for falso
    return null; //não exibe o modal
  } else {
    return ( // exibe o modal
      <div className={styles.overlay} >


               <div className={styles.modalContainer} >
                    <button className={styles.modalclose} onClick={closeModal}>Fechar</button>
                    <div className={styles.containerVideo}>
                     <Player/> 
                     </div>

              </div>

      </div>





    );
  }
}






export default ModalVideo