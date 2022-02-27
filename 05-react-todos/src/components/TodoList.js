import { TodoStatus } from "../model/todo-model";
import './TodoList.css';

const TodoList = ({todos, ...rest}) => {
    return (
        <ul className="TodoList-items">
            {todos.map(todo => (<li key={todo.id}>{todo.id}: {todo.text} - {TodoStatus[todo.status]}</li>))}
        </ul>
    );
}

export default TodoList;