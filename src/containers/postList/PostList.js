import React from 'react';
import styled from 'styled-components';
import { Card, Segment } from 'semantic-ui-react';
import { convertToList } from '../../utils/helpers';
import PostCardDisplay from './PostCardDisplay';

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
  padding-left: 0;
`;

const PostList = props => {
  const postsArray = convertToList(props.posts);

  const postsByCategory =
    props.activeCategory === 'all'
      ? postsArray
      : postsArray.filter(post => post.category === props.activeCategory);

  if (postsByCategory.length === 0) {
    return <p>Sorry there are no posts in this category.</p>;
  }

  return (
    <div>
      <PostListElement>
        {postsByCategory.length === 0 ? (
          <p>Sorry there are no posts in this category.</p>
        ) : (
          postsByCategory.map(post => {
            return <PostCardDisplay key={post.id} post={post} />;
          })
        )}
      </PostListElement>
    </div>
  );
};

export default PostList;
