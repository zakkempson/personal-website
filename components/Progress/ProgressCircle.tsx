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
    <SVG
      viewBox='0 0 40 40'
      width='80px'
      height='80px'
      className='circle-progress'
    >
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
    </SVG>
  );
};

export default ProgressCircle;
