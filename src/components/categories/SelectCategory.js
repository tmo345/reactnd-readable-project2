import React, { Component } from 'react';
import styled from 'styled-components';
import FilterLink from './FilterCategoryLink.js';
import { Button } from 'semantic-ui-react';

const Categories = styled.div`
  //display: flex;
  text-align: left;
`;

const Heading = styled.h3`
  padding-left: 0;
  margin-top: 0;
`;

const FilterList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  ${'' /* padding-left: 20px; */};
`;
const FilterItem = styled.li`
  display: inline-block;
  width: 45%;
  margin-right: 7.5px;
  margin-bottom: 7.5px;
`;

const ButtonText = styled.span`
  font-size: 1rem;
  text-transform: capitalize;
`;

class SelectCategory extends Component {
  render() {
    return (
      <Categories>
        <Heading>Choose Category:</Heading>
        <FilterList>
          {this.props.categories.map(category => (
            <FilterItem key={category.name}>
              <FilterLink categoryFilter={category.path}>
                <Button
                  fluid
                  color={
                    this.props.activeCategory === category.name
                      ? 'blue'
                      : 'grey'
                  }
                  size="medium"
                >
                  <ButtonText>{category.name}</ButtonText>
                </Button>
              </FilterLink>
            </FilterItem>
          ))}
        </FilterList>
      </Categories>
    );
  }
}

export default SelectCategory;
