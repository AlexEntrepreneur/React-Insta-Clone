import React, { Component } from 'react';
import CommentsContainer from '../CommentsContainer/CommentsContainer';
import { arrayOf, string, number, shape } from 'prop-types';
import './Post.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      myComment: '',
      liked: false
    }
  }

  onCommentSubmit = (event) => {
    event.preventDefault();
    const myComment = { username: '', text: this.state.myComment }
    this.props.addComment(this.props.postId, myComment);
    this.clearCommentInput();
  }

  onCommentInputChange = (event) => {
    this.setState({ myComment: event.target.value });
  }

  onLikeButtonClick = (liked) => {
    this.setState(currentState => {
      if (liked) {
        return { liked: false };
      }
      else {
        return { liked: true };
      }
    }, () => {
      return this.props.likeUnlikePost(this.props.postId, this.state.liked);
    });
  }

  clearCommentInput = () => {
    this.setState({ myComment: '' });
  }

  render() {
    const { username, userAvatar, postContent, likes } = this.props;
    return (
      <article className={`card post-card display-${this.props.display}`}>
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
          <button
            onClick={() => this.onLikeButtonClick(this.state.liked)}
            className={`liked-${this.state.liked}`}>Like</button>
          <button>Comment</button>
        </div>
        <div className="likes">
          { `${likes} likes` }
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
