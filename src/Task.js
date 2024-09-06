import React from 'react';

function Task({ task, updateTaskStatus, deleteTask }) {
  const handleStatusChange = (e) => {
    updateTaskStatus(task.id, e.target.value);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <label>Estado:</label>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="Pendiente">Pendiente</option>
        <option value="En progreso">En progreso</option>
        <option value="Completado">Completado</option>
      </select>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}

export default Task;
