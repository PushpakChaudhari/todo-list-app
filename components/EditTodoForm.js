import React, { useState } from 'react';

const EditTodoForm = ({ todo, onUpdate, onCancel }) => {
  const [text, setText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onUpdate(todo.id, text);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4 mt-12 ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r"
      >
        Update
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="px-4 py-2 bg-gray-500 text-white rounded-r ml-2"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditTodoForm;
