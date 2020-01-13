import React from 'react';
import { Link } from '@reach/router';

import '../assets/CSS/components/Header.css';
import { MenuIcon } from '../assets/SVG/svg';

const Header = () => {
  return (
    <header>
      <h1 className={'hidden'}>The Eternal Menu</h1>

      <Link to={'/'} className="main-menu">
        <div>
          <strong>TEM</strong>
          <MenuIcon />
        </div>
      </Link>
    </header>
  );
};

export default Header;
