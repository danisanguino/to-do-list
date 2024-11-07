// TaskCreator.tsx
import { useState } from "react";
import { TaskCreatorProps } from '../interfaces/interfaces';

export const TaskCreator: React.FC<TaskCreatorProps> = ({ createTask, tasks, setTasks }) => {

  const [addTask, setAddTask] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddTask(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (addTask === "") {
      alert("Por favor, inserta una tarea.");
      return; 
    }
    createTask(addTask, tasks, setTasks); 
    setAddTask("");
  };
  
  return (
    <>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit} className="input-task">
          <input
            type="text"
            placeholder="Inserta una tarea"
            value={addTask}
            onChange={handleInput}
            className="input"
          />
          <button className="btn">Insertar tarea</button>
      </form>
    </>
  );
};
