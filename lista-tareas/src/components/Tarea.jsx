function Tarea ({ texto, onBorrar , completada, onAlternar}) {
    return (
      <li>
        <span
          style={{
            textDecoration: completada ? "line-through" : "none",
            cursor: "pointer", marginBottom: "10px",
          }}
          onClick={onAlternar}
        >
        {texto}
        </span>
        <button onClick={onBorrar} style={{ marginLeft:"10px"}}>❌</button>
      </li>
    );
}

export default Tarea;