import React, { useState } from "react";
import { Plus } from "lucide-react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4  ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your todo's"
        className="flex-1 p-3 border border-gray-300 rounded-lg "
      />
      <button
        type="submit"
        className="px-4 py-3 bg-[#033487] hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 shadow-md transition duration-200 ml-2"
      >
        <span className="w-6 h-6 flex items-center justify-center border border-white rounded-full">
          <Plus size={14} />
        </span>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
