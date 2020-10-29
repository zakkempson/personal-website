import React from 'react';
import styled from 'styled-components';
import { Detail, Paragraph, SubTitle } from '../../../styles/styles';

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
  transition: background-color 0.1s ease-out;

  &:not(:last-child) {
    border-right: none;
  }

  &:hover {
    background-color: #ff9e52;
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

  transition: top 0.1s ease-out;
`;

const Description = styled.div<WrapperI>`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translateX(-50%) translateY(-50%);
  opacity: ${(props) => (props.isHovered ? '1' : '0')};
  width: 90%;
  max-height: 22%;
  overflowy: hide;

  transition: opacity 0.3s ease-in-out;
`;

const Skill = (props: SkillI) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Title isHovered={isHovered}>
        <SubTitle inverted={isHovered}>b</SubTitle>
        <Paragraph inverted={isHovered}>{props.title}</Paragraph>
      </Title>
      <Description isHovered={isHovered}>
        <Detail inverted>{props.description}</Detail>
      </Description>
    </Wrapper>
  );
};

export default Skill;
