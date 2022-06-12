import React from 'react';
export const ShoppingIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px',
}) => {
  // Picked this icon from iconfinder
  return (
    <svg height={height} viewBox="0 0 48 48" width={width}
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h48v48h-48z" fill="none" />
      <path d="M38 12h-4c0-5.52-4.48-10-10-10s-10 4.48-10 10h-4c-2.21 0-3.98 1.79-3.98 4l-.02 24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4v-24c0-2.21-1.79-4-4-4zm-14-6c3.31 0 6 2.69 6 6h-12c0-3.31 2.69-6 6-6zm0 20c-5.52 0-10-4.48-10-10h4c0 3.31 2.69 6 6 6s6-2.69 6-6h4c0 5.52-4.48 10-10 10z" />
    </svg>
  );
};
