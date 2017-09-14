// @flow
import React from 'react';
import styled from 'styled-components';
import type { CategoryName, Category } from 'store-types'
import CategoryFilterLink from '../containers/FilterCategoryLink.js';

type Props = {
  categories: Array<Category>,
  setActiveCategory: (category: CategoryName) => void
}

const CategorySelection = styled.div`
  display: flex;
  width: 50%;
`

const ChooseHeader = styled.h3`
  width: 50%;
`

const CategoryOptions = styled.ul`
  list-style-type: none;
`
const CategoryOption = styled.li`
  display: inline-block;
`


const SelectCategory = (props: Props) => {
  const setActiveCategory = props.setActiveCategory;

  return (
    <CategorySelection>

      <ChooseHeader>Choose Category:</ChooseHeader>
        <CategoryOptions>
          {props.categories.map((category) => (
          <CategoryOption
            key={category.name}
            onClick={() => setActiveCategory(category.name)}>
              <CategoryFilterLink categoryFilter={category.name}>
              {category.name}
              </CategoryFilterLink>
          </CategoryOption>
          ))}
        </CategoryOptions>
    </CategorySelection>
  )
}

export default SelectCategory;
