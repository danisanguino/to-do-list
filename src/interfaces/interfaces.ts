export interface Task {
  name: string;
  done: boolean;
}

export interface TaskTableProps {
  tasks: Task[];
  toggleTask: (taskName: string) => void;
  showCompleted: boolean;
}

export interface DeleteControlProps {
  clearCompletedTasks: () => void;
}

export interface TaskCreatorProps {
  createTask: (taskName: string, tasks: Task[], setTasks: React.Dispatch<React.SetStateAction<Task[]>>) => void;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}