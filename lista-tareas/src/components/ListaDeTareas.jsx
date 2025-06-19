import Tarea from "./Tarea";

function ListaDeTareas ({ lista, onBorrar, onAlternar}) {
    return (
        <ul className="lista-tareas">
            {lista.filter((t)=> t && typeof t.texto === "string")
            .map((t, index)=>(
               <Tarea 
                    key={index} 
                    texto={t.texto} 
                    completada={t.completada}
                    onBorrar={()=>onBorrar(index)}
                    onAlternar={()=>onAlternar(index)}
                    onEditar={(nuevoTexto) => {
                        const listaActulizada = [...lista];
                        listaActulizada[index].texto = nuevoTexto
                        onBorrar(index);
                        listaActulizada.splice(index, 0 , {
                            texto: nuevoTexto,
                            completada: t.completada,
                        });
                        onAlternar(index);
                        }}
                />
            ))}
        </ul>
    );
}

export default ListaDeTareas;