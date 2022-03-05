
import './App.css';
import { useState } from "react";
import TodoList from './components/TodoList';
import MOCK_TODOS from "./model/mock-todos";
import TodoInput from './components/TodoInput';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);
  function createTodo(todo) {
    setTodos([...todos, todo])
  }
  function deleteTodo(todo) {
    setTodos(todos.filter(td => td.id !== todo.id))
  }
  function updateTodo(todo) {
    setTodos(todos.map(td => td.id === todo.id ? todo : td))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React TODOs Demo</h1>
        <TodoInput onSubmitTodo={createTodo} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} onStatusChanged={updateTodo} />
      </header>
    </div>
  );
}

export default App;
