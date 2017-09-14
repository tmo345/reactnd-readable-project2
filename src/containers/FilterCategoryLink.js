// @flow
/**
*  Based on example in redux docs example using Links to
*  filter todos
*  http://redux.js.org/docs/advanced/UsageWithReactRouter.html
*/
import React from 'react';
import { Link  } from 'react-router-dom';

const CategoryFilterLink = ({ categoryFilter, children }) => (
  <Link
    to={categoryFilter}>
    {children}
  </Link>
)

export default CategoryFilterLink;
