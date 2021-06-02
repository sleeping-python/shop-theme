import React from 'react';
import Router from 'next/router';
import { LogoBox, LogoImage, LogoTitle } from './logo.style';
type LogoProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
  showLogo?: boolean;
};

const Logo: React.FC<LogoProps> = ({ imageUrl, alt, showLogo, onClick }) => {
  function onLogoClick() {
    Router.push('/');
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick}>
      {showLogo && <LogoImage src={imageUrl} alt={alt} /> }
      <LogoTitle>Tranten</LogoTitle>
    </LogoBox>
  );
};

export default Logo;
