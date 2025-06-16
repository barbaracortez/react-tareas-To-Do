import Tarea from "./Tarea";

function ListaDeTareas ({ lista, onBorrar}) {
    return (
        <div className="lista-tareas">
            {lista.map((t, i)=>(
               <Tarea key={i} texto={t} onBorrar={()=> onBorrar(i)} />
            ))}
        </div>
    );
}

export default ListaDeTareas;