import React from 'react';
export const MallIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px',
}) => {
  // Picked this icon from iconfinder
  return (
    <svg height={height} viewBox="0 0 48 48" width={width}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48h-48z" fill="none" />
      <path d="M40 8h-32v4h32v-4zm2 20v-4l-2-10h-32l-2 10v4h2v12h20v-12h8v12h4v-12h2zm-18 8h-12v-8h12v8z" />
    </svg>
  );
};
