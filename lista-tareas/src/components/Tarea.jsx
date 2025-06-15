function Tarea ({ texto, onBorrar}) {
    return (
      <li>
        {texto} <button onClick={onBorrar}>❌</button>
      </li>
    );
}

export default Tarea;