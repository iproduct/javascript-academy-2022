import React from 'react'
import PropTypes from 'prop-types'

const Post = ({post}) => {
  return (
    <div className="card col s12 m4">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{post.title}<i className="material-icons right">more_vert</i></span>
      <p><a href="#">{post.tags.join(', ')}</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  )
}

Post.propTypes = {}

export default Post