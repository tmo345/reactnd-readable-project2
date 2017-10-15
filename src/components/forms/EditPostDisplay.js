import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWithHeader from '../modals/ModalWithHeader';
import FormSubmittedMessage from '../form-fields/FormSubmittedMessage';
import EditPostForm from '../forms/EditPostForm';
import { editPostServer } from '../../actions/post-actions';

import {
  resetEditPostFormSubmitted,
  startEditPostFormSubmitted,
} from '../../actions/ui/forms';
import { openEditPostModal, closeEditPostModal } from '../../actions/ui/modal';

class EditPostDisplay extends Component {
  submit = values => {
    this.props
      .editPostServer(values)
      .then(() => this.props.startEditPostFormSubmitted());
  };

  handleCloseModal = () => {
    this.props.closeEditPostModal();
    this.props.resetEditPostFormSubmitted();
  };
  render() {
    return (
      <ModalWithHeader
        label="Edit Post"
        isOpen={this.props.editPostModal.isOpen}
        closeModal={this.handleCloseModal}
      >
        {this.props.editPostFormSubmitted ? (
          <FormSubmittedMessage
            closeModal={this.handleCloseModal}
            resetFormSubmitted={this.props.resetEditPostFormSubmitted}
            heading="Edit Post Form Submitted"
            closeButtonText="Close Modal"
            secondaryButtonText="Edit this post again"
          />
        ) : (
          <EditPostForm
            onSubmit={this.submit}
            processingEditPost={this.props.processingEditPost}
            postId={this.props.postId}
            post={this.props.post}
          />
        )}
      </ModalWithHeader>
    );
  }
}

const mapStateToProps = state => ({
  editPostModal: state.ui.modals.editPostModal,
  editPostFormSubmitted: state.ui.forms.editPostFormSubmitted,
  processingEditPost: state.ui.forms.processingEditPost,
});

const mapDispatchToProps = dispatch => ({
  openEditPostModal: id => dispatch(openEditPostModal(id)),
  closeEditPostModal: () => dispatch(closeEditPostModal()),
  startEditPostFormSubmitted: () => dispatch(startEditPostFormSubmitted()),
  resetEditPostFormSubmitted: () => dispatch(resetEditPostFormSubmitted()),
  editPostServer: ({ id, body, title }) =>
    dispatch(editPostServer({ id, body, title })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostDisplay);
