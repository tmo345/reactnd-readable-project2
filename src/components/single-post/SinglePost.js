import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../../utils/helpers';
import { Item, Segment, Button, Loader } from 'semantic-ui-react';

const Body = styled.div`margin-top: 0.5rem;`;
const Author = styled.div``;
const CreatedAt = styled.div``;
const CommentNumber = styled.p`float: left;`;
const ClearFloat = styled.div`clear: both;`;

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
          </Segment>
          <Segment attached="bottom">
            <CommentNumber>Number of comments: 5</CommentNumber>
            <Button floated="right" secondary>
              Delete
            </Button>
            <Button floated="right" primary>
              Edit
            </Button>{' '}
            <ClearFloat />
          </Segment>
        </div>
      </Item>
    </div>
  );
};

export default SinglePost;
