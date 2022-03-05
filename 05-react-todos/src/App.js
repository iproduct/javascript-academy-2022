
import './App.css';
import { useState } from "react";
import TodoList from './components/TodoList';
import MOCK_TODOS from "./model/mock-todos";
import TodoInput from './components/TodoInput';
import { ALL_STATUSES } from './model/todo-model';
import TodoFilter from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useState(MOCK_TODOS);
  const [filter, setFilter] = useState(ALL_STATUSES);
  function createTodo(todo) {
    setTodos([...todos, todo])
  }
  function deleteTodo(todo) {
    setTodos(todos.filter(td => td.id !== todo.id))
  }
  function updateTodo(todo) {
    setTodos(todos.map(td => td.id === todo.id ? todo : td))
  }  
  function updateFilter(filter) {
    setFilter(filter)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React TODOs Demo</h1>
        <TodoInput onSubmitTodo={createTodo}/>
        <TodoFilter filter={filter} onFilterChange={updateFilter} />
        <TodoList todos={todos} filter={filter} onDeleteTodo={deleteTodo} onStatusChanged={updateTodo} />
      </header>
    </div>
  );
}

export default App;
