
import React from 'react';
import PropTypes from 'prop-types';
import { ALL_STATUSES } from '../model/todo-model';

const TodoFilter = ({filter}) => {
  return (
    <select value={filter}>
        <option value={ALL_STATUSES}>All</option>
    </select>
  );
}

TodoFilter.propTypes = {};

export default TodoFilter;