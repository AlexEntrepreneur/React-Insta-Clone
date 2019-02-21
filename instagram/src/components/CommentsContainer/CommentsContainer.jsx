import React, { Component } from 'react';
import styled from 'styled-components';

const Comments = styled.div`
  padding: 0 1.5rem;
  margin-bottom: .8rem;
`;

const Comment = styled.div`
  margin-bottom: .5rem;

  & span {
    font-weight: bold;
  }
`;

class CommentsContainer extends Component {
  render() {
    return (
      <Comments>
          {
            this.props.comments.map((comment, index) => {
              return <Comment key={index}><span>{ comment.username } </span>{ comment.text }</Comment>
            })
          }
      </Comments>
    );
  }
}

export default CommentsContainer;
