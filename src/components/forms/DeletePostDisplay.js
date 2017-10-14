import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenModalButton from '../modals/OpenModalButton';
import ModalWithHeader from '../modals/ModalWithHeader';
import DeletePostForm from '../forms/DeletePostForm';
import { deletePostServer } from '../../actions/post-actions';
import {
  resetDeletePostFormSubmitted,
  startDeletePostFormSubmitted,
} from '../../actions/ui/forms';
import {
  openDeletePostModal,
  closeDeletePostModal,
} from '../../actions/ui/modal';
import { withRouter } from 'react-router-dom';

class DeletePostDisplay extends Component {
  submit = values => {
    this.props
      .deletePostServer(values)
      .then(this.props.startDeletePostFormSubmitted)
      .then(() => {
        this.props.closeDeletePostModal();
        setTimeout(() => {
          this.props.resetDeletePostFormSubmitted();
          this.props.history.push('/');
        }, 2000);
      });
  };

  handleCloseModal = () => {
    this.props.closeDeletePostModal();
    this.props.resetDeletePostFormSubmitted();
  };

  render() {
    return (
      <div>
        <OpenModalButton
          openModal={this.props.openDeletePostModal}
          resetFormSubmitted={this.props.resetDeletePostFormSubmitted}
          buttonText="Delete"
          icon="delete"
          color="red"
        />
        <ModalWithHeader
          label="Delete Post"
          isOpen={this.props.deletePostModalOpen}
          closeModal={this.handleCloseModal}
        >
          {this.props.deletePostFormSubmitted ? (
            <p>Post successfully deleted, redirecting you to main page...</p>
          ) : (
            /*<FormSubmittedMessage*/
            //closeModal={() => {
            //this.props.closeDeletePostModal();
            //this.props.history.push('/');
            //}}
            //resetFormSubmitted={() =>
            //this.props.resetDeletePostFormSubmitted()}
            //heading="Delete Post Form Submitted"
            //closeButtonText="Back to Main Page"
            /*/>*/
            <DeletePostForm
              onSubmit={this.submit}
              processingDeletePost={this.props.processingDeletePost}
              postId={this.props.postId}
              post={this.props.post}
              closeDeletePostModal={this.props.closeDeletePostModal}
            />
          )}
        </ModalWithHeader>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  deletePostModalOpen: state.ui.modals.deletePostModalOpen,
  deletePostFormSubmitted: state.ui.forms.deletePostFormSubmitted,
  processingDeletePost: state.ui.forms.processingDeletePost,
});

const mapDispatchToProps = dispatch => ({
  openDeletePostModal: () => dispatch(openDeletePostModal()),
  closeDeletePostModal: () => dispatch(closeDeletePostModal()),
  startDeletePostFormSubmitted: () => dispatch(startDeletePostFormSubmitted()),
  resetDeletePostFormSubmitted: () => dispatch(resetDeletePostFormSubmitted()),
  deletePostServer: values => dispatch(deletePostServer(values)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeletePostDisplay),
);
