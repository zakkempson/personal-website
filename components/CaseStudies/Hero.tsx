import React from 'react';
import styled from 'styled-components';
import { CaseStudyI } from '../../pages/case-studies/[slug]';
import { SubTitle } from '../../styles/styles';
import Name from '../Name';

type HeroProps = CaseStudyI['color'];

const HeroWrapper = styled.section<HeroProps>`
  height: 70vh;
  background-color: ${(props) => props.hex};
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 850px) {
    height: 100vh;
    align-items: flex-start;
  }
`;

const TitleContainer = styled.div<HeroProps>`
  z-index: 10;
  padding: 2rem;
  width: 1400px;
  margin: auto;
  text-shadow: 2px 2px ${(props) => props.hex};

  @media (max-width: 850px) {
    margin: 5rem 0;
  }
`;

const NameContainer = styled.div`
  position: absolute;
  left: 6%;
  top: 6%;
  width: 400px;
  opacity: 0.2;

  @media (max-width: 850px) {
    width: 220px;
  }
`;

const FeatureImage = styled.img`
  position: absolute;
  right: 50%;
  transform: translateX(120%);
  width: 480px;

  @media (max-width: 850px) {
    width: 80%;
    max-width: 480px;
    transform: translateX(50%);
    bottom: 5%;
  }
`;

const Hero = (props: CaseStudyI) => {
  return (
    <HeroWrapper hex={props?.color?.hex}>
      <TitleContainer hex={props?.color?.hex}>
        <SubTitle inverted style={{ maxWidth: '600px' }}>
          {props.title}
        </SubTitle>
      </TitleContainer>
      <NameContainer>
        <Name inverted />
      </NameContainer>
      <FeatureImage src={props.coverImage.url} />
    </HeroWrapper>
  );
};

export default Hero;
