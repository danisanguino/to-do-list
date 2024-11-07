import { useState } from "react";

export const TaskCreator = ({ createTask }: { createTask: (task: string) => void }) => {

  const [addTask, setAddTask] = useState<string>("")
  
  const handleInput = (event: React.ChangeEvent<HTMLInputElement> ) => {
    
      setAddTask(event.target.value)
   
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> )=> {
    event.preventDefault();
    if (addTask.trim() === "") {
      alert("Por favor, ingrese una tarea.");
      return; 
    }
    createTask(addTask);
    setAddTask("");
  };
  

  return (
    <>
      <h1> To-Do List</h1>
      <form onSubmit={handleSubmit} className="input-task">
          <input
            type='text'
            placeholder='Inserta tarea aquí'
            value={addTask}
            onChange={handleInput}
            className="input"/>
          <button className="btn">Insertar tarea</button>
      </form>
    </>
  )
}
