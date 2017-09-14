// @flow
import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import  {  AddPostDisplay } from '../containers/AddPostDisplay';

const SiteBranding = styled(Menu.Menu)`
  border-left: 1px solid #333;
  border-right: 1px solud #333;
`

const NavBar = (props) => {
  return (
    <Menu inverted={true} attached="top">
      <Container>
        <SiteBranding>
          <Menu.Item as={Link} to='/'>
            <h1>Readable</h1>
          </Menu.Item>
        </SiteBranding>

    <AddPostDisplay />
      </Container>
    </Menu>
  )
}

export default NavBar;
