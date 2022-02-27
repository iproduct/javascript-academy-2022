
import './App.css';
import { useState } from "react";
import TodoList from './components/TodoList';
import MOCK_TODOS from "./model/mock-todos";

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React TODOs Demo</h1>
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
