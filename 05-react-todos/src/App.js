import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React TODOs Demo</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
