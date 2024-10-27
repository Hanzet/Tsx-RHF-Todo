import Tarea from "./Tarea"

type ListaTareas = { // Type Alias ListaTareas: Define el tipo de props que recibe el componente ListaTareas.
    listaTareas: string[] // listaTareas: un arreglo de strings, que representa la lista de tareas.
    borrarTarea: (index: number) => void // borrarTarea: una función que recibe un índice (el número de posición en la lista) y borra la tarea en esa posición.
}

const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareas) => { // Componente ListaTareas: Este componente funcional recibe listaTareas y borrarTarea.
    return (
        <div className="taskList">
            {
                listaTareas.map((tarea,index) => ( // .map(): itera listaTareas para crear un componente Tarea por cada tarea.
                    <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}></Tarea>
                    // key={index}: React utiliza key para identificar elementos únicos en una lista.
                    // borrarTarea={() => borrarTarea(index)}: Aquí se envuelve la llamada a borrarTarea en una función flecha para pasar index como argumento.
                ))
            }
        </div>
    )
}

export default ListaTareas // Exportación: Exporta el componente ListaTareas para ser usado en otros archivos.