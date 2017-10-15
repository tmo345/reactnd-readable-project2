import React from 'react';
import { connect } from 'react-redux';
import AddPostDisplay from './forms/AddPostDisplay';
import { Grid, Menu, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EditPostDisplay from './forms/EditPostDisplay';
import DeletePostDisplay from './forms/DeletePostDisplay';

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
          <div>
            <EditPostDisplay
              postId={props.editPostId}
              post={props.posts[props.editPostId]}
            />
          </div>
          <div>
            <DeletePostDisplay
              postId={props.deletePostId}
              post={props.posts[props.deletePostId]}
              history={props.history}
            />
          </div>
          <Menu.Menu position="right">
            <AddPostDisplay />
          </Menu.Menu>
        </Container>
      </Menu>
    </Grid.Row>
  );
};

const mapStateToProps = state => ({
  editPostId: state.ui.modals.editPostModal.forPostId,
  deletePostId: state.ui.modals.deletePostModal.forPostId,
  posts: state.posts,
});

export default connect(mapStateToProps)(ReadableHeader);
