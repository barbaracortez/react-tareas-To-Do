import React from "react";

function Formulario({ tarea, setTarea, agregarTarea}){
    return (
        <div>
            <input 
            type="text" 
            value={tarea} 
            onChange={(e) => setTarea(e.target.value) } placeholder="Escribe una tarea"/>
            <button onClick={agregarTarea}>Agregar</button>
        </div>
    )
}

export default Formulario;