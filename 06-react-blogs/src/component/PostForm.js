
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DEFAULT_AUTOR_ID } from '../model/post-model';
import './PostForm.css';

export default class PostForm extends Component {
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="id" type="text" disabled value={this.state.id}/>
                        <label for="id">ID</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="title" type="text" class="validate" value={this.state.title} onChange={this.handleInputChange}/>
                        <label for="title">Title</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea id="content" class="materialize-textarea" value={this.state.content} onChange={this.handleInputChange}></textarea>
                        <label for="content">content</label>
                    </div>
                    <label for="email">Email</label>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="tags" type="text" class="validate" value={this.state.tags} onChange={this.handleInputChange}/>
                        <label for="tags">Tags</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="imageUrl" type="url" class="validate" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                        <label for="imageUrl">Blog Image URL</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <label>
                            <label>
                                <input type="checkbox" checked={this.state.active} onChange={this.handleInputChange} />
                                <span>Is Active</span>
                            </label>
                        </label>
                    </div>
                </div>
                <div className='PostForm-button-panel'>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                    <button class="btn waves-effect waves-light #ff1744 red accent-3" type="submit" name="action">Reset
                        <i class="material-icons right">cancel</i>
                    </button>
                </div>
            </form>
        )
    }
}
