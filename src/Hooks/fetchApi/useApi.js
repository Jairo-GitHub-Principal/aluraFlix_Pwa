


 export const useApi= () => {
    
   

    // pegar videos
       const getVideos = async (vd, setVd)=> {
        try {
            // Caminho da API - JSON Server - arquivo no GitHub
            const resposta = await fetch("https://my-json-server.typicode.com/Jairo-GitHub-Principal/aluraFlix-api/videos");
            // Caminho do nosso localhost
            //const resposta = await fetch("http://localhost:3000/videos");
            
            const dados = await resposta.json();
            setVd(dados);
        } catch (erro) {
            console.error("Erro ao buscar vídeos:", erro);
        }
    }
    

       
    
    
    /** salvar video */
   

    const saveVideo = async (vd, setVd) => {
        console.log("Salvando novo vídeo");
        try {
            // Buscar vídeos existentes para pegar o último  ID registrado que tambem deve ser o id de maior valor
            const videos = await fetch("http://localhost:3000/videos") // com essa requisição nos recuperamos todos os videos,
                                                                        // em um array, response, e a prtir dele consiguiremos pesquisar o maior id
                                                                        // e a partir dele nos criaremos un novo id, sem repetir um id ja existente
                .then((response) => response.json());
                /** com o cocdigo  da lina abixo pego o maior id registrado, pra criar um novo id */
                const maiorId = Math.max(...videos.map((video) => video.id), 0);
                console.log("Maior ID",maiorId);
                console.log("Tipo de maiorId",typeof maiorId);
           
            // a partir do maior id nos criaremos um novo id
            const lastVideo = maiorId;
            console.log("ultimo id registrado", lastVideo);
            console.log("latestVideo tem o tipo", typeof lastVideo);
            const newId = lastVideo ? lastVideo + 1 : 1;// se lastVideo for true, incrementa o lastVideo + 1 para criar um id de maior valor que o maior id existente na tabela de registros de video
            console.log("Novo id", newId);
            vd.id = String(newId); // Atribuindo novo ID ao vídeo
            
            // agora como ja sabemos qual é o maior id, e ja criamos um  novo id, podemos salvar o video
            const url = "http://localhost:3000/videos"; // URL para salvar um novo vídeo
            const method = "POST"; // Método POST para criar um novo vídeo
    
            // Enviar os dados para o servidor
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vd), // Envia os dados no corpo da requisição
                   
               

            }); 
            if(response.ok){
                console.log("Video salvo com sucesso");
                    getVideos(vd, setVd)

            }
    
            if (!response.ok) {
                throw new Error("Erro ao salvar o vídeo");
            }

            return await response.json(); // Retorna o vídeo salvo
        } catch (error) {
            console.error("Erro:", error);
            throw error;
        }

    };


    
    
    /**atualizar um video existente */

    const updateVideo = async (vd,setVd) => {
        console.log("Atualizando vídeo", vd);
        console.log("Atualizando vídeo com ID:", vd.id);
        const id = Number(vd.id);
        try {
            const url = `http://localhost:3000/videos/${id}`; // URL para atualizar um vídeo específico
            const method = "PUT"; // Método PUT para atualizar o vídeo
    
            // Enviar os dados para o servidor
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vd), // Envia os dados no corpo da requisição
            });

      
                console.log("Video salvo com sucesso");
                    getVideos(vd, setVd)

            
    
            if (!response.ok) {
                throw new Error("Erro ao atualizar o vídeo");
            }
    
            return await response.json(); // Retorna o vídeo atualizado
            

        } catch (error) {
            console.error("Erro:", error);
            throw error;
        }
    };




    // Deletar videos
    // obs.: apos deletar, chamar a função atualizarlistadeletevideos, em useService, para atualizar a lista
    const deleteVideo = async (videoId) => {

        console.log("Deletando vídeo", videoId);
        if(typeof videoId === "string"){
            console.log(videoId," STRING");
        }else{
            console.log(videoId," NUMERO");
            console.log("o Tipo de videoId e:",typeof videoId);
        }
    
        const url = `http://localhost:3000/videos/${videoId}`; // URL para deletar um vídeo específico

        try {
            // Enviar a requisição DELETE para o servidor
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                // body:videoId,  não e nescessario para o metodo delete
                
            });


            
            if (!response.ok) {
                throw new Error("Erro ao deletar o vídeo");
            }
    
            console.log("Vídeo deletado com sucesso");
            return { success: true }; // Retorna sucesso se não houver erro
        } catch (error) {
            console.error("Erro:", error);
            throw error;
        }




    };

       



       return{
        getVideos,
        saveVideo,
        updateVideo,
        deleteVideo
    }

   

}

