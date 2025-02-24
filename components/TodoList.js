import React from 'react';
import TodoItem from './Todoitem';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <div className="mt-12 ">
       {todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 ">
          <img src="/images/nodata.png" alt="No tasks" className="w-20 h-20 mb-4" />
          <p className="text-gray-600 text-lg">You have no task listed.</p>
        </div>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        ))
      )}
    </div>
  );
};

export default TodoList;
