import React, { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
      setIsModalOpen(false); // Close modal after adding task
    }
  };

  return (
    <>
      {/* Always visible input field */}
      <form onSubmit={handleSubmit} className="flex items-center mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add your todo's"
          className="flex-1 p-3 border border-gray-300 rounded-lg"
        />
       <button
    type="submit"
    className="px-4 py-3 bg-[#033487] hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 shadow-md transition duration-200 ml-2 hidden md:flex"
  >
    <span className="w-6 h-6 flex items-center justify-center">
      <img src="/images/plus.png" alt="Add Task" className="w-5 h-5" />
    </span>
    Add Task
  </button>

  {/* Button for Small Screens - Opens Modal */}
  <button
    type="button"
    onClick={() => setIsModalOpen(true)}
    className="px-4 py-3 bg-[#033487] hover:bg-blue-800 text-white rounded-lg flex items-center gap-2 shadow-md transition duration-200 ml-2 md:hidden"
  >
    <span className="w-6 h-6 flex items-center justify-center">
      <img src="/images/plus.png" alt="Add Task" className="w-5 h-5" />
    </span>
    
  </button>
      </form>

     

      {/* Modal for Small Screens */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white rounded-lg p-5 w-full max-w-lg mx-5 shadow-lg">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Add your todo's</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✖
              </button>
            </div>

            {/* Textarea for Small Screens */}
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="✏️ Write your todo..."
              className="w-full p-3 border border-gray-300 rounded-lg h-24"
            ></textarea>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full mt-3 bg-[#033487] hover:bg-blue-800 text-white py-2 rounded-lg"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoForm;
