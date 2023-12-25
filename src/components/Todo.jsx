
import React, { useState, useEffect } from "react";

const Todo = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
      );
      const [newTodo, setNewTodo] = useState("");
    
      const handleInputChange = (e) => {
        setNewTodo(e.target.value);
      };
    
      const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
          const newTodos = [
            ...todos,
            {
              id: new Date().getTime(),
              text: newTodo,
              status: "pending",
            },
          ];
          setTodos(newTodos);
          setNewTodo("");
          localStorage.setItem("todos", JSON.stringify(newTodos));
        }
      };
    
      const handleDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      };
    
      const handleEdit = (id) => {
        console.log("Edit todo with id:", id);
      };
    
      const handleStart = (id) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, status: "in-progress" } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      };
    
      const handleComplete = (id) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? { ...todo, status: "completed" } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      };
    return (
        <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">Pending</h2>
            <ul>
              {todos
                .filter((todo) => todo.status === "pending")
                .map((todo) => (
                  <li key={todo.id} className="mb-2 flex justify-between">
                    <span>{todo.text}</span>
                    <div>
                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-green-500 ml-2"
                        onClick={() => handleStart(todo.id)}
                      >
                        Start
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">In Progress</h2>
            <ul>
              {todos
                .filter((todo) => todo.status === "in-progress")
                .map((todo) => (
                  <li key={todo.id} className="mb-2 flex justify-between">
                    <span>{todo.text}</span>
                    <div>
                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="text-green-500 ml-2"
                        onClick={() => handleComplete(todo.id)}
                      >
                        Complete
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Completed</h2>
            <ul>
              {todos
                .filter((todo) => todo.status === "completed")
                .map((todo) => (
                  <li key={todo.id} className="mb-2 flex justify-between">
                    <span>{todo.text}</span>
                    <button
                      className="text-red-500"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter new todo..."
            className="p-2 border rounded mr-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
      </div>
    );
};

export default Todo;