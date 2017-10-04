import React from 'react';
import styled from 'styled-components';
import { Grid, Header, Segment, Loader } from 'semantic-ui-react';
import VoteButtons from '../voting/VoteButtons';

const InlineVotes = styled.h3`
  display: inline-block;
  margin-bottom: 0;
  font-size: 1.3rem;
  color: #fff;
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
              <InlineVotes>Votes: {props.post.voteScore}</InlineVotes>
              <InlineVoteButtons>
                <VoteButtons
                  votingOn={props.post}
                  handleVote={props.handleVote}
                  votesNowProcessing={props.votesNowProcessing}
                  darkBackground={true}
                />
              </InlineVoteButtons>
            </Header>
          </Grid.Column>
        </Grid>
      )}
    </Segment>
  );
};

export default SinglePostHeader;
