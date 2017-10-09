import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

//const StyledIcon = styled(Icon)`margin: 0 !important;`;
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
          props.handleVote(votingOn, 'upVote');
        }}
        as={StyledButton}
        compact
        circular
        color="black"
        inverted={props.inverted}
        disabled={props.votesNowProcessing.includes(votingOn.id)}
        icon="plus"
      />
      <Button
        onClick={() => {
          props.handleVote(votingOn, 'downVote');
        }}
        as={StyledButton}
        compact
        circular
        inverted={props.inverted}
        color="black"
        disabled={props.votesNowProcessing.includes(votingOn.id)}
        icon="minus"
      />
    </div>
  );
};

VoteButtons.defaultProps = {
  inverted: true,
};

export default VoteButtons;
