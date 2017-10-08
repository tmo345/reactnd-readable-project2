import React from 'react';
import {
  Grid,
  Segment,
  Button,
  Header,
  Comment,
  Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
              {props.comment.timestamp}
            </Comment.Metadata>
            <Comment.Text as={CommentBody}>{props.comment.body}</Comment.Text>
            <Comment.Actions>
              Votes: 2
              <Comment.Action>
                <Icon name="plus square outline" />
                <Icon name="minus square outline" />
              </Comment.Action>
              <Comment.Content as={CommentButtons}>
                <Comment.Action>
                  <Button primary compact basic>
                    Edit
                  </Button>
                </Comment.Action>
                <Comment.Action>
                  <Button secondary compact basic>
                    Delete
                  </Button>
                </Comment.Action>
              </Comment.Content>
            </Comment.Actions>
          </Comment.Content>
        </Segment>
      </Segment.Group>
  );
};

export default CommentCard;
