import React, { Component } from 'react';
import styled from 'styled-components';
import { formatTime } from '../utils/helpers';
import { Item, Grid, Header, Segment, Button, Icon } from 'semantic-ui-react';
import { getPostById } from '../utils/api';
import CommentList from './CommentList';

const PostListItem = styled.li``;

const Title = styled.h3``;

const Body = styled.p``;

const Author = styled.p``;

const CreatedAt = styled.p``;

const ClearFloat = styled.p`clear: both;`;

const SinglePost = props => {
  const { id, post } = props;

  return (
    <div>
      <Item>
        <div>
          <Segment color="blue" inverted attached="top">
            <Grid columns={2}>
              <Grid.Column largeScreen={12}>
                <Header color="black" inverted as="h2">
                  {post.title}
                </Header>
              </Grid.Column>
              <Grid.Column largeScreen={4}>
                <Header color="black" inverted as="h3" floated="right">
                  Votes: {post.voteScore}
                </Header>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Author>Author: {post.author}</Author>
            <CreatedAt>{formatTime(post.timestamp)}</CreatedAt>
            <Body>{post.body}</Body>
            <Button floated="right" secondary>
              Delete
            </Button>
            <Button floated="right" primary>
              Edit
            </Button>
            <ClearFloat />
          </Segment>
          <Segment attached="bottom">
            <p>Number of comments: 5</p>
            <p>
              Vote: <Icon name="plus square outline" />
              <Icon name="minus square outline" />
            </p>
          </Segment>
        </div>
      </Item>
      <CommentList />
    </div>
  );
};

export default SinglePost;
