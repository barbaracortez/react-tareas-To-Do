function Tarea({ tarea, eliminarTarea, toggleCompletar }) {
  return (
    <div className={`tarea ${tarea.completada ? "completada" : ""}`}>
      <span onClick={toggleCompletar}>{tarea.texto}</span>
      <button onClick={eliminarTarea}>❌</button>
    </div>
  );
}

export default Tarea;
