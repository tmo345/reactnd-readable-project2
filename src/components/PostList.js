// @flow
import React from 'react';
import type { AddPostData, EditPostData } from '../actions';
import { Post } from './Post';
import { AddPostButton } from './AddPostButton'
import type { Map } from 'immutable';
import styled from 'styled-components';
import type { AddPostDispatch, EditPostDispatch, DeletePostDispatch } from '../containers/Listings'

const PostListElement = styled.ul`
  list-style-type: none;
  text-align: left;
`

type Props = {
  posts: Map<string, *>,
  addPost: AddPostDispatch,
  editPost: EditPostDispatch,
  deletePost: DeletePostDispatch
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
