import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../actions/category-actions';
import NavBar from '../components/NavBar';

class NavigationDisplay extends Component {
  setCategoryOptions = categories => {
    return categories.map(category => ({
      text: category.name.slice(0, 1).toUpperCase() + category.name.slice(1),
      value: category.name
    }));
  };

  handleAddPostSubmit = ({ title, author, category, body }) => {};

  render() {
    return (
      <NavBar
        categories={this.setCategoryOptions(this.props.categories.categories)}
      />
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch => {
  return {
    setActiveCategory: category => dispatch(setActiveCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
