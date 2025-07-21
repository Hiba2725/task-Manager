import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (task) => setTasks([...tasks, task]);

  const toggleStatus = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filteredTasks = tasks.filter(task => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'completed' && task.completed) ||
      (filter === 'pending' && !task.completed);
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // flex items-center justify-center

  return (
    <div className="min-h-screen  bg-gray-100 p-4">  
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Task Manager</h1>
        <TaskForm addTask={addTask} />
        <div className="flex justify-between items-center mt-4">
          <input
            type="text"
            placeholder="Search tasks..."
            className="border p-2 rounded w-1/2"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 rounded"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <TaskList tasks={filteredTasks} toggleStatus={toggleStatus} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
