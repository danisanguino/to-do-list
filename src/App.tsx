import { useEffect, useState } from 'react';
import './css/app.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { DeleteControl } from './components/DeleteControl';
import { Task } from './interfaces/interfaces';
import { clearCompletedTasks, createTask, toggleTask } from './utils/functions';


function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, [])
  

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
    
  }, [tasks])

  return (
    <>
      <header>
        <TaskCreator createTask={(taskName: string) => createTask(taskName, tasks, setTasks)} />
      </header>
      
      <section>
        <div className='section__column'>
          <h2>Por hacer</h2>
          <TaskTable tasks={tasks} toggleTask={(taskName: string) => toggleTask(taskName, setTasks)} showCompleted={false}  />     
        </div>

        <div className='section__column'>
          <h2>Hechas</h2>
          <TaskTable tasks={tasks} toggleTask={(taskName: string) => toggleTask(taskName, setTasks)} showCompleted={true} />
          <DeleteControl clearCompletedTasks={() => clearCompletedTasks(tasks, setTasks)}/>
        </div>
        
      </section>
    </>
  )
}

export default App
