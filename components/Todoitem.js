import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleEdit = () => {
    onEdit(todo.id);
    setShowMenu(false);
  };

  return (
    <div className="relative flex items-center justify-between p-2 border-b border-gray-200 bg-white rounded-lg mt-3">
      <div className="flex items-center">
      <input
  type="checkbox"
  checked={todo.completed}
  onChange={() => onToggle(todo.id)}
  className="mr-2 w-5 h-5 rounded border-2 border-gray-400 text-blue-600 focus:ring-offset-2 focus:ring-blue-500  transition duration-200 cursor-pointer"
/>

        <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className="relative">
        <button
          onClick={handleMenuClick}
          className="px-2 py-1 text-gray-600 focus:outline-none bg-gray-100"
        >
          ⋮
        </button>
        {showMenu && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded shadow-md z-50">
            <button
              onClick={handleEdit}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
