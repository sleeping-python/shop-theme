import React from 'react';
export const ShareIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px',
}) => {
  // Picked this icon from iconfinder
  return (
    <svg height={height} viewBox="0 0 24 24" width={width}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <polyline fill="none" points="16 6 12 2 8 6" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
};
