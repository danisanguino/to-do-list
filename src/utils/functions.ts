import { Task } from "../interfaces/interfaces";

export const createTask = (
  taskName: string,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
) => {
  if (!tasks.find((e: Task) => e.name === taskName)) {
    setTasks([...tasks, { name: taskName, done: false }]);
  }
};

export const toggleTask = (taskName: string, setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
  setTasks(prevTasks => 
    prevTasks.map(e => {
      if (e.name === taskName) {
        return { ...e, done: !e.done };
      } 
      return e;
    })
  );
};

export const clearCompletedTasks = (tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => {
  setTasks(tasks.filter(e => !e.done));
};

