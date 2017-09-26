import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../actions/category-actions';
import NavBar from '../components/NavBar';

class NavigationDisplay extends Component {
  render() {
    return <NavBar categories={this.props.categories} />;
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
