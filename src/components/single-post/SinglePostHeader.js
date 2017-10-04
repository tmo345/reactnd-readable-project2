import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../../utils/helpers';
import { Item, Grid, Header, Segment, Button, Loader } from 'semantic-ui-react';
import CommentList from '../comment-list/CommentList';
import VoteButtons from '../voting/VoteButtons';

const InlineVotes = styled.h3`
  display: inline-block;
  margin-bottom: 0;
`;
const InlineVoteButtons = styled.div`
  display: inline-block;
  margin-left: 10px;
`;
const SinglePostHeader = props => {
  return (
    <Segment color="blue" inverted attached="top">
      {props.postsLoading ? (
        <Loader active />
      ) : (
        <Grid columns={2}>
          <Grid.Column largeScreen={12}>
            <Header color="black" inverted as="h2">
              {props.post.title}
            </Header>
          </Grid.Column>
          <Grid.Column largeScreen={4}>
            <Header color="black" inverted as="span" floated="right">
              <Segment compact>
                <InlineVotes>Votes: {props.post.voteScore}</InlineVotes>
                <InlineVoteButtons>
                  <VoteButtons
                    votingOn={props.post}
                    handleVote={props.handleVote}
                    votesNowProcessing={props.votesNowProcessing}
                  />
                </InlineVoteButtons>
              </Segment>
            </Header>
          </Grid.Column>
        </Grid>
      )}
    </Segment>
  );
};

export default SinglePostHeader;
