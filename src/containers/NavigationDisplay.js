// @flow
import  React, { Component } from 'react';
import { getCategories } from '../utils/api.js'
import { connect } from 'react-redux';
import { setCategories, toggleCategorySelect, setActiveCategory } from '../actions';
import NavBar from '../components/NavBar';
import type { Category } from 'store-types';
import type { Action } from 'action-types';

type Props = {
  categories: Array<Category>,
  setCategories: (categories: Array<Category>) => Dispatch<Action>
}

class NavigationDisplay extends Component<Props> {
  componentDidMount(): void {
    getCategories()
      .then((categories: Array<Category>): void => {
      this.props.setCategories(categories);
    });

  }

  render() {
    return (
      <NavBar categories={this.props.categories} />
    )
  }
}

const mapStateToProps = ({ categories, categoryUI }) => ({
  categories,
  categoryUI
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Dispatch<Action> => ({
  setCategories: (categories: Array<Category>): Dispatch<Action> => dispatch(setCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
