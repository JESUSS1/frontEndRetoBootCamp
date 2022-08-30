import '../css/componente.css';
import React,{useEffect, useRef}  from 'react';
import {useRecordWebcam,CAMERA_STATUS} from "react-record-webcam";

const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4"
};

export const Elemento1 =({pregunta})=>{

  const recordWebcam = useRecordWebcam(OPTIONS);
  
  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
  };

  useEffect(()=>{
    console.log(recordWebcam.status);
  })

  const RecordView = () =>{
    return(<>
           <div>
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.OPEN ||
            recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.open}
        >
          Open camera
        </button>
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.CLOSED ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.close}
        >
          Close camera
        </button>
        <button
          disabled={
            recordWebcam.status === CAMERA_STATUS.CLOSED ||
            recordWebcam.status === CAMERA_STATUS.RECORDING ||
            recordWebcam.status === CAMERA_STATUS.PREVIEW
          }
          onClick={recordWebcam.start}
        >
          Start recording
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
          onClick={recordWebcam.stop}
        >
          Stop recording
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={recordWebcam.retake}
        >
          Retake
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={recordWebcam.download}
        >
          Download
        </button>
        <button
          disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
          onClick={getRecordingFileHooks}
        >
          Get recording
        </button>
      </div>
    </>)
  }


  return(
    <div className="contenedor-webRTC">
      <div className="div-video" >
      <p style={{color:'red'}}>Camera status: {recordWebcam.status}</p>

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
        <h3 className='pregunta'>{pregunta.pregunta}</h3>
      </div>


    </div>
  )
}