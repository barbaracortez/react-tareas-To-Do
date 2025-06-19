import { useState } from "react";

function Tarea({ texto, completada, onBorrar, onAlternar, onEditar }) {
  const [editando, setEditando] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(texto);

  const manejarDobleClick = () => {
    setEditando(true);
  };

  const manejarCambio = (e) => {
    setNuevoTexto(e.target.value);
  };

  const manejarGuardar = () => {
    if (nuevoTexto.trim() !== "") {
      onEditar(nuevoTexto);
    }
    setEditando(false);
  };

  const manejarKeyPress = (e) => {
    if (e.key === "Enter") {
      manejarGuardar();
    }
  };

  return (
    <li
      className={`tarea ${completada ? "completada" : ""}`}
      onDoubleClick={manejarDobleClick}
    >
      {editando ? (
        <input
          type="text"
          value={nuevoTexto}
          onChange={manejarCambio}
          onBlur={manejarGuardar}
          onKeyDown={manejarKeyPress}
          autoFocus
        />
      ) : (
        <>
          <span onClick={onAlternar}>{texto}</span>
          <button onClick={onBorrar}>❌</button>
        </>
      )}
    </li>
  );
}

export default Tarea;
