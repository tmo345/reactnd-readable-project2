// @flow
import React from 'react';
import type { AddPostDispatch } from '../containers/AddPostDisplay';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components'

type Props = {
  addPost: AddPostDispatch
}

const ButtonContainer = styled.div`
  padding-top: 10px;
`

const ButtonText = styled.span`
  font-size: 18px;
`

const StyledButton = styled(Button)`
`

export const AddPostButton = (props: Props) => {
  return (
    <ButtonContainer>
    <Button
      icon='write'
      color='green'
      onClick={() => props.addPost({title: 'things', author: 'yo', body: 'post', category: 'redux'})}
    />
</ButtonContainer>
)
}
