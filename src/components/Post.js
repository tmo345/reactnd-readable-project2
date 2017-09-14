// @flow
import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../utils/helpers';
import type { Post as PostType } from 'store-types';
import type { EditPostDispatch } from '../containers/PostDisplay';

type Props = {
  post: PostType,
  editPost: EditPostDispatch
};

const PostListItem = styled.li`

`

const Title = styled.h3`

`

const Body = styled.p`

`

const Author = styled.p`

`

const CreatedAt = styled.p`

`

export const Post = (props: Props) => {
  const id = props.post.id;
  const post = props.post;
  return (
    <PostListItem
      onClick={() => props.editPost({ id: id, title: 'new title', body: 'new body'})}
    >
      <Title>{post.title}</Title>
      <Author>{post.author}</Author>
      <CreatedAt>
        {formatTime(post.timestamp)}
      </CreatedAt>
      <Body>{post.body}</Body>
    </PostListItem>
  )
}
