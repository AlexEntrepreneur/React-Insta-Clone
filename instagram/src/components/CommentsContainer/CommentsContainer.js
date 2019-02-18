import React, { Component } from 'react';

class CommentsContainer extends Component {
  render() {
    return (
      <div className="comments-container">
      {
        this.props.data.map((comment, index) => {
          return <div key={index} className="comment"><span><b>{ comment.username } </b></span>{ comment.text }</div>
        })
      }
      </div>
    );
  }
}

export default CommentsContainer;
