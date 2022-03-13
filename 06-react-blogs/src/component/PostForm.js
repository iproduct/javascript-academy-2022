
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DEFAULT_AUTOR_ID } from '../model/post-model';
import './PostForm.css';

export default  class PostForm extends Component {
    //   static propTypes = {second: third}
    state = {
        id: '',
        title: '',
        content: '',
        tags: '',
        imageUrl: '',
        authorId: DEFAULT_AUTOR_ID,
        active: true
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;

        console.log(`Setting field: ${name} = ${value}`);
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div  className="row">
                    <div  className="input-field col s12">
                        <input id="id" type="text" disabled value={this.state.id}/>
                        <label htmlFor="id">ID</label>
                    </div>
                </div>
                <div  className="row">
                    <div  className="input-field col s12">
                        <input id="title" type="text"  className="validate" value={this.state.title} onChange={this.handleInputChange}/>
                        <label htmlFor="title">Title</label>
                        <span  className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div  className="row">
                    <div  className="input-field col s12">
                        <textarea id="content"  className="materialize-textarea" value={this.state.content} onChange={this.handleInputChange}></textarea>
                        <label htmlFor="content">content</label>
                    </div>
                    <label htmlFor="email">Email</label>
                </div>
                <div  className="row">
                    <div  className="input-field col s12">
                        <input id="tags" type="text"  className="validate" value={this.state.tags} onChange={this.handleInputChange}/>
                        <label htmlFor="tags">Tags</label>
                        <span  className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div  className="row">
                    <div  className="input-field col s12">
                        <input id="imageUrl" type="url"  className="validate" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                        <label htmlFor="imageUrl">Blog Image URL</label>
                        <span  className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div  className="row">
                    <div  className="input-field col s12">
                        <label>
                            <label>
                                <input id="active" type="checkbox" checked={this.state.active} onChange={this.handleInputChange} />
                                <span>Is Active</span>
                            </label>
                        </label>
                    </div>
                </div>
                <div  className='PostForm-button-panel'>
                    <button  className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i  className="material-icons right">send</i>
                    </button>
                    <button  className="btn waves-effect waves-light #ff1744 red accent-3" type="submit" name="action">Reset
                        <i  className="material-icons right">cancel</i>
                    </button>
                </div>
            </form>
        )
    }
}
