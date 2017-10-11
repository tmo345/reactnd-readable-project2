import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  padding-top: 10px;
`;

const OpenModalButton = props => {
  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          props.openModal(props.id, props.parentId);
        }}
        icon={props.icon}
        color={props.color}
        content={props.buttonText}
      />
    </ButtonContainer>
  );
};

OpenModalButton.defaultProps = {
  color: 'green',
};

export default OpenModalButton;
