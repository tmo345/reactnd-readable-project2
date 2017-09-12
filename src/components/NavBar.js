import React from 'react';
import Logo from './Logo';
import SelectCategory from './SelectCategory'


const NavBar = (props) => {
  return (
    <div>
        <Logo />

      <SelectCategory categories={props.categories} />

    </div>

  )
}

export default NavBar;
