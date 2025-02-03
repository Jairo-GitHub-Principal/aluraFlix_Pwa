
import style from "./modalEdit.module.css";
import Form from "../ReusableComponent/FormComponent/form";
import { OverLay, ModalContainer, DialogStyled } from "./styleEdit.js";
import { useContext } from "react"
import { VideosContext } from "../../Context/videoContext.jsx"
import { IoIosCloseCircleOutline } from "react-icons/io";

import useService from "../../Hooks/Services/useService.js";



const ModalEdit = () => {
  // console.log("ModalEdit",videoEdit);
  const { setVideo, videoEdit, isModaEditVideo } = useContext(VideosContext)
  const { closeModal } = useService();
  console.log("ModalEdit isModalOpen", isModaEditVideo);


  if (!isModaEditVideo) {// quando isOpen for falso
    return null; //não exibe o modal
  } else {
    return ( // exibe o modal
      <div className={style.overlay}>
        <section className={style.novoVideoContainer}>
          
        <div className={style.novoVideoForm}>
            <button className={style.modalclose} onClick={closeModal}>
              <IoIosCloseCircleOutline size={50} className={style.xclose} />
            </button>

            <Form video={videoEdit}
              setVideo={setVideo}
              onSubmit={() => console.log("Lista atualizada!")}
              titulo="Editar Card de Video"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
              padding="30px"
            />
        </div>
        </section>
      </div>
    );
  }


}

export default ModalEdit