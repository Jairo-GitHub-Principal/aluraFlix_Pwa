
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home.jsx"
import Videos from './Pages/Videos.jsx';
import Header from "./componentes/Header/header.jsx";
import Footer from './componentes/Footer/footer.jsx';
import Container from './componentes/Container/container.jsx';
import ModalEdit from './componentes/ModalEdit/edit.jsx';
import NovoVideo from './componentes/NovoVideo/novoVideo.jsx';
import ModalVideo from './componentes/ModalVideo/modalVideo.jsx';
import Modal from './componentes/Modal/modal.jsx';
import {useContext } from 'react';
import { VideosContext } from './Context/videoContext.jsx';

function App() {

  const { isModaEditVideo,isModalOpenNovoVideo,isModalVideoOpen,isModalTest
  } = useContext(VideosContext);

 

  return (
    <div className="container__router">    
      <BrowserRouter className="app"  >
      {isModaEditVideo === true && ( // edit video
        <ModalEdit />
      )}

      {isModalOpenNovoVideo && ( // Novo video
        <NovoVideo />
      )}

      {isModalVideoOpen && (// Card video, Banner video
        <ModalVideo />
      )}

      {isModalTest && (
        <Modal />
      )}
      <Container>

        <Header />

        <Routes>
          <Route path="/" element={
            <Home
            />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />

      </Container>
    </BrowserRouter>
    </div>

  )
}

export default App
