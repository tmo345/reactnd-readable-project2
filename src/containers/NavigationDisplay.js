// @flow
import  React, { Component } from 'react';
import { getCategories } from '../utils/api.js'
import { connect } from 'react-redux';
import { setCategories, toggleCategorySelect, setActiveCategory } from '../actions';
import NavBar from '../components/NavBar';
import type { Category } from 'store-types';
import type { Action } from 'action-types';

type Props = {
  categories: Array<string>,
  categoryUI: {
    dropdownOpen: boolean,
    active: string
  },
  setCategories: (categories: Array<Category>) => Dispatch<Action>,
  toggleCategorySelect: () => Dispatch<Action>,
  setActiveCategory: (category: string) => Dispatch<Action>
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
      <NavBar
        categories={this.props.categories}
        categoryUI={this.props.categoryUI}
        toggleCategorySelect={this.props.toggleCategorySelect}
        setActiveCategory={this.props.setActiveCategory}
       />
    )
  }
}

const mapStateToProps = ({ categories, categoryUI }) => ({
  categories,
  categoryUI
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Dispatch<Action> =>  {

  return {
  setCategories: (categories: Array<Category>): Dispatch<Action> => dispatch(setCategories(categories)),
  toggleCategorySelect: () => dispatch(toggleCategorySelect()),
  setActiveCategory: (category: string) => dispatch(setActiveCategory(category))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
