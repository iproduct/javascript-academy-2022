import { TodoItem } from "./TodoItem";
import './TodoList.css';

const TodoList = ({todos, ...rest}) => {
    return (
        <div className="TodoList-items">
            {todos.map(todo => (<TodoItem key={todo.id} todo={todo} {...rest} />))}
        </div>
    );
}

export default TodoList;