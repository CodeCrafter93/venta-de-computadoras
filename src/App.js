import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  // Estado para manejar las tareas
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para actualizar el estado de una tarea
  const updateTaskStatus = (id, newStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Gestión de backlog</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
