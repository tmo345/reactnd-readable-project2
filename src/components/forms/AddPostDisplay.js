import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startAddPostFormSubmitted,
  resetAddPostFormSubmitted,
} from '../../actions/ui/forms';
import { openAddPostModal, closeAddPostModal } from '../../actions/ui/modal';
import { setActiveCategory } from '../../actions/category-actions';
import ModalWithHeader from '../modals/ModalWithHeader';
import { addPostServer } from '../../actions/post-actions';
import OpenModalButton from '../modals/OpenModalButton';
import AddPostForm from '../forms/AddPostForm';
import FormSubmittedMessage from '../form-fields/FormSubmittedMessage';
import { setCommentsForPost } from '../../actions/comment-actions';

class AddPostDisplay extends Component {
  submit = values => {
    this.props
      .addPostServer(values)
      .then(response => this.props.setCommentsForPost(response.data.id))
      .then(() => this.props.startAddPostFormSubmitted());
  };

  handleCloseModal = () => {
    this.props.closeAddPostModal();
    this.props.resetAddPostFormSubmitted();
  };

  render() {
    return (
      <div>
        <OpenModalButton
          openModal={this.props.openAddPostModal}
          resetFormSubmitted={this.props.resetAddPostFormSubmitted}
          buttonText="Add Post"
          icon="write"
        />
        <ModalWithHeader
          label="Add New Post"
          isOpen={this.props.addPostModalOpen}
          closeModal={this.handleCloseModal}
        >
          {this.props.addPostFormSubmitted ? (
            <FormSubmittedMessage
              closeModal={this.handleCloseModal}
              resetFormSubmitted={this.props.resetAddPostFormSubmitted}
              heading="Post Form Submitted"
              closeButtonText="Close Modal"
              secondaryButtonText="Add another new post"
            />
          ) : (
            <AddPostForm
              onSubmit={this.submit}
              processingNewPost={this.props.processingNewPost}
            />
          )}
        </ModalWithHeader>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  addPostModalOpen: state.ui.addPostModalOpen,
  processingNewPost: state.ui.processingNewPost,
  addPostFormSubmitted: state.ui.addPostFormSubmitted,
});

const mapDispatchToProps = dispatch => {
  return {
    setActiveCategory: category => dispatch(setActiveCategory(category)),
    openAddPostModal: () => dispatch(openAddPostModal()),
    closeAddPostModal: () => dispatch(closeAddPostModal()),
    addPostServer: ({ title, body, author, category }) =>
      dispatch(addPostServer({ title, body, author, category })),
    startAddPostFormSubmitted: () => dispatch(startAddPostFormSubmitted()),
    resetAddPostFormSubmitted: () => dispatch(resetAddPostFormSubmitted()),
    setCommentsForPost: id => dispatch(setCommentsForPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostDisplay);
