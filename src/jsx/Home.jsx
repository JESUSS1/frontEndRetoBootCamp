import React,{useContext } from 'react';
import {GlobalContext} from '../context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalGestionar from '../componentes/ModalGestionar';
import ModalVideo from '../componentes/ModalVideo';

function Home() {
  const {_handleShowGestionar,_handleShowVideo} = useContext(GlobalContext);

  return (
    <div >
     <h1>Opciones</h1>    
      <button  className="btn btn-success" onClick={_handleShowGestionar}  >Gestionar Preguntas</button>
      <button  className="btn btn-secondary" onClick={_handleShowVideo}  >Video Cuestionario</button>
      <ModalGestionar/>
      <ModalVideo/>
    </div>
  )
}


export default Home;