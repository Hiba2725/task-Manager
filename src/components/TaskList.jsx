import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleStatus, deleteTask }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-500 text-lg">
        No tasks found. Start by adding one!
      </p>
    );
  }

  return (
    <div className="mt-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">
        Your Tasks
      </h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleStatus={toggleStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
