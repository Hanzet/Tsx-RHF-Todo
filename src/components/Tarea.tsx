type Tarea = { // Type Alias Tarea: Define un tipo para las props que recibirá el componente Tarea. Este tipo asegura que el componente recibirá:
    tarea: string // tarea: una cadena de texto que representa el nombre de la tarea.
    borrarTarea: () => void // borrarTarea: una función sin parámetros que se ejecutará al borrar la tarea.
}

const Tarea = ({tarea, borrarTarea}: Tarea) => { // Componente Tarea: Es un componente funcional que recibe tarea y borrarTarea como props.
    return (
        <div className="task">
            <span>{tarea}</span>
            <button onClick={borrarTarea}>Borrar Tarea</button>
        </div>
        // tarea se muestra dentro de un span.
        // button usa onClick={borrarTarea}, lo que significa que, al hacer clic, llama a la función borrarTarea.
    )
}

export default Tarea // Exportación: Exporta el componente Tarea para que otros archivos puedan importarlo y utilizarlo.