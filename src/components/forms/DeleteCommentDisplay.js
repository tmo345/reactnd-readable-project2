import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalWithHeader from '../modals/ModalWithHeader';
import FormSubmittedMessage from '../form-fields/FormSubmittedMessage';
import DeleteCommentForm from './DeleteCommentForm';
import { deleteCommentServer } from '../../actions/comment-actions';
import {
  startDeleteCommentFormSubmitted,
  resetDeleteCommentFormSubmitted,
} from '../../actions/ui/forms';
import { closeDeleteCommentModal } from '../../actions/ui/modal';

class DeleteCommentDisplay extends Component {
  submit = values => {
    console.log('values', values);
    this.props
      .deleteCommentServer(values)
      .then(this.props.startDeleteCommentFormSubmitted);
    //.then(() => {
    //this.props.closeDeleteCommentModal();
    //setTimeout(() => {
    //this.props.resetDeleteCommentFormSubmitted();
    //this.props.history.push('/');
    //}, 2000);
    //});
  };

  handleCloseModal = () => {
    this.props.closeDeleteCommentModal();
    this.props.resetDeleteCommentFormSubmitted();
  };

  render() {
    return (
      <div>
        <ModalWithHeader
          label="Delete Comment"
          isOpen={this.props.deleteCommentModalOpen}
          closeModal={this.handleCloseModal}
        >
          {this.props.deleteCommentFormSubmitted ? (
            <FormSubmittedMessage
              closeModal={this.handleCloseModal}
              resetFormSubmitted={this.props.resetDeleteCommentFormSubmitted}
              heading="Comment Deleted Succesfuly"
              closeButtonText="Close Modal"
            />
          ) : (
            <DeleteCommentForm
              onSubmit={this.submit}
              processingDeleteComment={this.props.processingDeleteComment}
            />
          )}
        </ModalWithHeader>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deleteCommentModalOpen: state.ui.modals.deleteCommentModal.isOpen,
  processingEditComment: state.ui.forms.processingEditComment,
  deleteCommentFormSubmitted: state.ui.forms.deleteCommentFormSubmitted,
  hydratingCommentsComplete: state.ui.hydration.hydratingCommentsComplete,
});

const mapDispatchToProps = dispatch => ({
  closeDeleteCommentModal: () => dispatch(closeDeleteCommentModal()),
  deleteCommentServer: ({ id, body }) =>
    dispatch(deleteCommentServer({ id, body })),
  startDeleteCommentFormSubmitted: () =>
    dispatch(startDeleteCommentFormSubmitted()),
  resetDeleteCommentFormSubmitted: () =>
    dispatch(resetDeleteCommentFormSubmitted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DeleteCommentDisplay,
);
