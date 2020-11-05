import React from 'react';
import styled from 'styled-components';
import { ButtonContext } from './Button';

interface WaveWrapperI {
  isHovered?: boolean;
}

const WaveWrapper = styled.div<WaveWrapperI>`
  margin-right: 8px;
  float: left;
  font-size: 1.4rem;
  transform: rotate(-40deg);

  ${({ isHovered }) =>
    isHovered &&
    `
  animation-name: wave-animation;
  animation-duration: 1.6s;
  animation-iteration-count: 1;
  transform-origin: 40% 50%;

`}
  @keyframes wave-animation {
    0% {
      transform: rotate(-40deg);
    }
    10% {
      transform: rotate(-26deg) scale(1.3);
    }
    20% {
      transform: rotate(-54deg) scale(1.3);
    }
    30% {
      transform: rotate(-24deg) scale(1.3);
    }
    40% {
      transform: rotate(-58deg) scale(1.3);
    }
    50% {
      transform: rotate(-20deg) scale(1.3);
    }
    60% {
      transform: rotate(-54deg) scale(1.3);
    }
    70% {
      transform: rotate(-28deg) scale(1.3);
    }
    100% {
      transform: rotate(-40deg);
    }
  }
`;

const Wave = () => {
  const { isHovered } = React.useContext(ButtonContext);

  return <WaveWrapper isHovered={isHovered}>✋</WaveWrapper>;
};

export default Wave;
