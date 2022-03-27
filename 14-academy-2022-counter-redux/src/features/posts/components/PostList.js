import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts, selectErrors } from '../postsSlice';
import './PostList.css';

export const CARDS = 0;
export const COLLECTION = 1;

export const Role = ['CARDS', 'COLLECTION'];

const PostList = ({ render, mode, ...rest }) => {
    const posts = useSelector(selectAllPosts);
    const errors = useSelector(selectErrors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className={mode === COLLECTION ? "PostList-items collection" : "PostList-items"}>
            {
                posts
                    // .filter(post => post.status === filter || filter === ALL_STATUSES)
                    .map(post => render(post, rest))
            }
        </div>
    );
}

PostList.propTypes = {
    mode: PropTypes.number,
    rest: PropTypes.object
}

export default PostList;