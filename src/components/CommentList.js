import React from 'react';
import {
  Grid,
  Segment,
  Button,
  Header,
  Comment,
  Icon
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

const CommentContainer = styled(Comment)`
  margin-top: 0 !important;
  padding-top: 0 !important;
`;

const Avatar = styled(Icon)`padding-top: 10px;`;

const CommentButtons = styled(Comment.Actions)`float: right;`;

const CommentBody = styled(Comment.Text)`margin-bottom: 12.5px !important;`;

const CommentList = props => (
  <Comment.Group size="large">
    <Header>Comments</Header>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column largeScreen={8}>
          <Button color="green">Make Comment</Button>
        </Grid.Column>
        <Grid.Column largeScreen={8} floated="right">
          <span>Sort By: </span>
          <Link to="">Date</Link>
          <span> | </span>
          <Link to="">Vote</Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Comment as={CommentContainer}>
      <Segment.Group horizontal>
        <Comment.Content>
          <Avatar name="user" color="grey" size="huge" />
        </Comment.Content>
        <Segment>
          <Comment.Content>
            <Comment.Author as={Author}>Bill</Comment.Author>
            <Comment.Metadata as={MetaData}>
              September 15, 2017
            </Comment.Metadata>
            <Comment.Text as={CommentBody}>
              Lorem optio repellendus ducimus vitae enim Est officiis omnis
              consequuntur esse dolore necessitatibus quae Voluptatum veniam
              tempora odit cupiditate excepturi. Itaque iure ea enim incidunt
              illum. Nostrum doloribus illo iure?
            </Comment.Text>
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
    </Comment>
  </Comment.Group>
);

export default CommentList;
