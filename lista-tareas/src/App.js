import { useState } from "react";
import "./App.css";
import Tarea from "./components/Tarea.jsx";
import Formulario from "./components/Formulario.jsx";

function App() {
  const [tarea, setTarea ] = useState("");
  const [lista, setLista ] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setLista([...lista, tarea]);
      setTarea("");
    }
  };

  const borrarTarea = (index) => {
    const nuevaLista = lista.filter((_, i )=> i !== index);
    setLista(nuevaLista); 
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Formulario tarea={tarea} setTarea={setTarea} agregarTarea={agregarTarea}/>
      <ul>
        {lista.map((t, index) => (
        <Tarea key={index} texto={t} onBorrar={()=>borrarTarea(index)}/>  
        ))}
      </ul>
    </div>
  );
}

export default App;