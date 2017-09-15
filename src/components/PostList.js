// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import type { Post } from 'store-types';

type Props = {
  posts: (Post)[]
}


const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`


export const PostList = (props: Props) => {
  const posts = props.filteredPosts;
  if (posts.length === 0) {
    return <p>Sorry there are no posts in this category.</p>
  }
  return (
    <div>
      <PostListElement>
        { posts.map((post) => {
          return (
            <li key={post.id}>
              <div>
              <Link to={`${post.category}/${post.id}`}>
                {post.title}
              </Link>
              <div>
                Votes: {post.voteScore}
              </div>
              </div>
            </li>
          );
        }
        )}
      </PostListElement>
    </div>
  )

}
