import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWithHeader from '../modals/ModalWithHeader';
import FormSubmittedMessage from '../form-fields/FormSubmittedMessage';
import EditCommentForm from './EditCommentForm';
import { editCommentServer } from '../../actions/comment-actions';
import {
  startEditCommentFormSubmitted,
  resetEditCommentFormSubmitted,
} from '../../actions/ui/forms';
import { closeEditCommentModal } from '../../actions/ui/modal';

class EditCommentDisplay extends Component {
  submit = values => {
    this.props
      .editCommentServer(values)
      .then(response => this.props.startEditCommentFormSubmitted());
  };

  handleCloseModal = () => {
    this.props.closeEditCommentModal();
    this.props.resetEditCommentFormSubmitted();
  };

  render() {
    console.log(this.props, 'ecd');
    return (
      <div>
        <ModalWithHeader
          label="Edit Comment"
          isOpen={this.props.editCommentModalOpen}
          closeModal={this.handleCloseModal}
        >
          {this.props.editCommentFormSubmitted ? (
            <FormSubmittedMessage
              closeModal={this.handleCloseModal}
              resetFormSubmitted={this.props.resetEditCommentFormSubmitted}
              heading="Comment Form Submitted"
              closeButtonText="Close Modal"
              secondaryButtonText="Edit this comment again"
            />
          ) : (
            <EditCommentForm
              onSubmit={this.submit}
              processingNewComment={this.props.processingNewComment}
            />
          )}
        </ModalWithHeader>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editCommentModalOpen: state.ui.modals.editCommentModal.isOpen,
  processingEditComment: state.ui.forms.processingEditComment,
  editCommentFormSubmitted: state.ui.forms.editCommentFormSubmitted,
  hydratingCommentsComplete: state.ui.hydration.hydratingCommentsComplete,
});

const mapDispatchToProps = dispatch => ({
  closeEditCommentModal: () => dispatch(closeEditCommentModal()),
  editCommentServer: ({ id, body }) =>
    dispatch(editCommentServer({ id, body })),
  startEditCommentFormSubmitted: () =>
    dispatch(startEditCommentFormSubmitted()),
  resetEditCommentFormSubmitted: () =>
    dispatch(resetEditCommentFormSubmitted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentDisplay);
