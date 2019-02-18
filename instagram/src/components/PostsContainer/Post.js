import React, { Component } from 'react';
import CommentsContainer from '../CommentsContainer/CommentsContainer.js';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    const { username, userAvatar, postContent, comments } = this.props;
    return (
      <article className="card post-card">
        <header>
          <div className="post-card-avatar">
            <img src={userAvatar} alt={username}/>
          </div>
          <h3>{ username }</h3>
        </header>
        <div className="post-img-container">
          <img src={postContent} alt={`posted by ${username}`} />
        </div>
        <div className="post-btns-container">
          <button>Like</button>
          <button>Comment</button>
        </div>
        <CommentsContainer data={comments}/>
      </article>
    );
  }
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  postContent: PropTypes.string.isRequired,
  datePosted: PropTypes.string.isRequired,
  comments: PropTypes.array,
};

export default Post;
