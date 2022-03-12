import React, { Component, useEffect, useState } from 'react';
import BlogsClient from '../service/blogs-api-client';
import PropTypes from 'prop-types';
import PostList from './PostList';
import { TabContainer } from './TabContainer';
import { TabPanel } from './TabPanel';

class Main extends Component {
    state = {
        blogs: [],
        messages: undefined,
        errors: undefined
    }

    clearMessagesAndErors = () => {
        this.setState({messages: undefined, errors: undefined});
    }

    componentDidMount() {
        BlogsClient.fetchPosts()
            .then(results => {
                this.setState({blogs:results})
                this.clearMessagesAndErors()
            })
            .catch(err => {
                this.setState({erors: err});
            });
    }

    render() {
        return (
            <div className="container">
                <div className="section">
                    <div className="messages">{this.state.messages}</div>
                    <div className="errors">{this.state.errors}</div>
                    <div className="row">
                        <TabContainer>
                            <TabPanel id="results" title="All Blogs"> <PostList posts={this.state.blogs} /></TabPanel>
                            <TabPanel id="favourites" title="Favourite Blogs">Test 2 content ...</TabPanel>
                            <TabPanel id="settings" title="Blog Settings">Blog settings here ...</TabPanel>
                        </TabContainer>
                    </div>
                </div>
            </div>
        )
    }
}

Main.propTypes = {}

export default Main