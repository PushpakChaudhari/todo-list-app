import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import EditTodoForm from '../components/EditTodoForm';

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // Load todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    setEditingTodo(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
      {/* Logo and Header */}
      <div className="w-full bg-white p-3 pb-7 ">
        <img
          src="/images/icone.png" // Ensure the path starts with a /
          alt="Logo"
          className="mx-auto items-center py-8 "
        />
      </div>

      {/* Input Field and Button */}
      <div className="w-full max-w-screen-lg px-3 mb-8 relative -mt-6">

    <TodoForm onAdd={addTodo} />
  </div>

      {/* Edit Todo Form */}
      {editingTodo && (
        <EditTodoForm
          todo={editingTodo}
          onUpdate={updateTodo}
          onCancel={() => setEditingTodo(null)}
        />
      )}

      {/* Todo List */}
      <div className="w-full max-w-screen-lg px-14">
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
};

export default HomePage;
