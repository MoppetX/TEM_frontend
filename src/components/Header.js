// import { Link } from '@reach/router';
import React from 'react';

import '../assets/CSS/components/Header.css';
import { MenuIcon } from '../assets/SVG/svg';

const Header = () => {
  return (
    <header>
      <h1 className={'hidden'}>The Eternal Menu</h1>

      <div className="main-menu">
        <div>
          <strong>TEM</strong>
          <MenuIcon />
        </div>
      </div>

      {/*<div className="site-branding">*/}
      {/*  <Link to={'/'}>*/}
      {/*    TEM*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </header>
  );
};

export default Header;
