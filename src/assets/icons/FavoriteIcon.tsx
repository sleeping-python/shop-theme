import React from 'react';
export const FavoriteIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px',
}) => {
  // Picked this icon from iconfinder
  return (
    <svg height={height} viewBox="0 0 24 24" width={width}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M16.4,6c2,0,3.6,1.6,3.6,3.6c0,2-3.9,6.4-8,9.8c-4.1-3.5-8-7.9-8-9.8C4,7.6,5.6,6,7.6,6C10,6,12,9,12,9S13.9,6,16.4,6   M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4L16.4,4z" />
    </svg>
  );
};
