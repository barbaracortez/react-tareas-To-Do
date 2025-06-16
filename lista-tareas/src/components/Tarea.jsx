function Tarea ({ texto, onBorrar}) {
    return (
      <div className="tarea">
        <span>{texto}</span>
        <button onClick={onBorrar}>❌</button>
      </div>
    );
}

export default Tarea;