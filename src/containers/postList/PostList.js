// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Post } from '../../types/post-types';

type Props = {
  posts: Array<Post>
};

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`;

export const PostList = (props: Props) => {
  const posts = props.posts;
  console.log('post sort', props.posts);
  if (posts.length === 0) {
    return <p>Sorry there are no posts in this category.</p>;
  }
  return (
    <div>
      <PostListElement>
        {posts.map(post => {
          console.log('yop', post);
          return (
            <li key={post.id}>
              <div>
                <Link to={`${post.categoryName}/${post.id}`}>{post.title}</Link>
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
