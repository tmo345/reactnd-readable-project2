// @flow
import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../actions';
import NavBar from '../components/NavBar';
import type { Action } from 'action-types';

type Props = {
  categories: Array<string>,
  setActiveCategory: (category: string) => void
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
  setActiveCategory: (category: CategoryName) => dispatch(setActiveCategory(category))
};
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDisplay);
