import React from 'react';
import { Container, Detail, Divider, H3, Paragraph } from '../../styles/styles';
import styled from 'styled-components';
import { CaseStudyI } from '../../pages/case-studies/[slug]';
import { Date, DateDuration } from '../date';

const Description = styled.div`
  display: flex;
`;

const DescriptionItem = styled.div`
  flex: 1;
`;

const HR = styled.hr`
  margin-top: 2rem;
`;

const Details = (props: CaseStudyI) => {
  return (
    <Container
      width={'narrow'}
      style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
    >
      <Paragraph size='large'>{props.description}</Paragraph>
      <Description style={{ marginTop: '2rem' }}>
        <DescriptionItem>
          <H3>My roles:</H3>
          <Detail>{props.roles.join(', ')}</Detail>
        </DescriptionItem>
        <Divider />
        <DescriptionItem>
          <H3>Duration:</H3>
          <Detail>
            <DateDuration
              startDateString={props.startDate}
              endDateString={props.endDate}
            />
            <i>
              {'  '}
              (<Date dateString={props.startDate} specificity='month' /> -{' '}
              <Date dateString={props.endDate} specificity='month' />)
            </i>
          </Detail>
        </DescriptionItem>
      </Description>
      <HR />
    </Container>
  );
};

export default Details;
