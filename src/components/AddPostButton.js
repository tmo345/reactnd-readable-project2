import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonContainer = styled.div`padding-top: 10px;`;

export const AddPostButton = props => {
  return (
    <ButtonContainer>
      <Button
        icon="write"
        color="green"
        onClick={() =>
          props.addPost({
            title: 'things',
            author: 'yo',
            body: 'post',
            category: 'redux'
          })}
      />
    </ButtonContainer>
  );
};
