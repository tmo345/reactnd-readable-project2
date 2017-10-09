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
  render() {
    console.log(this.props);
    return (
      <div>
        <OpenModalButton
          openModal={this.props.openEditPostModal}
          resetFormSubmitted={this.props.resetEditPostFormSubmitted}
          buttonText="Edit"
          icon="write"
        />
        <ModalWithHeader
          label="Edit Post"
          isOpen={this.props.editPostModalOpen}
          closeModal={this.props.closeEditPostModal}
        >
          {this.props.editPostFormSubmitted ? (
            <FormSubmittedMessage
              closeModal={this.props.closeEditPostModal}
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
  editPostServer: values => dispatch(editPostServer(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostDisplay);
