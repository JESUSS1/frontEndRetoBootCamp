import React,{useState,useContext, useEffect} from "react";
import { Modal, Button } from "react-bootstrap";
import {GlobalContext} from '../context/GlobalContext';
import VideoPreguntas from '../jsx/App'

const ModalVideo = () => {

    const {showVideo,_handleCloseVideo,preguntas} = useContext(GlobalContext);
    const [position,setPosition] = useState(0);//position lista
    const [nombreButton,setNombreButton] = useState("Siguiente");
    const [visibleAtras, setVisibleAtras] = useState("none");//Boton volver

    const _handleNextVideo = () =>{
        if((preguntas.length-1)>position){
            setPosition(position+1)
        }
        if((preguntas.length-1)==position){
          setNombreButton("Finalizar");
        }
    }

    const _handleRetrocederVideo = () =>{
      if((preguntas.length-1)>=position){
          setPosition(position-1)
          setNombreButton("Siguiente");
      }
  }

    useEffect(()=>{
      if(position==0 && preguntas.length!=0){
        setPosition(0)
      }else if(position!=0 && preguntas.length!=0){
        setPosition(0)
      }

      if(preguntas.length==1){
        setNombreButton("Finalizar");
        setVisibleAtras("none");
      }else if(preguntas.length>1){
        setNombreButton("Siguiente");
        setVisibleAtras("block");
      }
      

    },[preguntas])

    useEffect(()=>{
        if((preguntas.length-1)===position){
            setNombreButton("Finalizar");
        }
        if(preguntas.length>1 && position>0){
            setVisibleAtras("block");
        }else{
          setVisibleAtras("none");
        }

    },[position])
    

      return(
          <Modal show={showVideo} onHide={_handleCloseVideo} backdrop="static" size="lg" >
            <Modal.Header closeButton>
              <Modal.Title> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <VideoPreguntas position={position} />
            </Modal.Body>
            <Modal.Footer>
              <Button style={{display:visibleAtras}}  variant="outline-secondary" onClick={_handleRetrocederVideo}>Regresar</Button>
              <Button  variant="primary" onClick={_handleNextVideo}>{nombreButton}</Button>
            </Modal.Footer>
        </Modal>
      )
    }
  
    export default ModalVideo;