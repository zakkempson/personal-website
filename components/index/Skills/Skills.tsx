import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../../hooks/useWindowSize';
import Skill, { SkillI } from './Skill';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const skills: SkillI[] = [
  {
    title: 'Research',
    icon: 'research',
    description:
      'No.1 reason for product failure is not making what users want.  My first step is to deeply understand the humans we are building for, using existing info or by conducting new UX research.',
  },
  {
    title: 'Business',
    icon: 'business',
    description:
      'No.1 reason for product failure is not making what users want.  My first step is to deeply understand the humans we are building for, using existing info or by conducting new UX research.',
  },
  {
    title: 'Design',
    icon: 'design',
    description:
      'No.1 reason for product failure is not making what users want.  My first step is to deeply understand the humans we are building for, using existing info or by conducting new UX research.',
  },
  {
    title: 'Build',
    icon: 'build',
    description:
      'No.1 reason for product failure is not making what users want.  My first step is to deeply understand the humans we are building for, using existing info or by conducting new UX research.',
  },
];

const Skills = () => {
  const { isMobile } = useWindowSize();

  if (isMobile) {
    return null;
  }

  return (
    <Wrapper>
      {skills.map((skill) => (
        <Skill {...skill} key={skill.title} />
      ))}
    </Wrapper>
  );
};

export default Skills;
