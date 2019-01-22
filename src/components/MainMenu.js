import React from 'react';
import navigation from '../data/navigation';
import LinkLi from './LinkLi';

function MainMenu() {
  return (
    <nav>
      <ul className="TopNav_Style-0001">
        {navigation.main.map(menuItem => (
          <LinkLi
            key={menuItem.id}
            {...menuItem}
            className="TopNav_Style-0003"
            activeClassName="TopNav_Style-current"
          >
            {menuItem.text}
          </LinkLi>
        ))}
      </ul>
    </nav>
  );
}

export default MainMenu;
