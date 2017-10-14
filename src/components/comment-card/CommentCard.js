import React from 'react';
import { Segment, Comment, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import VoteButtons from '../voting/VoteButtons';
import OpenModalButton from '../modals/OpenModalButton';
import { formatTime } from '../../utils/helpers';

const Author = styled.h4`
  display: inline-block;
  margin-bottom: 7.5px;
`;

const MetaData = styled.p`
  display: inline-block;
  margin-bottom: 7.5px;
  float: right;
`;

const Avatar = styled(Icon)`
  padding-top: 10px;
`;

const CommentButtons = styled(Comment.Actions)`
  float: right;
  text-align: right;
`;

const CommentBody = styled(Comment.Text)`
  margin-bottom: 12.5px !important;
`;

const CommentCard = props => {
  return (
    <Segment.Group horizontal>
      <Comment.Content>
        <Avatar name="user" color="grey" size="huge" />
      </Comment.Content>
      <Segment>
        <Comment.Content>
          <Comment.Author as={Author}>{props.comment.author}</Comment.Author>
          <Comment.Metadata as={MetaData}>
            {formatTime(props.comment.timestamp)}
          </Comment.Metadata>
          <Comment.Text as={CommentBody}>{props.comment.body}</Comment.Text>
          <Comment.Content>
            <OpenModalButton
              openModal={props.openEditCommentModal}
              id={props.comment.id}
              parentId={props.comment.parentId}
              resetFormSubmitted={props.resetEditCommentFormSubmitted}
              buttonText="Edit"
              icon="edit"
            />
            <OpenModalButton
              openModal={props.openDeleteCommentModal}
              id={props.comment.id}
              parentId={props.comment.parentId}
              resetFormSubmitted={props.resetDeleteCommentFormSubmitted}
              buttonText="Delete"
              icon="delete"
              color="red"
            />
          </Comment.Content>
          <Comment.Content as={CommentButtons}>
            <p>Votes: {props.comment.voteScore}</p>
            <VoteButtons
              votingOn={props.comment}
              handleVote={props.handlePostVote}
              votesNowProcessing={props.commentVotesNowProcessing}
              inverted={false}
            />
          </Comment.Content>
        </Comment.Content>
      </Segment>
    </Segment.Group>
  );
};

export default CommentCard;
