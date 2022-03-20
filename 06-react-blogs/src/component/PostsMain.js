import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';
import { TabContainer } from './TabContainer';
import { TabPanel } from './TabPanel';
import UserForm from './UserForm';
import PostForm from './PostForm';
import './PostsMain.css'
import { Outlet } from 'react-router-dom';
// import M from 'materialize-css/dist/js/materialize';

class PostsMain extends Component {
    // componentDidMount() {
    //     const tabElem = document.querySelector(".tabs");
    //     console.log(">>>>", tabElem);
    //     M.Tabs.init(tabElem);
    // }
    render() {
        return (
            <div className="section">
                <div className="PostMain row">
                    <PostList posts={this.props.posts} className="col s4" />
                    <Outlet />
                </div>
            </div>
        )
    }
}


PostsMain.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        imageUrl: PropTypes.string.isRequired,
        authorId: PropTypes.number.isRequired,
        active: PropTypes.bool.isRequired
    }))
}

export default PostsMain