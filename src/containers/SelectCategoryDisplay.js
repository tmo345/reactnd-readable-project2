// @flow
import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../actions';
import SelectCategory from '../components/SelectCategory';
import type { Category } from 'store-types';
import type { Action } from 'action-types';

type Props = {
  categories: Array<Category>,
  categoryUI: {
    dropdownOpen: boolean,
    active: string
  },
  setCategories: (categories: Array<Category>) => Dispatch<Action>,
  toggleCategorySelect: () => Dispatch<Action>,
  setActiveCategory: (category: string) => Dispatch<Action>
}

class SelectCategoryDisplay extends Component<Props> {

  render() {
    return (
      <SelectCategory
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
  setActiveCategory: (category: CategoryName) => dispatch(setActiveCategory(category))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategoryDisplay);
