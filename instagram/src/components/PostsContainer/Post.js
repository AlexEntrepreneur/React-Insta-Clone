import React, { Component } from 'react';
import CommentsContainer from '../CommentsContainer/CommentsContainer.js';
import { arrayOf, string, number, shape } from 'prop-types';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      myComment: ''
    }
  }

  onCommentSubmit = (event) => {
    event.preventDefault();
    const myComment = { text: this.state.myComment }
    this.props.addComment(this.props.postId, myComment);
    this.clearCommentInput();
  }

  onCommentInputChange = (event) => {
    this.setState({ myComment: event.target.value });
  }

  clearCommentInput = () => {
    this.setState({ myComment: '' });
  }

  render() {
    const { username, userAvatar, postContent } = this.props;
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
        <CommentsContainer
          comments={this.state.comments}
        />
        <form
          className="comment-form"
          method="POST"
          onSubmit={event => this.onCommentSubmit(event)} >
          <textarea
            value={this.state.myComment}
            onChange={event => this.onCommentInputChange(event)}
            className="comment-box full-width"
            type="text"
            placeholder="Add a comment..." />
          <button type="submit" disabled={false}>Post</button>
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
