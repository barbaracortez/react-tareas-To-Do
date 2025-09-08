import Tarea from "./Tarea";

function ListaDeTareas({ tareas, eliminarTarea, toggleCompletar }) {
  return (
    <div className="lista-tareas">
      {tareas.length === 0 ? (
        <p>No hay tareas todavía ✅</p>
      ) : (
        tareas.map((t, i) => (
          <Tarea
            key={i}
            tarea={t}
            eliminarTarea={() => eliminarTarea(i)}
            toggleCompletar={() => toggleCompletar(i)}
          />
        ))
      )}
    </div>
  );
}

export default ListaDeTareas;
