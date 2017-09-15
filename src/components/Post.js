// @flow
import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../utils/helpers';
import type { Post as PostType } from 'store-types';
import type { EditPostDispatch } from '../containers/PostDisplay';
import { Item, Grid, Header, Segment, Button, Icon } from 'semantic-ui-react';
import CommentList from './CommentList';

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

const ClearFloat = styled.p`
  clear: both;
`

export const Post = (props: Props) => {
  console.log('props', props)
  const id = props.post.id;
  const post = props.post;

  return (
    <div>
    <Item
      onClick={() => props.editPost({ id: id, title: 'new title', body: 'new body'})}
    >
      <div>
        <Segment color='blue' inverted attached='top'>
          <Grid columns={2}>
            <Grid.Column largeScreen={12}>
              <Header color='black' inverted as="h2">{post.title}</Header>
            </Grid.Column>
            <Grid.Column largeScreen={4}>
              <Header color='black' inverted as="h3" floated='right'>Votes: {post.voteScore}</Header>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Author>Author: {post.author}</Author>
          <CreatedAt>
            {formatTime(post.timestamp)}
          </CreatedAt>
          <Body>{post.body}</Body>
          <Button floated='right' secondary>Delete</Button>
          <Button floated='right' primary>Edit</Button>
          <ClearFloat></ClearFloat>
        </Segment>
        <Segment attached='bottom'>
          <p>Number of comments: 5</p>
          <p>Vote: <Icon name='plus square outline' /><Icon name='minus square outline' /></p>
        </Segment>
      </div>
    </Item>
      <CommentList />
    </div>
    )
}
