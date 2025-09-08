import { useState, useEffect } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  const [tareas, setTareas] = useState(() => {
    const saved = localStorage.getItem("tareas");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (texto) => {
    if (texto.trim() === "") return;
    setTareas([...tareas, { texto, completada: false }]);
  };

  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  const toggleCompletar = (index) => {
    const nuevas = [...tareas];
    nuevas[index].completada = !nuevas[index].completada;
    setTareas(nuevas);
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <Formulario agregarTarea={agregarTarea} />
      <ListaDeTareas
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        toggleCompletar={toggleCompletar}
      />
    </div>
  );
}

export default App;
