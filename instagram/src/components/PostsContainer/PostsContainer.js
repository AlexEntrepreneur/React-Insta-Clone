import React, { Component } from 'react';
import Post from './Post.js';

class PostsContainer extends Component {
  render() {
    return (
      <div className="posts-container">
        {
          this.props.posts.map((postData, index) => <Post key={index} data={postData}/>)
        }
      </div>
    );
  }
}

export default PostsContainer;
