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
  setActiveCategory: (category: string) => Dispatch<Action>
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

const mapStateToProps = ({ categories, categoryUI }) => ({
  categories,
  categoryUI
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): Dispatch<Action> =>  {

  return {
  setActiveCategory: (category: string) => dispatch(setActiveCategory(category))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
