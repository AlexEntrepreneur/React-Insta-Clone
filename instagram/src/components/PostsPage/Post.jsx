import React, { Component } from 'react';
import styled from 'styled-components';
import CommentsContainer from '../CommentsContainer/CommentsContainer';
import { arrayOf, string, number, shape } from 'prop-types';
import { TextButton, TextButtonPrimary } from '../~reusables/Button';
import './Post.css';

const StyledPost = styled.article`
  margin-bottom: 6rem;

  /* .card  Styles */
  border: solid 1px #dbdbdb;
  border-radius: .3rem;
  background-color: white;

  & header {
    height: 6rem;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
  }

  & .post-card-avatar {
    height: 3.5rem;
    width: 3.5rem;
    border: 1px solid #dbdbdb;
    border-radius: 100%;
    margin-right: 1.5rem;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
    }
  }
`;

const PostButton = styled(TextButton)`
  padding-left: 0;
  text-align: left;

  &.liked-true {
    color: #f54d5a;
  }
`;

const CommentForm = styled.form`
  display: flex;
  padding: 2rem 1.5rem;
  border-top: 1px solid #dbdbdb;

  & textarea {
    border: none;
    background-color: unset;
    line-height: unset;
    margin: 0;
  }
`;

const Likes = styled.div`
  font-weight: bold;
  line-height: 1.8rem;
  margin-bottom: .8rem;
  padding: 0 1.5rem;
`;

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
      <StyledPost className={`display-${this.props.display}`}>
        <header>
          <div className="post-card-avatar">
            <img src={userAvatar} alt={username}/>
          </div>
          <h3>{ username }</h3>
        </header>
        <div>
          <img className="full-width" src={postContent} alt={`posted by ${username}`} />
        </div>
        <div className="post-btns-container">
          <PostButton
            onClick={() => this.onLikeButtonClick(this.state.liked)}
            className={`liked-${this.state.liked}`}>Like</PostButton>
          <PostButton>Comment</PostButton>
        </div>
        <Likes>
          { `${likes} likes` }
        </Likes>
        <CommentsContainer
          comments={this.state.comments}
        />
      <CommentForm
          method="POST"
          onSubmit={event => this.onCommentSubmit(event)} >
          <textarea
            value={this.state.myComment}
            onChange={event => this.onCommentInputChange(event)}
            className="comment-box full-width"
            type="text"
            placeholder="Add a comment..." />
          <TextButtonPrimary type="submit" disabled={false}>Post</TextButtonPrimary>
        </CommentForm>
      </StyledPost>
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
