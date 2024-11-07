import { useEffect, useState } from 'react';
import './app.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { DeleteControl } from './components/DeleteControl';
import { Task } from './interfaces/interfaces';
import { createTask, toggleTask, clearCompletedTasks } from './utils/functions';



function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
    
  }, [tasks])

  return (
    <>
      <header>
      <TaskCreator createTask={createTask} tasks={tasks} setTasks={setTasks} />
      </header>
      
      <section>
        <div className='section__column'>
          <h2>Por hacer</h2>
          <TaskTable 
            tasks={tasks} 
            toggleTask={(taskName) => toggleTask(taskName, tasks, setTasks)} 
            showCompleted={false} 
          />      
        </div>

        <div className='section__column'>
          <h2>Hechas</h2>
          <TaskTable 
            tasks={tasks} 
            toggleTask={(taskName) => toggleTask(taskName, tasks, setTasks)} 
            showCompleted={true} 
          />
          <DeleteControl 
            clearCompletedTasks={() => clearCompletedTasks(tasks, setTasks)} 
          />
        </div>
        
      </section>
    </>
  )
}

export default App
