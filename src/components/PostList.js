// @flow
import React from 'react';
import type { AddPostData, EditPostData } from '../actions';
import { Post } from './Post';
import { AddPostButton } from './AddPostButton'
import type { Map } from 'immutable'

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
      <ul>
        {posts.valueSeq().map((post) => {
          return (
            <Post
              post={post}
              editPost={editPost}
            />
          );
        })}
      </ul>
      <AddPostButton addPost={addPost} />
    </div>
  )

}
