import React, { Component } from 'react';
import styled from 'styled-components';
import Post from './Post';

const StyledPostsContainer = styled.div`
  width: 100%;
  max-width: 62%;
  margin: 0 auto;
  margin-top: 6rem;
`;

class PostsContainer extends Component {
  render() {
    return (
      <StyledPostsContainer>
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
      </StyledPostsContainer>
    );
  }
}

export default PostsContainer;
