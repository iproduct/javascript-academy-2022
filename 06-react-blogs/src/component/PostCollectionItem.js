import React from 'react';
import PropTypes from 'prop-types';
import './PostCollectionItem.css';
import { NavLink } from 'react-router-dom';


const PostCollectionItem = ({ post }) => {
    return (
        <NavLink to={"/posts/" + post.id} className={({ isActive }) => isActive ? "active" : undefined}>
            <div className="PostCollectionItem collection-item avatar hoverable">
                <img src={post.imageUrl ? post.imageUrl : "images/office.jpg"} alt="Blog post" className="PostCollectionItem-img circle" />
                <span className="title">{post.title}</span>
                <p><a href="#">{post.tags.join(', ')}</a></p>
                <a href={"/posts/" + post.id} className="secondary-content"><i className="material-icons right">send</i></a>
            </div>
        </NavLink>
    )
}

PostCollectionItem.propTypes = {}

export default PostCollectionItem