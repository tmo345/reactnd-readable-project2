import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonContainer = styled.div`padding-top: 10px;`;

const OpenModalButton = props => (
  <ButtonContainer>
    <Button
      onClick={() => {
        props.openModal();
        props.resetFormSubmitted();
      }}
      icon={props.icon}
      color="green"
      content={props.buttonText}
    />
  </ButtonContainer>
);

export default OpenModalButton;
