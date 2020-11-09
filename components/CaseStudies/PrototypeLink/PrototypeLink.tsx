import React from 'react';
import { CaseStudyI } from '../../../pages/case-studies/[slug]';
import styled from 'styled-components';
import { Icon } from '../../Icons/Icons';
import { H3, Paragraph } from '../../../styles/styles';

type PrototypeLinkI = Pick<
  CaseStudyI,
  'processPrototypeURL' | 'processPrototypeThumbnail'
>;

const Wrapper = styled.a<PrototypeLinkI>`
  max-width: 370px;
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),
    url(${(props) => props.processPrototypeThumbnail?.url});
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  cursor: ${(props) => (props.processPrototypeURL ? 'pointer' : 'inherit')};

  &:hover {
    box-shadow: 0px 3px 15px 2px rgba(0, 0, 0, 0.3);
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)),
      url(${(props) => props.processPrototypeThumbnail?.url});
    background-size: cover;
  }
`;

const ContentWrapper = styled.div``;

const PrototypeLink = (props: PrototypeLinkI) => {
  if (!props.processPrototypeThumbnail?.url) {
    return null;
  }

  return (
    <Wrapper {...props} href={props.processPrototypeURL} target='__blank'>
      <ContentWrapper>
        <Paragraph size='large' inverted style={{ opacity: 0 }}>
          View prototype
        </Paragraph>
        <Icon name='play' />
        <Paragraph size='large' inverted>
          View prototype
        </Paragraph>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PrototypeLink;
