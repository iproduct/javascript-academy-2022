import './TodoItem.css';

import React from 'react';
import PropTypes from 'prop-types';
import { TodoStatus } from '../model/todo-model';

export const TodoItem = ({ todo, onDeleteTodo, onStatusChanged }) => {
    function handleChangeStatus(newStatus) {
        const newTodo = { ...todo, status: newStatus };
        onStatusChanged(newTodo);
    }
    function handleDelete() {
        onDeleteTodo(todo);
    }
    return (
        <div className='TodoItem'>
            <span className='TodoItem-id'>
                {todo.id}
            </span>
            {todo.text}
            <span className='TodoItem-right'>
                <span className='TodoItem-status'>{TodoStatus[todo.status]}</span>
            </span>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        status: PropTypes.number
    }).isRequired,
    onSubmitTodo: PropTypes.func.isRequired,
    onStatusChanged: PropTypes.func.isRequired
}
