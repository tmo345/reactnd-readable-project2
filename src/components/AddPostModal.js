import React from 'react';
import { Button, Form, Dropdown, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { addPostServer } from '../utils/api';
import Modal from 'react-modal';

const FormPart = styled.div``;

const AddPostModal = props => (
  <Modal
    isOpen={props.addPostModalOpen}
    onRequestClose={props.closeAddPostModal}
    contentLabel="Add New Post"
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
      content: {
        top: '10%',
        bottom: '12.5%',
        right: '10%',
        left: '10%',
        padding: '25px'
      }
    }}
  >
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column width={14}>
          <h2>Add New Post</h2>
        </Grid.Column>
        <Grid.Column width={2} textAlign="right">
          <Button
            icon="remove"
            onClick={props.closeAddPostModal}
            onClick={props.closeAddPostModal}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Form
      onSubmit={props.handleAddPostSubmit({
        title: props.formFields.title,
        author: props.formFields.author,
        category: props.formFields.category,
        body: props.formFields.body
      })}
    >
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={16}>
            <Form.Field required>
              <label htmlFor="title">Title</label>
              <input
                required
                onChange={props.onTitleChange}
                type="text"
                placeholder="Title"
                value={props.formFields.title}
                id="title"
              />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Form.Field required>
              <label htmlFor="author">Author</label>
              <input
                required
                onChange={props.onAuthorChange}
                type="text"
                placeholder="Author"
                value={props.formFields.author}
                id="author"
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column>
            <Form.Field required>
              <label htmlFor="selectCategory">Select Category</label>
              <Dropdown
                // error={props.formFields.category === ''}
                onChange={props.onCategoryChange}
                placeholder="Select Category"
                id="selectCategory"
                fluid
                value={props.formFields.category}
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
              <textarea
                required
                onChange={props.onBodyChange}
                name="body"
                value={props.formFields.body}
                id="body"
                cols="30"
                rows="10"
              />
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
  </Modal>
);

export default AddPostModal;
