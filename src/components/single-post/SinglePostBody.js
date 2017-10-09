import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../../utils/helpers';
import { Item, Segment, Loader } from 'semantic-ui-react';
import EditPostDisplay from '../forms/EditPostDisplay';
import DeletePostDisplay from '../forms/DeletePostDisplay';

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
const EditButtonContainer = styled.div`
  float: right;
`;

const SinglePostBody = props => {
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
            <CommentNumber>
              Number of comments: {props.commentNumber}
            </CommentNumber>
            <EditButtonContainer>
              <DeletePostDisplay
                post={post}
                postId={props.urlId}
                history={props.history}
              />
              <EditPostDisplay post={post} postId={props.urlId} />
            </EditButtonContainer>
            <ClearFloat />
          </Segment>
        </div>
      </Item>
    </div>
  );
};

export default SinglePostBody;
