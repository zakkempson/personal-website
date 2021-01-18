import React from 'react';

interface NameI {
  inverted?: boolean;
}

const Name = (props: NameI) => {
  return (
    <svg
      width='100%'
      viewBox='0 0 381 178'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>Zak</title>
      <g filter='url(#filter0_diiiii)'>
        <path
          d='M25 44C92 41.5 148.5 36.8724 219.039 36.8724C226.912 37.3482 177.03 65.2603 171.525 68.5811C121.405 98.8148 53.0954 133.5 11 167C56.5954 164 102 153.553 159.021 144.112C166.814 142.229 250.469 129.642 250.835 123.448C251.083 119.246 253.089 104.38 250.12 101.715C247.042 98.9522 234.94 100.998 231.543 101.715C217.973 104.578 213.277 118.935 210.465 130.93C207.664 142.881 207.046 162.562 225.113 153.553C238.557 146.849 244.404 126.288 244.404 112.403C244.404 104.441 247.354 114.005 248.155 116.322C252.483 128.838 260.491 142.341 269.948 151.772C295.044 176.8 289.418 87.6446 289.418 78.9132C289.418 58.1897 289.418 37.4662 289.418 16.7427C289.418 -0.865353 293.908 27.4206 294.241 29.7468C296.999 48.998 300.692 68.4352 302.279 87.8201C302.699 92.9461 302.93 132.893 307.281 118.638C310.551 107.921 325.494 81.7634 338.719 81.7634C345.348 81.7634 325.666 84.9844 319.963 88.3546C313.815 91.9879 305.318 96.4389 301.029 102.428C299.028 105.221 327.909 113.787 328.537 114.007C342.572 118.924 358.964 122.261 369.8 133.067'
          stroke={props.inverted ? 'white' : '#FF9E52'}
          strokeWidth={props.inverted ? '5' : '8.8'}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <filter
          id='filter0_diiiii'
          x='0.794739'
          y='0.794922'
          width='379.21'
          height='176.41'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='2.35479' />
          <feGaussianBlur stdDeviation='0.840996' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'
          />
          <feBlend mode='overlay' in2='shape' result='effect2_innerShadow' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-2.01839' />
          <feGaussianBlur stdDeviation='2.52299' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'
          />
          <feBlend
            mode='overlay'
            in2='effect2_innerShadow'
            result='effect3_innerShadow'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='0.672797' />
          <feGaussianBlur stdDeviation='0.840996' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0'
          />
          <feBlend
            mode='overlay'
            in2='effect3_innerShadow'
            result='effect4_innerShadow'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='-2.69119' />
          <feGaussianBlur stdDeviation='0.840996' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
          />
          <feBlend
            mode='overlay'
            in2='effect4_innerShadow'
            result='effect5_innerShadow'
          />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='3.02759' />
          <feGaussianBlur stdDeviation='0.840996' />
          <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
          />
          <feBlend
            mode='overlay'
            in2='effect5_innerShadow'
            result='effect6_innerShadow'
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Name;
