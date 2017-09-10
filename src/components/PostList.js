// @flow
import React from 'react';
import type { AddPostData, EditPostData } from '../actions';
import { Post } from './Post';
import { AddPostButton } from './AddPostButton'
import type { Map } from 'immutable';
import styled from 'styled-components';

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`

type Props = {
  posts: Map<string, *>,
  addPost: (data: AddPostData) => void,
  editPost: (data: EditPostData) => void,
  deletePost: (id: string) => void
}

export const PostList = (props: Props) => {
  const { posts, addPost, editPost, deletePost } = props;
  return (
    <div>
      <PostListElement>
        {posts.valueSeq().map((post) => {
          return (
            <Post
              post={post}
              editPost={editPost}
            />
          );
        })}
      </PostListElement>
      <AddPostButton addPost={addPost} />
    </div>
  )

}
