import React, { Component } from 'react';
import Post from './Post.js';
import './Posts.css';

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
            />
          )
        }
      </div>
    );
  }
}

export default PostsContainer;
