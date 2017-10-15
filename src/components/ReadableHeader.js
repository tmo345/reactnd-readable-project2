import React from 'react';
import AddPostDisplay from './forms/AddPostDisplay';
import { Grid, Menu, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SiteBranding = styled(Menu.Menu)`
  border-left: 1px solid #333;
  border-right: 1px solud #333;
`;

const ReadableHeader = props => {
  return (
    <Grid.Row>
      <Menu inverted={true} attached="top">
        <Container>
          <SiteBranding>
            <Menu.Item as={Link} to="/">
              <h1>Readable</h1>
            </Menu.Item>
          </SiteBranding>

          <Menu.Menu position="right">
            <AddPostDisplay />
          </Menu.Menu>
        </Container>
      </Menu>
    </Grid.Row>
  );
};

export default ReadableHeader;
