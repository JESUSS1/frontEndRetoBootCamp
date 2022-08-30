import React,{useState,useContext, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import {GlobalContext} from '../context/GlobalContext';
import VideoPreguntas from '../jsx/App'

const ModalVideo = () => {

    const {showVideo,_handleCloseVideo,preguntas} = useContext(GlobalContext);
    const [idPregunta,setIdPregunta] = useState(0);
    const [nombreButton,setNombreButton] = useState("Siguiente");

    const _handleNextVideo = () =>{
        if((preguntas.length-1)>idPregunta){
            setIdPregunta(idPregunta+1)
        }
        
    }

    useEffect(()=>{
        if((preguntas.length-1)===idPregunta){
            setNombreButton("Finalizar");
        }
    },[idPregunta])
    

      return(
          <Modal show={showVideo} onHide={_handleCloseVideo} backdrop="static" size="lg" >
            <Modal.Header closeButton>
              <Modal.Title> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VideoPreguntas idPregunta={idPregunta} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={_handleCloseVideo}>Close</Button>
              <Button variant="secondary" onClick={_handleNextVideo}>{nombreButton}</Button>
            </Modal.Footer>
        </Modal>
      )
    }
  
    export default ModalVideo;