import React, { ReactNode } from 'react';
import { Container, H3 } from '../../styles/styles';
import styled from 'styled-components';
import { ResponsiveContext } from '../../pages/_app';

interface CaseStudySectionI {
  name: string;
  children?: ReactNode;
  color?: string;
}

type NameI = Pick<CaseStudySectionI, 'color'>;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 5rem;

  @media (max-width: 630px) {
    padding-bottom: 2rem;
  }
`;

const Name = styled.div<NameI>`
  padding: 1.4rem;
  border-bottom: 3px solid ${(props) => props.color};
  height: 100%;
  position: sticky;
  top: 0px;
  width: 15vw;
  text-align: right;
  background-color: white;

  @media (max-width: 1240px) {
    flex-basis: 100%;
    text-align: left;

    h3 {
      padding-left: 1rem;
    }
  }
`;

const CaseStudySection = (props: CaseStudySectionI) => {
  const { name, color = 'white', children } = props;
  const { width } = React.useContext(ResponsiveContext);
  return (
    <Wrapper>
      <Name color={color}>
        <H3 style={{ margin: '0' }}>{name}</H3>
      </Name>
      <Container
        width={'narrow'}
        style={{ paddingTop: '3rem', width: '900px' }}
        align={width <= 1240 ? 'center' : 'left'}
      >
        {children}
      </Container>
    </Wrapper>
  );
};

export default CaseStudySection;
