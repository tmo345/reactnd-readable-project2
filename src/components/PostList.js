// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Map } from 'immutable';

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`

type Props = {
  posts: Map<string, *>,
}

export const PostList = (props: Props) => {
  const { posts } = props;
  return (
    <div>
      <PostListElement>
        {posts.valueSeq().map((post) => {
          return (
            <li key={post.get('id')}>
              <div>
              <Link to={`post/${post.get('id')}`}>
                {post.get('title')}
              </Link>
              <div>
                Votes: {post.get('voteScore')}
              </div>
              </div>
            </li>

          );
        })}
      </PostListElement>
    </div>
  )

}
