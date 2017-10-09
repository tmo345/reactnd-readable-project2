import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenModalButton from '../modals/OpenModalButton';
import ModalWithHeader from '../modals/ModalWithHeader';
import FormSubmittedMessage from '../form-fields/FormSubmittedMessage';
import AddCommentForm from './AddCommentForm';
import { addCommentServer } from '../../actions/comment-actions';
import {
  startAddCommentFormSubmitted,
  resetAddCommentFormSubmitted,
} from '../../actions/ui/forms';
import {
  openAddCommentModal,
  closeAddCommentModal,
} from '../../actions/ui/modal';

class AddCommentDisplay extends Component {
  submit = values => {
    console.log(values);
    this.props
      .addCommentServer(values)
      .then(response => this.props.startAddCommentFormSubmitted());
  };

  handleCloseModal = () => {
    this.props.closeAddCommentModal();
    this.props.resetAddCommentFormSubmitted();
  };

  render() {
    return (
      <div>
        <OpenModalButton
          openModal={this.props.openAddCommentModal}
          resetFormSubmitted={this.props.resetAddCommentFormSubmitted}
          buttonText="Make Comment"
          icon="write"
        />
        <ModalWithHeader
          label="Add New Comment"
          isOpen={this.props.addCommentModalOpen}
          closeModal={this.handleCloseModal}
        >
          {this.props.addCommentFormSubmitted ? (
            <FormSubmittedMessage
              closeModal={this.handleCloseModal}
              resetFormSubmitted={this.props.resetAddCommentFormSubmitted}
              heading="Comment Form Submitted"
              closeButtonText="Close Modal"
              secondaryButtonText="Add another new comment"
            />
          ) : (
            <AddCommentForm
              parentId={this.props.parentId}
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
  addCommentModalOpen: state.ui.modals.addCommentModalOpen,
  processingNewComment: state.ui.forms.processingNewComment,
  addCommentFormSubmitted: state.ui.forms.addCommentFormSubmitted,
});

const mapDispatchToProps = dispatch => ({
  openAddCommentModal: () => dispatch(openAddCommentModal()),
  closeAddCommentModal: () => dispatch(closeAddCommentModal()),
  addCommentServer: ({ parentId, body, author }) =>
    dispatch(addCommentServer({ parentId, body, author })),
  startAddCommentFormSubmitted: () => dispatch(startAddCommentFormSubmitted()),
  resetAddCommentFormSubmitted: () => dispatch(resetAddCommentFormSubmitted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentDisplay);
