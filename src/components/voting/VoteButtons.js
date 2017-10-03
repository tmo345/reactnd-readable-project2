import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`margin: 0 !important;`;
const StyledButton = styled(Button)`
  padding: 0.15rem !important;
  border-radius: 100% !important;
`;

const VoteButtons = props => {
  const { votingOn } = props;
  return (
    <div>
      <Button
        onClick={() => {
          props.handleVote(votingOn.id, 'upVote');
        }}
        as={StyledButton}
        compact
        circular
        size="mini"
        color="black"
        basic
        disabled={props.votesCurrentlyProcessing.includes(votingOn.id)}
      >
        <StyledIcon size="large" name="plus" fitted />
      </Button>{' '}
      <Button
        onClick={() => {
          props.handleVote(votingOn.id, 'downVote');
        }}
        as={StyledButton}
        compact
        basic
        circular
        size="mini"
        color="black"
        disabled={props.votesCurrentlyProcessing.includes(votingOn.id)}
      >
        <StyledIcon size="large" name="minus" fitted />
      </Button>
    </div>
  );
};

export default VoteButtons;
