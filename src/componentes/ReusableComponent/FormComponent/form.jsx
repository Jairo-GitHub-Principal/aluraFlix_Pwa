import { useContext, useEffect, useState } from "react";
import styles from "./form.module.css";
import Text from "../TextComponent/text";
import { VideosContext } from "../../../Context/videoContext";
import { memo } from "react";
import { v4 as uuidv4 } from 'uuid';

import {useApi} from "../../../Hooks/fetchApi/useApi"; // Ajuste o caminho conforme necessário



const Form = memo(
  ({ onSubmit,...props }) => {
    // console.log("Informação do video que sera editado", props.video);
    const {categorias, setCategorias} = useContext(VideosContext);
    const { saveVideo, updateVideo } = useApi(); // estraindo o saveVideo do da useApi, que prove nossos hooks personalizados
    const [formData, setFormData] = useState({ /** criamos uma estado para armazenar os dados do formulário, e 
    inicializamos com valores vazios */
      titulo: '',
      categoria: '',   
      img: '',
      src: '',
      descricao: '',
      id: ''
    })
  
    useEffect(() => { /** aqui nos usamos o useEffect para atualizar o estado do formulário quando o props.video mudar */
      if (props.video) {
        setFormData({
          titulo: props.video.titulo,
          categoria: props.video.categoria,
          img: props.video.img,
          src: props.video.src,
          descricao: props.video.descricao,
          id: props.video.id
        })
      }
    }, [props.video])
  
    // Função para atualizar os valores dos inputs
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
      
  
    // Função para lidar com o envio do formulário
    const handleSubmit = async () => {
      if (!formData.categoria || !formData.src) {
        alert("Preencha todos os campos obrigatorios");
        return;
      }
      const isUpdate = !!formData.id;
  
      try {
        let resultado;
        if (isUpdate) {
          resultado = await updateVideo(formData,props.setVideo);
          alert("Vídeo atualizado com sucesso!");
        } else {
          resultado = await saveVideo(formData,props.setVideo);
          alert("Vídeo salvo com sucesso!");
           
  
        }
        //   console.log(
        //     isUpdate ? "Vídeo atualizado com sucesso:" : "Vídeo salvo com sucesso:",resultado
        // );
        setFormData({ categoria: '', src: '', id: '' }); // Limpa o formulário
        if (onSubmit) onSubmit(); // Callback opcional após salvar/atualizar
  
      } catch (error) {
        console.error("Erro ao salvar os dados:", error);
        alert("Ocorreu um erro ao salvar/atualizar o vídeo.");
  
      }
      console.log("Dados enviados:", formData);
      // Aqui você pode implementar a lógica para salvar os dados editados
    };
  
    const handleClear = () => {
      setFormData({ categoria: '', src: '', id: '' }); // Limpa o formulário
    };
  
  
    return (
  
      <div className={styles.formContainer}>
      
     
          <form className={styles.form} >
          <h1 className={styles.title} >
            {props.titulo}
          </h1>
    
          <div className={styles.inputContainer}>
            <label htmlFor="titulo">Titulo:</label>
            <input type="text" id="titulo" name="titulo" placeholder="titulo" value={formData.titulo || ''} onChange={handleChange} />
          </div>
    
          <div className={styles.inputContainer}>
            <label htmlFor="categoria">Categoria:</label>
            <select
              id="categoria"
              name="categoria"
              value={formData.categoria || ''}
              onChange={handleChange}
            >
               <option  value="" disabled>Selecione uma categoria</option>
               {categorias.map((cat) => {
        return(
             
              <option key={cat.id} value={cat.categoria}>{cat.categoria}</option>
             
            );
         
         
          })
        }
            </select>
             
          </div>
    
          
    
    
    
          <div className={styles.inputContainer}>
            <label htmlFor="img">Imagem  </label>
            <input type="text" id="img" name="img" placeholder="imagem" value={formData.img || ''} onChange={handleChange} />
          </div>
    
          <div className={styles.inputContainer}>
            <label htmlFor="src">Video  </label>
            <input
              type="text" id="src" name="src"
              value={formData.src || ''}
              onChange={handleChange}
              placeholder="video"
            />
          </div>
    
    
    
          <div className={styles.inputContainer}>
            <label htmlFor="descricao">Descricao:</label>
            {/* o codigo abaixo no input o value={formData.descricao || ''} define um controle para o input , 
            ou tera o valor definnido no estado formData vindo como props  de outro componnente quando for atualizar registro
              ou tera valor digita do pelo usuario, e ambus os valores seraão armazenados no formData e eviado para o seu destino*/}
            <input type="text-area" id="descricao" name="descricao" placeholder="descricao"         
            value={formData.descricao || ''} 
            onChange={handleChange} />
          </div>
    
    
          <div className={styles.buttonContainer}>
            <button className={styles.btn} type="button" onClick={handleSubmit}>
              {formData.id ? 'ATUALIZAR' : 'GUARDAR'} {/* Altera o texto do botão dependendo do estado */}
            </button>
    
            <button className={styles.btn} type="button" onClick={handleClear} >LIMPAR</button>
          </div>
    
    
        </form>
  
      
      
      </div>
    );
  }
)

Form.displayName="Form";
 


export default Form