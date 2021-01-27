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
      'The No.1 reason for product failure is not making what people want.  My first step is to deeply understand the humans we are building for, using existing or new research.',
  },
  {
    title: 'Business',
    icon: 'business',
    description:
      'The best tool we have created (so far) for harnessing human ambition for good is capitalism. For a design to do good, it must be economical as well as functional and beautuful.',
  },
  {
    title: 'Design',
    icon: 'design',
    description:
      'For me, design is a synthesis of human needs & behaviours, STEM fields, arts and economics. I learn deeply about each ingredient in order to find more useful combinations.',
  },
  {
    title: 'Build',
    icon: 'build',
    description: `Should designers code? In my experience, understanding how designs will be brought to life helps to bring product teams closer and results in a better end product.`,
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
