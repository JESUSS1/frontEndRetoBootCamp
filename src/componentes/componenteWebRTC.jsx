import '../css/componente.css';
import React,{useEffect, useRef,useState}  from 'react';
import {useRecordWebcam,CAMERA_STATUS} from "react-record-webcam";
import Timer from './Timer';

const tiempoMax = 120;//segundos = 2min
const tiempoMaxFormato = "00:02:00";

const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  recordingLength:tiempoMax  //establecemos el tiempo maximo de grabacion
};

export const Elemento1 =({pregunta})=>{
  const [visibleContador, setVisibleContador] = useState("none");
  const _handleSetVisibleContador = (newEstado) => {setVisibleContador(newEstado)};

  const recordWebcam = useRecordWebcam(OPTIONS);
  
  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
  };

  useEffect(()=>{
    if(recordWebcam.status==CAMERA_STATUS.RECORDING){
      console.log(recordWebcam.status);
      _handleSetVisibleContador("block");
    }else{
      _handleSetVisibleContador("none");
      console.log(recordWebcam.status);
    }
  })

  const RecordView = () =>{
    return(<>
        <div className='row g-3 d-flex justify-content-center'>
        
        <button className='col-auto'
          disabled={ recordWebcam.status === CAMERA_STATUS.OPEN || recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.open} aria-label="Activar Camara"
        >
          <i className="bi bi-camera-video-fill"></i>
        </button>
        <button className='col-auto'
          disabled={recordWebcam.status === CAMERA_STATUS.CLOSED || recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.close} aria-label="Detener Camara"
        >
          <i className="bi bi-camera-video-off-fill"></i>
        </button>
        <button className='col-auto'
          disabled={recordWebcam.status === CAMERA_STATUS.CLOSED || recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.start} aria-label="Grabar"
        >
          <i className="bi bi-play-circle-fill"></i>
        </button>
        <button className='col-auto' disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
                onClick={recordWebcam.stop} aria-label="Detener Grabacion"
        >
           <i className="bi bi-stop-circle-fill"></i>
        </button>
        <button className='col-auto'
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={recordWebcam.retake} aria-label="Retake Reiniciar Grabacion"
        >
          <i className="bi bi-arrow-clockwise"></i>
        </button>
        <button className='col-auto'
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={recordWebcam.download} aria-label="Download"
        >
          <i className="bi bi-cloud-arrow-down-fill"></i>
        </button>
          {
            /**
             *         <button className='col-auto'
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={getRecordingFileHooks}
        >
          Get recording
        </button>
             */
          }

        <Timer tiempoMaxFormato={tiempoMaxFormato} tiempoMax={tiempoMax} visible={visibleContador} stopVideo={recordWebcam.stop} />
      
      </div>
    </>)
  }


  return(
    <div className="contenedor-webRTC">
      <div className="div-video" >
      <h6 style={{color:'red'}}>Estados de Camara: {recordWebcam.status}</h6>
      <RecordView/>
      <video
        ref={recordWebcam.webcamRef}
        style={{
          width:'100%',
          height: '85%',
          display: `${
            recordWebcam.status === CAMERA_STATUS.OPEN ||
            recordWebcam.status === CAMERA_STATUS.RECORDING
              ? "block"
              : "none"
          }`
        }}
        autoPlay
        muted
      />
      <video
        ref={recordWebcam.previewRef}
        style={{
          width:'100%',
          height: '85%',
          display: `${
            recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
          }`
        }}
        controls
      />

      </div>
    
      <div className="div-pregunta" >
        <h4 style={{textAlign : "center"}} className='pregunta'>{pregunta.pregunta}</h4>
      </div>
    </div>
  )
}