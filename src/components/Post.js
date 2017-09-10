// @flow
import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../utils/helpers';

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

export const Post = (props) => {
  const id = props.post.get('id');
  const data = {title: 'new title', body: 'new body', id: id};
  const post = props.post
  return (
    <PostListItem
      key={props.post.get('id')}
      onClick={() => props.editPost(data)}
    >
      <Title>{post.get('title')}</Title>
      <Author>{post.get('author')}</Author>
      <CreatedAt>
        {formatTime(post.get('timestamp'))}
      </CreatedAt>
      <Body>{post.get('body')}</Body>
    </PostListItem>
  )
}
