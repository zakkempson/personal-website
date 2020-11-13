import React from 'react';
import { CaseStudyI } from '../../pages/case-studies/[slug]';
import { SubTitle } from '../../styles/styles';
import CaseStudyList from '../index/CaseStudyList/CaseStudyList';

interface OtherCaseStudiesI {
  caseStudies: CaseStudyI[];
}

const OtherCaseStudies = (props: OtherCaseStudiesI) => {
  return (
    <div>
      <SubTitle>Other case studies:</SubTitle>
      <CaseStudyList caseStudies={props.caseStudies} />
    </div>
  );
};

export default OtherCaseStudies;
