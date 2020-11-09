import React, { ReactNode } from 'react';
import { Container, H3 } from '../../styles/styles';
import styled from 'styled-components';

interface CaseStudySectionI {
  name: string;
  children?: ReactNode;
  color?: string;
}

type NameI = Pick<CaseStudySectionI, 'color'>;

const Wrapper = styled.div`
  display: flex;
  padding-bottom: 5rem;
`;

const Name = styled.div<NameI>`
  padding: 10px 0;
  border-bottom: 3px solid ${(props) => props.color};
  height: 100%;
  position: sticky;
  top: 10px;
  width: 200px;
  text-align: right;
`;

const CaseStudySection = (props: CaseStudySectionI) => {
  const { name, color = 'white', children } = props;
  return (
    <Wrapper>
      <Name color={color}>
        <H3>{name}</H3>
      </Name>
      <Container width={'narrow'} style={{ paddingTop: '1rem' }}>
        {children}
      </Container>
    </Wrapper>
  );
};

export default CaseStudySection;
