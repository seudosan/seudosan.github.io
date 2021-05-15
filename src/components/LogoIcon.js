import React from 'react';

import Icon from '../icons/logo-icon.svg';
import IconLetter from '../icons/letter-logo.svg';
import './styles/LogoIcon.css';

const SIZES = ['small', 'large'];

const LogoIcon = ({ size }) => {
  const checkIconSize = SIZES.includes(size) ? size : SIZES[0];

  return (
    <div className="LogoIcon">
      <img
        className='LogoIcon__logo' 
        src={Icon} 
        alt="Seudosan icon"
      />
      {checkIconSize !== 'small' && 
        <img
          className='LogoIcon__letter' 
          src={IconLetter}
          alt="Seudosan icon"
        />
      }
    </div>
  )
} 

export default LogoIcon;
