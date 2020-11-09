import React from 'react';
import styled from 'styled-components';
import { Detail, Paragraph } from '../../../styles/styles';
import { Icon } from '../../Icons/Icons';

export interface SkillI {
  title: string;
  icon: 'research' | 'business' | 'design' | 'build';
  description: string;
}

interface WrapperI {
  isHovered: boolean;
}

const Wrapper = styled.div`
  border: 1px solid #eeeeee;
  flex: 1;
  position: relative;
  height: 200px;
  transition: background-color 0.1s ease-out, box-shadow 0.2s ease-out;
  overflow: hidden;
  background-color: white;

  &:not(:last-child) {
    border-right: none;
  }

  &:hover {
    cursor: default;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    z-index: 10;
  }
`;

const Title = styled.div<WrapperI>`
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  top: ${(props) => (props.isHovered ? '25%' : '50%')};
  transform: translateX(-50%) translateY(-50%);
  z-index: 10;

  transition: top 0.2s ease-out;
`;

const Description = styled.div<WrapperI>`
  position: absolute;
  left: 50%;
  top: ${(props) => (props.isHovered ? '50%' : '100%')};
  transform: translateX(-50%) translateY(-50%);
  opacity: ${(props) => (props.isHovered ? '1' : '0')};
  width: 90%;
  max-height: 22%;
  overflowy: hide;

  transition: opacity 0.2s ease-in-out, top 0.22s ease-out;
`;

const Skill = (props: SkillI) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Title isHovered={isHovered}>
        <div style={{ marginRight: '1rem' }}>
          <Icon name={props.icon} />
        </div>
        <Paragraph>{props.title}</Paragraph>
      </Title>
      <Description isHovered={isHovered}>
        <Paragraph size='small'>{props.description}</Paragraph>
      </Description>
    </Wrapper>
  );
};

export default Skill;
