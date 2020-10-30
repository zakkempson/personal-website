import React from 'react';

interface ExitI {
  size?: 'small' | 'medium';
}

export const Exit = (props: ExitI) => {
  const { size = 'small' } = props;

  return (
    <svg
      width='100%'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        width: size === 'small' ? '34px' : '42px',
        transition: 'width 0.2s ease-out',
      }}
    >
      <rect
        x='9.24707'
        y='11.1387'
        width='2.60613'
        height='28.011'
        transform='rotate(-45 9.24707 11.1387)'
        fill='#3A3441'
      />
      <rect
        x='29.0537'
        y='9.05469'
        width='2.60613'
        height='28.011'
        transform='rotate(45 29.0537 9.05469)'
        fill='#3A3441'
      />
    </svg>
  );
};
