function Tarea ({ texto, borrar}) {
    return (
      <li>
        {texto} <button onClick={borrar}>❌</button>
      </li>
    );
}

export default Tarea;