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
      const nuevaTarea = {
        texto: tarea,
        completada:false,
      };
      setLista([...lista, nuevaTarea]);
      setTarea("");
    }
  };

  const alternarCompletada = (index) => {
    const listaActualizada = [...lista];
    listaActualizada[index].completada = !listaActualizada[index].completada;
    setLista(listaActualizada)
  }

  const borrarTarea = (index) => {
    const nuevaLista = [...lista];
    nuevaLista.splice(index, 1);
    setLista(nuevaLista);
  };

  const editarTarea = (index, nuevoTexto) => {
    const listaActualizada = [...lista];
    listaActualizada[index].texto = nuevoTexto;
    setLista(listaActualizada)
  }
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <Formulario Tarea={Tarea} setTarea={setTarea} agregarTarea={agregarTarea}/>
      <ListaDeTareas lista ={lista} onBorrar={borrarTarea} onAlternar={alternarCompletada}
      onEditar={editarTarea}/>
    </div>
  );
}

export default App;
