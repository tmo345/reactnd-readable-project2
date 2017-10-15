import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <ModalWithHeader
        label="Delete Post"
        isOpen={this.props.deletePostModal.isOpen}
        closeModal={this.handleCloseModal}
      >
        <DeletePostForm
          onSubmit={this.submit}
          processingDeletePost={this.props.processingDeletePost}
          postId={this.props.postId}
          post={this.props.post}
          closeDeletePostModal={this.handleCloseModal}
        />
      </ModalWithHeader>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  deletePostModal: state.ui.modals.deletePostModal,
  deletePostFormSubmitted: state.ui.forms.deletePostFormSubmitted,
  processingDeletePost: state.ui.forms.processingDeletePost,
});

const mapDispatchToProps = dispatch => ({
  openDeletePostModal: id => dispatch(openDeletePostModal(id)),
  closeDeletePostModal: () => dispatch(closeDeletePostModal()),
  startDeletePostFormSubmitted: () => dispatch(startDeletePostFormSubmitted()),
  resetDeletePostFormSubmitted: () => dispatch(resetDeletePostFormSubmitted()),
  deletePostServer: values => dispatch(deletePostServer(values)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeletePostDisplay),
);
