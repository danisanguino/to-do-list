import React from 'react';
import { TaskTableProps } from '../interfaces/interfaces';


export const TaskTable: React.FC<TaskTableProps> = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRow = (doneValue: boolean) => { 
    return tasks
      .filter(e => e.done === doneValue)
      .map(e => (
        <div key={e.name} className={`section__task ${doneValue ? "section__task--done" : 'section__task'}`}>
          <label className="custom-checkbox">
            <input 
              type="checkbox"
              checked={e.done}
              onChange={() => toggleTask(e.name)}
            />
            <span className="checkmark"></span>
          </label>
          <span>{e.name}</span>
        </div>
      ));
  };

  return (
    <>
      {taskTableRow(showCompleted)}
    </>
  );
};
