import { useState } from "react";
import "./App.css";

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
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {lista.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => borrarTarea(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;