import { useEffect, useState } from 'react';
import './app.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { DeleteControl } from './components/DeleteControl';
import { Task } from './interfaces/interfaces';

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (taskName: string) => {
    if (!tasks.find((e) => e.name === taskName)) {
      setTasks([...tasks, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (taskName: string) => {
    setTasks(prevTasks => 
      prevTasks.map(e => {
        if (e.name === taskName) {
          return { ...e, done: !e.done };
        } 
        return e;
      })
    );
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(e => !e.done));
  };

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
        <TaskCreator createTask={createTask}/>
      </header>
      
      <section>
        <div className='section__column'>
          <h2>Por hacer</h2>
          <TaskTable tasks={tasks} toggleTask={toggleTask} showCompleted={false}/>     
        </div>

        <div className='section__column'>
          <h2>Hechas</h2>
          <TaskTable tasks={tasks} toggleTask={toggleTask} showCompleted={true}/>
          <DeleteControl clearCompletedTasks={clearCompletedTasks}/>
        </div>
        
      </section>
    </>
  )
}

export default App
