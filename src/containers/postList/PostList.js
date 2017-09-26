import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`;

export const PostList = props => {
  const posts = props.posts;
  if (posts.length === 0) {
    return <p>Sorry there are no posts in this category.</p>;
  }
  return (
    <div>
      <PostListElement>
        {posts.map(post => {
          return (
            <li key={post.id}>
              <div>
                <Link to={`${post.category}/${post.id}`}>{post.title}</Link>
                <div>Votes: {post.voteScore}</div>
                <div>Date: {post.timestamp}</div>
              </div>
            </li>
          );
        })}
      </PostListElement>
    </div>
  );
};
