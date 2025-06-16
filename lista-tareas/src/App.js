import { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario.jsx";
import ListaDeTareas from "./components/ListaDeTareas.jsx";
import Tarea from "./components/Tarea.jsx";


function App() {
  const [tarea, setTarea ] = useState("");
  const [lista, setLista] = useState(()=>{
    try {
      const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
      return Array.isArray(tareasGuardadas) ? tareasGuardadas : [];
    } catch (error) {
      console.warn("Error al leer tareas desde Local:", error);
    }
  });

  
  useEffect(()=>{
    localStorage.setItem("tareas", JSON.stringify(lista));
  },[lista]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setLista([...lista, tarea]);
      setTarea("");
    }
  };

  const borrarTarea = (index) => {
    const nuevaLista = [...lista];
    nuevaLista.splice(index, 1);
    setLista(nuevaLista);
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Formulario tarea={tarea} setTarea={setTarea} agregarTarea={agregarTarea}/>
      <ListaDeTareas lista ={lista} onBorrar={borrarTarea}/>
    </div>
  );
}

export default App;