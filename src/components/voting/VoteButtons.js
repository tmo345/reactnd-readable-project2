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
        // size="mini"
        color="black"
        inverted
        // basic={!props.darkBackground}
        disabled={props.votesNowProcessing.includes(votingOn.id)}
        icon="plus"
      >
        {/* <StyledIcon size="large" name="plus" /> */}
      </Button>{' '}
      <Button
        onClick={() => {
          props.handleVote(votingOn.id, 'downVote');
        }}
        as={StyledButton}
        compact
        // basic={!props.darkBackground}
        circular
        // size="mini"
        inverted
        color="black"
        disabled={props.votesNowProcessing.includes(votingOn.id)}
        icon="minus"
      >
        {/* <StyledIcon size="large" name="minus" /> */}
      </Button>
    </div>
  );
};

export default VoteButtons;
