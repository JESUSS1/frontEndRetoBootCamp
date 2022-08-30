import {GlobalContext} from '../context/GlobalContext';
import {useState,useContext,useRef} from 'react';

//console.log(data)
function Gestionar() {
  const {preguntas,_handleAddPregunta} = useContext(GlobalContext);
  const ref_input = useRef();

  const _handleFormPregunta = () =>{
   
    if(ref_input.current.value!=""){
      _handleAddPregunta({
        id:preguntas.length,
        pregunta:ref_input.current.value,
        srcVideo : '',
        estadoRespuesta:false
  
      })
    }

  }

  const TablaPreguntas = () =>{
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Pregunta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {preguntas.map((pregunta,index)=>{
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{pregunta.pregunta}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>_handleDeletePregunta(pregunta.id)}>Eliminar</button>
                </td>
              </tr>
            )
          } )}
        </tbody>
      </table>
    )
  }

  const FormAgregarPregunta = () =>{
    return(
      <div className="row g-2">
        <div className="col-sm-10">
          <input ref={ref_input} type="text" className="form-control" id="pregunta" placeholder="Ingrese la pregunta" />
        </div>
        <div className="col-auto">
          <button value="s" className="btn btn-primary mb-3" onClick={_handleFormPregunta}>Agregar</button>
        </div>


      </div>
    )
  }

  return (
    <div >
      <FormAgregarPregunta/>
      <TablaPreguntas/>
    </div>
  )
}

export default Gestionar;