import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../../utils/helpers';
import { Item, Segment } from 'semantic-ui-react';
import OpenModalButton from '../modals/OpenModalButton';

const Body = styled.div`
  margin-top: 0.5rem;
`;
const Author = styled.div``;
const CreatedAt = styled.div``;
const CommentNumber = styled.div`
  float: left;
`;
const ClearFloat = styled.div`
  clear: both;
`;
const ButtonContainer = styled.div`
  float: right;
`;

const SinglePostBody = props => {
  const post = props.posts[props.urlId];
  return (
    <div>
      <Item>
        <div>
          <Segment attached>
            <Author>Author: {post.author}</Author>
            <CreatedAt>{formatTime(post.timestamp)}</CreatedAt>
            <Body>{post.body}</Body>
          </Segment>
          <Segment attached="bottom">
            <CommentNumber>
              Number of comments: {props.commentNumber}
            </CommentNumber>
            <ButtonContainer>
              <OpenModalButton
                openModal={() => props.openEditPostModal(post.id)}
                buttonText="Edit"
                icon="edit"
              />
              <OpenModalButton
                openModal={() => props.openDeletePostModal(post.id)}
                buttonText="Delete"
                icon="delete"
                color="red"
              />
            </ButtonContainer>
            <ClearFloat />
          </Segment>
        </div>
      </Item>
    </div>
  );
};

export default SinglePostBody;
