import React, { Component } from 'react';
import styled from 'styled-components';
import fakeData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import Header from '../Header/Header';
import { TextButton } from '../~reusables/Button';

const LogOutBtn = styled(TextButton)`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  font-size: 1.6rem;
  opacity: .8;
`;

class PostsPage extends Component {
  constructor(props) {
    super(props);

    this.prefix = props.appPrefix;
    this.storedPostsData = JSON.parse(localStorage.getItem(this.prefix + '_posts'));
    this.storedUserData = localStorage.getItem(this.prefix + '_user');

    this.state = {
      posts: this.storedPostsData || [],
      myUsername: this.storedUserData || ''
    };
  }

  componentDidMount() {
    // When there are no posts, pull posts from database
    if (this.state.posts.length === 0) {
      const dataWithIdAndDisplayKeys = fakeData.map(post => ({
        ...post,
        display: true
      }));

      this.setState({ posts: dataWithIdAndDisplayKeys });
    }

    // Save username to state from props
    if (!this.state.myUsername) {
      this.setState({ myUsername: this.props.user.username });
    }
  }

  componentDidUpdate() {
    const postsAsString = JSON.stringify(this.state.posts);
    localStorage.setItem(this.prefix + '_posts', postsAsString);
  }

  searchPosts = searchKeyword => {
    window.scrollTo(0, 0); // Make filtered posts appear at the top
    const posts = this.state.posts;
    const filteredPostsDisplayed = posts.map(post => {
      if (post.username.includes(searchKeyword)) {
        return {
          ...post,
          display: true
        }
      }
      else {
        return {
          ...post,
          display: false
        }
      }
    });

    const allPostsDisplayed = posts.map(post => {
      return {
        ...post,
        display: true
      }
    });

    if (searchKeyword) {
      this.setState({ posts: filteredPostsDisplayed })
    }
    else {
      this.setState({ posts: allPostsDisplayed })
    }
  };

  addComment = (postId, commentObject) => {
    const updatedPostComments = this.state.posts.map(post => {
      if (post.timestamp === postId) {
          commentObject.username = this.state.myUsername;
          post.comments.push(commentObject);
          return post;
        }
        return post;
    });

    this.setState({
      posts: updatedPostComments
    });
  };

  likeUnlikePost = (postId, liked) => {
    const updatedPosts = this.state.posts.map(post => {
      if (post.timestamp === postId) {
          if (liked) {
            post.likes++;
          }
          else {
            post.likes--;
          }
          return post;
        }
        return post;
    });

    this.setState({
      posts: updatedPosts
    });
  };

  render() {
    return (
      <>
        <Header searchPostsFunction={this.searchPosts} />
        <div className="main-content-container">
          <PostsContainer
            posts={this.state.posts}
            addCommentFunction={this.addComment}
            likeUnlikePostFunction={this.likeUnlikePost}
          />
        </div>
        <LogOutBtn
          onClick={this.props.logOut}
        >
          Log Out
        </LogOutBtn>
      </>
    );
  }
}

export default PostsPage;
