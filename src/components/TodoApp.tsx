import { useForm } from "react-hook-form";
import { useState } from "react";
import ListaTareas from "./ListaTareas";

type FormValues = {
    tarea: string;
    };

    const TodoApp = () => {
    const [listaTareas, setListaTareas] = useState<string[]>([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        defaultValues: {
        tarea: "", // valor inicial para el campo 'tarea'
        },
    });

    const handleAddTask = (data: FormValues) => {
        const { tarea } = data;
        setListaTareas((tareasAnteriores) => [...tareasAnteriores, tarea]);
        reset(); // Limpia el formulario después de agregar la tarea
    };

    const handleBorrarTarea = (index: number) => {
        setListaTareas((tareas) => tareas.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1 className="font-bold p-4">Lista de tareas</h1>
                <form onSubmit={handleSubmit(handleAddTask)}>
                    <input
                        type="text"
                        {...register("tarea", { 
                            required: "La tarea es obligatoria", 
                            minLength: {
                            value: 1,
                            message: "La tarea debe tener al menos 1 caracter",
                            },
                            maxLength: {
                            value: 50,
                            message: "La tarea debe tener como maximo 50 caracteres",
                            },
                            pattern: {
                            value: /^[a-zA-Z\s]*$/,
                            message: "La tarea debe contener solo letras y espacios",
                            }
                        })}
                        placeholder="Escribe una nueva tarea"
                        className="w-full p-2 m-2 border border-gray-300 rounded"
                    />
                    {errors.tarea && <p className="text-red-500">{errors.tarea.message}</p>}
                    
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        Agregar Tarea
                    </button>
                </form>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
        </div>
    );
};

export default TodoApp;
