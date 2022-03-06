import Post from "./Post";

const PostList = ({ posts, ...rest }) => {
    return (
        <div className="PostList-items">
            {
                posts
                    // .filter(post => post.status === filter || filter === ALL_STATUSES)
                    .map(post => (<Post key={post.id} post={post} {...rest} />))
            }
        </div>
    );
}

export default PostList;