import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css'
import {useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';
import {Elemento1} from '../componentes/componenteWebRTC';

function App({position}) {

  const {preguntas} = useContext(GlobalContext);

  return (
    <div >
      {
        preguntas.map((pregunta,index)=>{
          if(index == position){
            return <Elemento1 key={index} pregunta={pregunta} />
          }
        })
        }

    </div>
  )
}

export default App;
