import { ALL_STATUSES } from "../model/todo-model";
import { TodoItem } from "./TodoItem";
import './TodoList.css';

const TodoList = ({ todos, filter, ...rest }) => {
    return (
        <div className="TodoList-items">
            {
                todos.filter(todo => todo.status === filter || filter === ALL_STATUSES)
                    .map(todo => (<TodoItem key={todo.id} todo={todo} {...rest} />))
            }
        </div>
    );
}

export default TodoList;