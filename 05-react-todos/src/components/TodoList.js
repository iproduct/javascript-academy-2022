import MOCK_TODOS from "../model/mock-todos";
import './TodoList.css';

const TodoList = () => {
    return (
        <ul className="TodoList-items">
            {MOCK_TODOS.map(todo => (<li>{todo.id}: {todo.text} - {todo.status}</li>))}
        </ul>
    );
}

export default TodoList;