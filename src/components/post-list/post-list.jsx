import React from 'react';
import './post-list.sass';
import { connect } from 'react-redux';
import { selectPosts } from "../top-bar/selectors";

const PostList = ({ posts }) => {

  return <div className="container">
    <div className="content-container">
      <ul>
        { posts && posts.map(post => (<li>{post.title}</li>))}
      </ul>
    </div>
  </div>
};

const mapStateToProps = state => ({
  posts: selectPosts(state),
});

export default connect(mapStateToProps)(PostList)
