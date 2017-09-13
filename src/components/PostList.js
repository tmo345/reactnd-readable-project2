// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Map } from 'immutable';

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`


export const PostList = (props) => {
  const { posts } = props;
  return (
    <div>
      <PostListElement>
        {posts.allIds.map((postId) => {
          return (
            <li key={posts.byId[postId]['id']}>
              <div>
              <Link to={`post/${posts.byId[postId]['id']}`}>
                {posts.byId[postId]['title']}
              </Link>
              <div>
                Votes: {posts.byId[postId]['voteScore']}
              </div>
              </div>
            </li>

          );
        })}
      </PostListElement>
    </div>
  )

}
