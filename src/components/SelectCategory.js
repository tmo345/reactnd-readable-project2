// @flow
import React from 'react';
import styled from 'styled-components';
import type { CategoryName, Category } from 'store-types'
import FilterLink from '../containers/FilterCategoryLink.js';
import { Button } from 'semantic-ui-react';

type Props = {
  categories: Array<Category>,
  setActiveCategory: (category: CategoryName) => void
}

const Categories = styled.div`
  display: flex;
  text-align: left;
`

const Heading = styled.h3`
  padding-top: 20px;
  padding-left: 16px;
`

const FilterList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`
const FilterItem = styled.li`
  display: inline-block;
  margin-right: 10px;
`


const SelectCategory = (props: Props) => {
  const setActiveCategory = props.setActiveCategory;

  return (
    <Categories>
      <Heading>Choose Category:</Heading>
      <FilterList>

        <Button.Group color="blue">
          {props.categories.map((category) => (

          <FilterItem
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
          >
            <FilterLink categoryFilter={category.path}>
              <Button compact>{category.name}</Button>
            </FilterLink>
          </FilterItem>

          ))}
        </Button.Group>
      </FilterList>
    </Categories>
    )
}

export default SelectCategory;
