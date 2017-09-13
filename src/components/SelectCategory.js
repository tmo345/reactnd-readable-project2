import React from 'react';
import styled from 'styled-components';

type Props = {
  categories: Array<string>,

}

const CategoryList = styled.ul`
  list-style-type: none;
  display: flex;
`

const CategoryOption = styled.li`
  display: inline-block;
  width: 23%;
`

const SelectCategory = (props: Props): ReactElement => {
  return (
      <div>
        <p>Choose Category</p>
          <CategoryList>
            <CategoryOption key='all'><a href='/'>All</a></CategoryOption>
            { props.categories.map((category) => (
              <CategoryOption key={category.get('name')}><a href={category.get('path')} >{category.get('name')}</a></CategoryOption>
            ))}
          </CategoryList>

      </div>
  )
}

export default SelectCategory;
