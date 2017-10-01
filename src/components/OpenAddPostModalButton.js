import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonContainer = styled.div`padding-top: 10px;`;

const OpenAddPostModalButton = props => (
  <ButtonContainer>
    <Button
      onClick={() => {
        props.openAddPostModal();
        props.resetAddPostFormSubmitted();
      }}
      icon="write"
      color="green"
      content="Add Post"
    />
  </ButtonContainer>
);

export default OpenAddPostModalButton;
