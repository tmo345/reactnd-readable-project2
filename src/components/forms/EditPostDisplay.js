import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenModalButton from '../modals/OpenModalButton';
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
      <div>
        <OpenModalButton
          openModal={this.props.openEditPostModal}
          resetFormSubmitted={this.props.resetEditPostFormSubmitted}
          buttonText="Edit"
          icon="edit"
        />
        <ModalWithHeader
          label="Edit Post"
          isOpen={this.props.editPostModalOpen}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editPostModalOpen: state.ui.modals.editPostModalOpen,
  editPostFormSubmitted: state.ui.forms.editPostFormSubmitted,
  processingEditPost: state.ui.forms.processingEditPost,
});

const mapDispatchToProps = dispatch => ({
  openEditPostModal: () => dispatch(openEditPostModal()),
  closeEditPostModal: () => dispatch(closeEditPostModal()),
  startEditPostFormSubmitted: () => dispatch(startEditPostFormSubmitted()),
  resetEditPostFormSubmitted: () => dispatch(resetEditPostFormSubmitted()),
  editPostServer: ({ id, body }) => dispatch(editPostServer({ id, body })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostDisplay);
