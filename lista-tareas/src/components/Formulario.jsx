import { useState } from "react";

function Formulario({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea(texto);
    setTexto(""); // limpia input
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default Formulario;
