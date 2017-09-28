import React, { Component } from 'react';
import styled from 'styled-components';
import { formatTime } from '../utils/helpers';
import {
  Item,
  Grid,
  Header,
  Segment,
  Button,
  Icon,
  Loader
} from 'semantic-ui-react';
import { getPostById } from '../utils/api';
import CommentList from './CommentList';

const PostListItem = styled.li``;

const Title = styled.h3``;

const Body = styled.div``;

const Author = styled.div``;

const CreatedAt = styled.div``;

const ClearFloat = styled.div`clear: both;`;

const SinglePost = props => {
  const post = props.posts[props.urlId];

  const renderLoader = <Loader inline active={props.postsLoading} />;
  return (
    <div>
      <Item>
        <div>
          <Segment color="blue" inverted attached="top">
            <Grid columns={2}>
              <Grid.Column largeScreen={12}>
                <Header color="black" inverted as="h2">
                  {post ? post.title : renderLoader}
                </Header>
              </Grid.Column>
              <Grid.Column largeScreen={4}>
                <Header color="black" inverted as="h3" floated="right">
                  Votes: {post ? post.voteScore : renderLoader}
                </Header>
              </Grid.Column>
            </Grid>
          </Segment>
          <Segment attached>
            <Author>Author: {post ? post.author : renderLoader}</Author>
            <CreatedAt>
              {post ? formatTime(post.timestamp) : renderLoader}
            </CreatedAt>
            <Body>{post ? post.body : renderLoader}</Body>
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
