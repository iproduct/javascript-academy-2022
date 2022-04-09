import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoForm from '../components/todo-form';

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (todoText) => {
    dispatch(addTodo(todoText));
  }
});

const DispatchableTodoForm = connect(
  undefined,
  mapDispatchToProps
)(TodoForm);

export default DispatchableTodoForm;