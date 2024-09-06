import React from 'react';
import Task from './Task';

function TaskList({ tasks, updateTaskStatus, deleteTask }) {
  return (
    <div>
      <h2>Backlog de tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
