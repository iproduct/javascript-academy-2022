import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = () => {
    let {postId} = useParams();
    // useEffect(() => {
    //   return () => {
    //     BlogsApiClient.fetchById(postId)
    //   };
    // }, [postId])
    return (
        <div className="PostDetail-card-wrapper col s12 m12">
            <div className="PostDetail-card card hoverable">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="PostDetail-image activator responsive-img" src="/images/office.jpg" alt="Blog" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Post ID: {postId}<i className="material-icons right">more_vert</i></span>
                </div>
                {/* <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{post.title}<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">{post.tags.join(', ')}</a></p>
                </div> */}
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Post ID: {postId}<i className="material-icons right">close</i></span>
                </div>
            </div>
        </div>
    )
}

PostDetail.propTypes = {}

export default PostDetail