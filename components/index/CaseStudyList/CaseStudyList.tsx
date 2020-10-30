import React from 'react';
import CaseStudyListItem, { CaseStudyListItemI } from './CaseStudyListItem';

interface CaseStudyListI {
  caseStudies: CaseStudyListItemI[];
}

const CaseStudyList = (props: CaseStudyListI) => {
  return (
    <div>
      {props.caseStudies.map((cs) => (
        <CaseStudyListItem {...cs} key={cs.slug} />
      ))}
    </div>
  );
};

export default CaseStudyList;
