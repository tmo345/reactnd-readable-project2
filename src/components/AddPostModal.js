import React from 'react';
import { Modal, Button, Form, Dropdown, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonContainer = styled.div`padding-top: 10px;`;

const FormPart = styled.div``;

const AddPostModal = props => (
  <Modal
    trigger={
      <ButtonContainer>
        <Button icon="write" color="green" content="Add Post" />
      </ButtonContainer>
    }
  >
    <Modal.Header>New Post</Modal.Header>
    <Modal.Content>
      <Form>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={16}>
              <Form.Field required>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title" id="title" />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Form.Field required>
                <label htmlFor="author">Author</label>
                <input type="text" placeholder="Author" id="author" />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <Form.Field required>
                <label htmlFor="selectCategory">Select Category</label>
                <Dropdown
                  placeholder="Select Category"
                  id="selectCategory"
                  fluid
                  selection
                  options={props.categories}
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Form.Field required>
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="10" />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={2}>
              <Button color="green" type="submit">
                Submit
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Modal.Content>
  </Modal>
);

export default AddPostModal;
