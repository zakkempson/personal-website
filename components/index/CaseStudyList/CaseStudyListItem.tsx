import Link from 'next/link';
import React from 'react';
import { Paragraph, Title } from '../../../styles/styles';

export interface CaseStudyListItemI {
  title: string;
  slug: string;
  excerpt: string;
}

const CaseStudyListItem = (props: CaseStudyListItemI) => {
  const { title, slug, excerpt } = props;

  return (
    <Link href={`/${slug}`}>
      <div>
        <Title>{title}</Title>
        <Paragraph>{excerpt}</Paragraph>
      </div>
    </Link>
  );
};

export default CaseStudyListItem;
