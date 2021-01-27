import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ProgressCircle from './ProgressCircle';
import { Exit } from '../Icons/Icons';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 1400px;
  width: 100%;
  z-index: 10;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  background-color: white;
  box-shadow: 0px 3.22581px 8.06452px rgba(0, 0, 0, 0.25);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 650px) {
    transform: scale(0.8);
    top: 15px;
    right: 20px;
  }
`;

export interface ProgressI {
  color: string;
  progress: number;
}

const Progress = (props: ProgressI) => {
  const Router = useRouter();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Container>
      <Wrapper
        onClick={() => Router.push('/')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Exit size={isHovered ? 'medium' : 'small'} />
        <ProgressCircle {...props} />
      </Wrapper>
    </Container>
  );
};

export default Progress;
