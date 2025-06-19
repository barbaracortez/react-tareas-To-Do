function Tarea ({ texto, onBorrar , completada, onAlternar}) {
    return (
      <li 
      className={`tarea ${completada ? "completada " : ""}`}
      onClick={onAlternar}> 
      {texto}
        <button onClick={(e) => {
        e.stopPropagation();
        onBorrar();
    }}>❌</button>
      </li>
    );
}

export default Tarea;