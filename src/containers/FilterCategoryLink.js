
/**
*  Based on example in redux docs example using Links to
*  filter todos
*  http://redux.js.org/docs/advanced/UsageWithReactRouter.html
*/
import * as  React from 'react';
import { Link  } from 'react-router-dom';

const FilterCategoryLink = ({ categoryFilter, children }:
  { categoryFilter: string, children: React.Node }) => (
  <Link
    to={categoryFilter}>
    {children}
  </Link>
)

export default FilterCategoryLink;
