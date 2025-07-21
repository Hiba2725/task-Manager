import React from 'react';

const TaskItem = ({ task, toggleStatus, deleteTask }) => {
  const priorityStyle = {
    Low: 'bg-green-100 text-green-600',
    Medium: 'bg-yellow-100 text-yellow-600',
    High: 'bg-red-100 text-red-600',
  };

  return (
    <li className="flex justify-between items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 mb-3">
      {/* Left Section: Checkbox, Title, Priority */}
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleStatus(task.id)}
          className="w-5 h-5 mt-1 accent-green-600 cursor-pointer"
        />
        <div>
          <p
            className={`text-base font-semibold ${
              task.completed ? 'line-through text-gray-400' : 'text-gray-800'
            }`}
          >
            {task.title}
          </p>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full font-medium ${priorityStyle[task.priority]}`}
          >
            {task.priority} Priority
          </span>
        </div>
      </div>

      {/* Right Section: Delete Button */}
      <button
        onClick={() => deleteTask(task.id)}
        className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-200 shadow-sm"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
