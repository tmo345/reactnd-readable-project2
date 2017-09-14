// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Post } from 'store-types';

type Props = {
  posts: {
      byId: {
        [id: string]: Post
      },
    allIds: Array<string>
  },
  filterCategory: string
}


const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`


export const PostList = (props: Props) => {
  const { posts } = props;
  let filteredPosts;
  if (props.filterCategory === 'all') {
    filteredPosts = posts.allIds;
  } else {
    filteredPosts = posts.allIds.filter((postId) => posts.byId[postId]['category'] === props.filterCategory)
  }
  return (
    <div>
      <PostListElement>
        {filteredPosts.map((postId) => {
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
