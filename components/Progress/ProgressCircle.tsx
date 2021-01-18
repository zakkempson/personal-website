import React from 'react';
import styled from 'styled-components';
import { ProgressI } from './Progress';

const SVG = styled.svg`
  position: absolute;
  left: 6px;
  top: 6px;
`;

const diameter = 34;
const strokeWidth = 4;
const radius = diameter / 2 - strokeWidth / 2;
const circumference = Math.PI * radius * 2;

const ProgressCircle = (props: ProgressI) => {
  const position = Math.max(1 - props.progress, 0);
  return (
    <SVG viewBox='0 0 40 40' width='80px' height='80px'>
      <g filter='url(#filter2)'>
        <circle
          stroke={props.color}
          fill='transparent'
          strokeWidth={strokeWidth}
          cx={diameter / 2}
          cy={diameter / 2}
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: circumference * position,
          }}
        />
      </g>
      <defs>
        <filter
          id='filter2'
          x='-5px'
          y='-5px'
          width='100px'
          height='100px'
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
    </SVG>
  );
};

export default ProgressCircle;
