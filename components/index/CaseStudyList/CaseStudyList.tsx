import React from 'react';
import CaseStudyListItem, { CaseStudyListItemI } from './CaseStudyListItem';
import styled from 'styled-components';

interface CaseStudyListI {
  caseStudies: CaseStudyListItemI[];
}

const ListWrapper = styled.div`
  padding-top: 3rem;

  @media (max-width: 630px) {
    padding-top: 1.6rem;
  }
`;

const CaseStudyList = (props: CaseStudyListI) => {
  return (
    <ListWrapper>
      {props.caseStudies?.map((cs) => (
        <CaseStudyListItem {...cs} key={cs.slug} />
      ))}
    </ListWrapper>
  );
};

export default CaseStudyList;
