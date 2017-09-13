import React from 'react';
import styled from 'styled-components';
import { Menu, Dropdown } from 'semantic-ui-react';

type Props = {
  categories: Array<string>,

}

const SelectCategory = (props: Props): ReactElement => {
  const { dropdownOpen, active } = props.categoryUI;
  const toggleCategorySelect = props.toggleCategorySelect;
  const setActiveCategory = props.setActiveCategory;

  const options = props.categories.map((category) => ({
    value: category.name,
    text: category.name
  }))

  return (
      <div>
        <p>Choose Category</p>
          <Dropdown
            selection
            onClick={() => toggleCategorySelect()}
            closeOnBlue={true}
            value={props.categoryUI.active}
            // defaultValue={active}
            text={props.categoryUI.active}
            open={dropdownOpen}
            options={options}
            onChange={(e, data) => setActiveCategory(data)}
          />
            {/* <Dropdown.Menu
              value={active}
            >
              { props.categories.map((category) => (
                <Dropdown.Item
                  value={category.name}
                  key={category.name}>{category.name}</Dropdown.Item>

              ))}
            </Dropdown.Menu> */}
        {/* </Dropdown> */}

      </div>
  )
}

export default SelectCategory;
