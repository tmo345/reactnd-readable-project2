import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../../utils/helpers';
import { Item, Grid, Header, Segment, Button, Loader } from 'semantic-ui-react';
import CommentList from '../comment-list/CommentList';
import VoteButtons from '../voting/VoteButtons';
import SinglePostHeader from './SinglePostHeader';

const Body = styled.div`margin-top: 0.5rem;`;
const Author = styled.div``;
const CreatedAt = styled.div``;
const ClearFloat = styled.div`clear: both;`;
const InlineVotes = styled.h3`
  display: inline-block;
  margin-bottom: 0;
`;
const InlineVoteButtons = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

const SinglePost = props => {
  const post = props.posts[props.urlId];
  const renderLoader = <Loader inline active />;
  return (
    <div>
      <Item>
        <div>
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
          </Segment>
        </div>
      </Item>
      <CommentList />
    </div>
  );
};

export default SinglePost;
