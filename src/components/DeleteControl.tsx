import { DeleteControlProps } from "../interfaces/interfaces";

export const DeleteControl: React.FC<DeleteControlProps> = ({clearCompletedTasks}) => {

  const handleDelete = () => {
    const confirmDelete = window.confirm("¿Está seguro de que desea eliminar las tareas completadas?");
    
    if (confirmDelete) {
      clearCompletedTasks();
      alert("Tareas completadas eliminadas");
    } else {
      alert("Eliminación cancelada");
    }
  };
  
  return (
    <button onClick={handleDelete} className="btn btn--delete">Borrar tareas</button>
  );
};
