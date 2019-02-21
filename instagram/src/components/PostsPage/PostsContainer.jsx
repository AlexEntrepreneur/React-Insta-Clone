import React, { Component } from 'react';
import Post from './Post';
import './PostsContainer.css';

class PostsContainer extends Component {
  render() {
    return (
      <div className="posts-container">
        {
          this.props.posts.map((postData, index) =>
            <Post
              key={index}
              username={postData.username}
              userAvatar={postData.thumbnailUrl}
              postContent={postData.imageUrl}
              likes={postData.likes}
              datePosted={postData.timestamp}
              comments={postData.comments}
              addComment={this.props.addCommentFunction}
              likeUnlikePost={this.props.likeUnlikePostFunction}
              postId={postData.timestamp}
              display={postData.display}
            />
          )
        }
      </div>
    );
  }
}

export default PostsContainer;
