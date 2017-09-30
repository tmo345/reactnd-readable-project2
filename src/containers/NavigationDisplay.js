import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openAddPostModal, closeAddPostModal } from '../actions/ui-actions';
import { setActiveCategory } from '../actions/category-actions';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import AddPostModal from '../components/AddPostModal';
import { addPostServer } from '../actions/post-actions';
import { inputChange } from '../actions/form-actions';

const ButtonContainer = styled.div`padding-top: 10px;`;

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

  handleInputChange = fieldName => {
    return e => {
      this.props.inputChange(fieldName, e.target.value);
    };
  };

  handleSemanticUiChange = fieldName => {
    return (event, data) => {
      this.props.inputChange(fieldName, data.value);
    };
  };

  handleAddPostSubmit = (title, author, category, body) => {
    return e => {
      e.preventDefault();
      this.props.addPostServer(title, author, category, body);
    };
  };

  render() {
    return (
      <div>
        <ButtonContainer>
          <Button
            onClick={this.props.openAddPostModal}
            icon="write"
            color="green"
            content="Add Post"
          />
        </ButtonContainer>
        <AddPostModal
          addPostModalOpen={this.props.addPostModalOpen}
          closeAddPostModal={this.props.closeAddPostModal}
          categories={this.setCategoryOptions(this.props.categories.categories)}
          onTitleChange={this.handleInputChange('title')}
          onAuthorChange={this.handleInputChange('author')}
          onCategoryChange={this.handleSemanticUiChange('category')}
          onBodyChange={this.handleInputChange('body')}
          formFields={this.props.formFields}
          handleAddPostSubmit={this.handleAddPostSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  addPostModalOpen: state.ui.addPostModalOpen,
  formFields: state.forms.addPost
});

const mapDispatchToProps = dispatch => {
  return {
    setActiveCategory: category => dispatch(setActiveCategory(category)),
    openAddPostModal: () => dispatch(openAddPostModal()),
    closeAddPostModal: () => dispatch(closeAddPostModal()),
    addPostServer: ({ title, body, author, category }) =>
      dispatch(addPostServer({ title, body, author, category })),
    inputChange: (fieldName, value) => dispatch(inputChange(fieldName, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
