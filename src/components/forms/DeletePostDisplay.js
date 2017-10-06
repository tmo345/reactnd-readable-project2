import React, { Component } from 'react';
import { connect } from 'react-redux';
import OpenModalButton from '../modals/OpenModalButton';
import ModalWithHeader from '../modals/ModalWithHeader';
import FormSubmittedMessage from '../form-fields/FormSubmittedMessage';
import DeletePostForm from '../forms/DeletePostForm';
import { deletePostServer } from '../../actions/post-actions';
import {
  openDeletePostModal,
  closeDeletePostModal,
  resetDeletePostFormSubmitted,
  startDeletePostFormSubmitted,
} from '../../actions/ui-actions';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

class DeletePostDisplay extends Component {
  submit = values => {
    this.props
      .deletePostServer(values)
      .then(this.props.startDeletePostFormSubmitted)
      .then(() =>
        setTimeout(() => {
          this.props.resetDeletePostFormSubmitted();
          this.props.history.push('/');
        }, 3000),
      );
  };

  render() {
    return (
      <div>
        <OpenModalButton
          openModal={this.props.openDeletePostModal}
          resetFormSubmitted={this.props.resetDeletePostFormSubmitted}
          buttonText="Delete"
          icon="write"
        />
        <ModalWithHeader
          label="Delete Post"
          isOpen={this.props.deletePostModalOpen}
          closeModal={this.props.closeDeletePostModal}
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
  deletePostModalOpen: state.ui.deletePostModalOpen,
  deletePostFormSubmitted: state.ui.deletePostFormSubmitted,
  processingDeletePost: state.ui.processingDeletePost,
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
