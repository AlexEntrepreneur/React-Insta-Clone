import React, { Component } from 'react';
import CommentsContainer from '../CommentsContainer/CommentsContainer.js';

class Post extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="card post-card">
        <header>
          <img src={data.thumbnailUrl} alt={data.username}/>
          <h3>{ data.username }</h3>
        </header>
        <div className="post-img-container">
          <img src={data.imageUrl} alt={`posted by ${data.username}`} />
        </div>
        <div className="post-btns-container">
          <button>Like</button>
          <button>Comment</button>
        </div>
        <CommentsContainer data={data.comments}/>
      </div>
    );
  }
}

export default Post;
