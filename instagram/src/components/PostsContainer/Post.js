import React, { Component } from 'react';
import CommentsContainer from '../CommentsContainer/CommentsContainer.js';
import { arrayOf, string, number, shape } from 'prop-types';

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
        <form className="comment-form" method="POST">
          <textarea
            className="comment-box full-width"
            type="text"
            placeholder="Add a comment..." />
            <button type="submit" disabled={true}>Post</button>
        </form>
      </article>
    );
  }
}

Post.propTypes = {
  username: string.isRequired,
  userAvatar: string.isRequired,
  likes: number.isRequired,
  postContent: string.isRequired,
  datePosted: string.isRequired,
  comments: arrayOf(shape({
    username: string.isRequired,
    text: string.isRequired
  })),
};

export default Post;
