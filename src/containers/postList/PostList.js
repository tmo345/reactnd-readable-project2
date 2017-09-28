import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { convertToList } from '../../utils/helpers';

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
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
            return (
              <li key={post.id}>
                <div>
                  <Link to={`${post.category}/${post.id}`}>{post.title}</Link>
                  <div>Votes: {post.voteScore}</div>
                  <div>Posted {new Date(post.timestamp).toDateString()}</div>
                </div>
              </li>
            );
          })
        )}
      </PostListElement>
    </div>
  );
};

export default PostList;
