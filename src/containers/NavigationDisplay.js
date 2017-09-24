// @flow
import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../actions/category-actions';
import NavBar from '../components/NavBar';
import type { Action, SetActiveCategory } from 'action-types';
import type { CategoryState } from 'store-types';

type Props = {
  categories: CategoryState,
  setActiveCategory: (category: string) => SetActiveCategory
}

class NavigationDisplay extends Component<Props> {
  render() {
    return (
      <NavBar
        categories={this.props.categories}
       />
    )
  }
}

const mapStateToProps = ({ categories }: StoreState) => ({
  categories
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Dispatch<Action> =>  {
  return {
  setActiveCategory: (category: CategoryName): SetActiveCategory => dispatch(setActiveCategory(category))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
