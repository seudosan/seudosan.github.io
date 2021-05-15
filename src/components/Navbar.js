import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';

import HamburgerIcon from '../icons/bars-icon.svg';
import CloseIcon from '../icons/close-icon.svg';

import './styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return <div className="Navbar">
      <div className='Navbar__container'>
        <Link to="/" onClick={closeMobileMenu}>
          <LogoIcon size='large' color='black'/>
        </Link>
        <div className="Navbar__switch" onClick={handleClick}>
            {click ? 
              <img src={CloseIcon} className="Navbar__icon" alt='Navbar menu'/> :
              <img src={HamburgerIcon} className="Navbar__icon" alt='Navbar menu'/>
            }
          </div>
          <ul className={click ? 'Nav-menu Nav-menu--active' : 'Nav-menu'}>
            <li className='Nav-menu__item' title="Home">
              <Link to='/' className='Nav-menu__links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='Nav-menu__item' title="Blogs">
              <Link to='/blogs' className='Nav-menu__links' onClick={closeMobileMenu}>
                Blogs
              </Link>
            </li>
            <li className='Nav-menu__item' title="Projects">
              <Link to='/projects' className='Nav-menu__links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='Nav-menu__item' title="About me">
              <Link to='/about' className='Nav-menu__links' onClick={closeMobileMenu}>
                About me
              </Link>
            </li>
          </ul>
        </div>
  </div>
}

export default Navbar;
