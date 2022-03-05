import { Component } from 'react';
import { Todo } from '../model/todo-model';
import PropTypes from 'prop-types';

class TodoInput extends Component {
    static propTypes = {
        onSubmitTodo: PropTypes.func.isRequired
    }

    state = { text: '' }

    constructor(props) {
        super(props);
        this.handleTextReset = this.handleTextReset.bind(this);
    }

    render() {
        return (
            <form className="TodoInput-form" onSubmit={this.handleSubmit}>
                <input placeholder="What to do next?" type="text" id="text" name="text"
                    value={this.state.text} onChange={this.handleTextChanged} />
                <button className="button button5" type="submit">Submit</button>
                <button className="button button3" type="reset" onClick={this.handleTextReset}>Reset</button>
            </form>
        );
    }

    handleTextReset() {
        this.setState({ text: '' });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const text = this.state.text.trim();
        if (text !== '') {
            this.props.onSubmitTodo(new Todo(text))
            this.setState({ text: '' });
        }
    }

    handleTextChanged = (event) => {
        this.setState({ text: event.target.value })
    }
}

export default TodoInput;