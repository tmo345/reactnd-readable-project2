import React from 'react';
import styled from 'styled-components';
import { convertToList } from '../../utils/helpers';
import PostCardDisplay from '../post-card/PostCardDisplay';

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
  padding-left: 0;
`;
const NoPostsMessage = styled.p`
  margin-top: 20px !important;
  font-size: 1.15rem;
`;

const PostList = props => {
  const postsArray = convertToList(props.posts);

  const postsByCategory =
    props.activeCategory === 'all'
      ? postsArray
      : postsArray.filter(post => post.category === props.activeCategory);

  return (
    <div>
      <PostListElement>
        {postsByCategory.length === 0 ? (
          <NoPostsMessage>
            Sorry there are no posts in this category.
          </NoPostsMessage>
        ) : (
          postsByCategory.map(post => {
            return <PostCardDisplay key={post.id} post={post} history={props.history} />;
          })
        )}
      </PostListElement>
    </div>
  );
};

export default PostList;
