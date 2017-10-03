import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  openAddPostModal,
  closeAddPostModal,
  resetAddPostFormSubmitted
} from '../../actions/ui-actions';
import { setActiveCategory } from '../../actions/category-actions';
import AddPostModal from '../modals/AddPostModal';
import { addPostServer } from '../../actions/post-actions';
import OpenModalButton from '../modals/OpenModalButton';
import AddPostForm from '../add-post-form/AddPostForm';
import FormSubmittedMessage from '../form-fields/FormSubmittedMessage';

class NavigationDisplay extends Component {
  setCategoryOptions = categories => {
    return (
      categories
        // we don't want all as an option in the add post category field
        .filter(category => category.name !== 'all')
        .map(category => ({
          text:
            category.name.slice(0, 1).toUpperCase() + category.name.slice(1),
          value: category.name
        }))
    );
  };

  submit = values => {
    this.props.addPostServer(values);
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
        <AddPostModal
          addPostModalOpen={this.props.addPostModalOpen}
          closeAddPostModal={this.props.closeAddPostModal}
        >
          {this.props.addPostFormSubmitted ? (
            <FormSubmittedMessage
              closeModal={this.props.closeAddPostModal}
              resetFormSubmitted={this.props.resetAddPostFormSubmitted}
              heading="Post Form Submitted"
              closeButtonText="Close Modal"
              secondaryButtonText="Add another new post"
            />
          ) : (
            <AddPostForm
              onSubmit={this.submit}
              categories={this.setCategoryOptions(
                this.props.categories.categories
              )}
              processingNewPost={this.props.processingNewPost}
            />
          )}
        </AddPostModal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  addPostModalOpen: state.ui.addPostModalOpen,
  processingNewPost: state.ui.processingNewPost,
  addPostFormSubmitted: state.ui.addPostFormSubmitted
});

const mapDispatchToProps = dispatch => {
  return {
    setActiveCategory: category => dispatch(setActiveCategory(category)),
    openAddPostModal: () => dispatch(openAddPostModal()),
    closeAddPostModal: () => dispatch(closeAddPostModal()),
    addPostServer: ({ title, body, author, category }) =>
      dispatch(addPostServer({ title, body, author, category })),
    resetAddPostFormSubmitted: () => dispatch(resetAddPostFormSubmitted())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
