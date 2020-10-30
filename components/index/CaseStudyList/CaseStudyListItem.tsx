import Link from 'next/link';
import React from 'react';
import { Paragraph, SubTitle, Title } from '../../../styles/styles';
import styled from 'styled-components';

export interface CaseStudyListItemI {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: {
    url: string;
  };
}

const ListItemWrapper = styled.div`
  display: flex;
  cursor: pointer;
  padding: 2.4rem 0rem;
  border-top: 1px solid #d0d0d0;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 0.7;
  }
`;

const ListItemTitle = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

const ListItemDescription = styled.div`
  flex: 1;
`;

const ListItemImage = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const FeatureImage = styled.img`
  max-height: 250px;
  max-width: 450px;
  object-fit: cover;
`;

const CaseStudyListItem = (props: CaseStudyListItemI) => {
  const { title, slug, excerpt, coverImage } = props;

  return (
    <Link href={`/${slug}`}>
      <ListItemWrapper>
        <ListItemTitle>
          <SubTitle>{title}</SubTitle>
        </ListItemTitle>
        <ListItemDescription>
          <Paragraph>{excerpt}</Paragraph>
        </ListItemDescription>
        <ListItemImage>
          <FeatureImage src={coverImage?.url} alt='Cover image' />
        </ListItemImage>
      </ListItemWrapper>
    </Link>
  );
};

export default CaseStudyListItem;
