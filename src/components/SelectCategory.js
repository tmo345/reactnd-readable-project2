// @flow
import React from 'react';
import styled from 'styled-components';
import type { CategoryName, Category } from 'store-types'
import FilterLink from '../containers/FilterCategoryLink.js';
import { Button } from 'semantic-ui-react';

type Props = {
  categories: Array<Category>,
  getPostsByCategory: (category: CategoryName) => Dispatch<*>,
}

const Categories = styled.div`
  //display: flex;
  text-align: left;
`

const Heading = styled.h3`
  padding-left: 16px;
`

const FilterList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`
const FilterItem = styled.li`
  display: inline-block;
  margin-right: 7.5px;
  margin-bottom: 7.5px;
`

const ButtonText = styled.span`
  font-size: 1rem;
  text-transform: capitalize;
`

const SelectCategory = (props: Props) => {

  return (
    <Categories>
      <Heading>Choose Category:</Heading>
      <FilterList>

          {props.categories.map((category) => (

          <FilterItem
            key={category.name}
            onClick={() => props.getPostsByCategory(category.name)}
          >
            <FilterLink categoryFilter={category.path}>
              <Button color={category.active ? 'blue' : 'grey'} size='medium'>
                <ButtonText>{category.name}</ButtonText>
              </Button>
            </FilterLink>
          </FilterItem>
          ))}
      </FilterList>
    </Categories>
    )
}

export default SelectCategory;
