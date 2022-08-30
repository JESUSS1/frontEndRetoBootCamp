import {useState,useEffect,createContext} from 'react'
import {objCuestionario as data} from './objCuestionario'

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {

  const [preguntas, setPreguntas] = useState([]);

  const [showGestionar, setShowGestionar] = useState(false);
  const _handleCloseGestionar = () => setShowGestionar(false);
  const _handleShowGestionar = () => setShowGestionar(true);

  const [showVideo, setShowVideo] = useState(false);
  const _handleCloseVideo = () => setShowVideo(false);
  const _handleShowVideo = () => setShowVideo(true);



  const _handleSetPreguntasIniciales = (data) =>{setPreguntas(data);}

  const _handleAddPregunta = (pregunta) =>{setPreguntas([...preguntas,pregunta]);}

  useEffect(()=>{
    _handleSetPreguntasIniciales(data);
  },[])

  return(      
      <GlobalContext.Provider value={{
          preguntas,
          _handleAddPregunta,
          showGestionar,
          _handleCloseGestionar,
          _handleShowGestionar,
          showVideo,
          _handleCloseVideo,
          _handleShowVideo
      }} >
          {props.children}
      </GlobalContext.Provider>
  )
}