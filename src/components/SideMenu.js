import React from 'react';
import navigation from '../data/navigation';
import LinkLi from './LinkLi';

function SideMenu() {
  return (
    <nav>
      <ul className="LeftNav_Style-0001">
        {navigation.side.map(menuItem => (
          <LinkLi
            key={menuItem.id}
            {...menuItem}
            className="LeftNav_Style-0003"
            activeClassName="LeftNav_Style-active"
          >
            {menuItem.text}
          </LinkLi>
        ))}
      </ul>
    </nav>
  );
}

export default SideMenu;
