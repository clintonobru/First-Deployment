import React, { useState, useEffect } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState(() => {
    // Load from local storage when the app starts
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      const newTodos = [...todos, text];
      setTodos(newTodos);
      setText('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  useEffect(() => {
    // Save to local storage anytime todos change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your To-Do List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add</button>

      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{' '}
            <button onClick={() => deleteTodo(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoApp;
