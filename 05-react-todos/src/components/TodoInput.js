import { Component } from 'react';
import { Todo } from '../model/todo-model';

class TodoInput extends Component {
    static propTypes = {
        onSubmitTodo: this.propTypes.func.isRequired
    }
    
    state = { text: '' }

    render() {
        return (
            <form className="TodoInput-form" onSubmit={this.handleSubmit}>
                <input placeholder="What to do next?" type="text" id="text" name="text"
                    value={this.state.text} onChange={this.handleStateChanged} />
                <button type="submit">Submit</button>
            </form>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const text = this.state.text.trim();
        if (text !== '') {
            this.props.onSubmitTodo(new Todo(text))
            this.setState({ text: '' })
        }
    }

    handleTextChanged = (event) => {
        this.setState({ text: event.target.value })
    }
}

export default TodoInput;