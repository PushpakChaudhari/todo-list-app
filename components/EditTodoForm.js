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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 md:hidden">
      <div className="bg-white rounded-lg p-5 w-full max-w-lg mx-5 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Edit your Todo</h2>
          <button onClick={onCancel} className="text-gray-500 hover:text-black">
            ✖
          </button>
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Edit your todo..."
          />

          {/* Buttons */}
          <button
            type="submit"
            className="w-full mt-3 bg-[#033487] hover:bg-blue-800 text-white py-2 rounded-lg"
          >
            Update
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="w-full mt-2 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTodoForm;
