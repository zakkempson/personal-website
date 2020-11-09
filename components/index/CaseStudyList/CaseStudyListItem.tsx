import Link from 'next/link';
import React from 'react';
import { Paragraph, H3, Detail } from '../../../styles/styles';
import styled from 'styled-components';
import { CaseStudyI } from '../../../pages/case-studies/[slug]';

export type CaseStudyListItemI = Pick<
  CaseStudyI,
  'title' | 'slug' | 'description' | 'coverImage' | 'roles' | 'color'
>;

interface ListItemImageI {
  color: string;
}

const ListItemWrapper = styled.div`
  display: flex;
  cursor: pointer;
  padding: 2.4rem 0rem;
  border-top: 1px solid #eeeeee;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 0.7;
  }
`;

const ListItemTitle = styled.div`
  flex: 1;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListItemDescription = styled.div`
  flex: 1;
`;

const ListItemImage = styled.div<ListItemImageI>`
  flex: 1;
  margin: 0rem 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const FeatureImage = styled.img`
  max-height: 250px;
  max-width: 450px;
  object-fit: cover;
`;

const CaseStudyListItem = (props: CaseStudyListItemI) => {
  const { title, slug, description, coverImage, color } = props;

  return (
    <Link href={`/case-studies/${slug}`}>
      <ListItemWrapper>
        <ListItemTitle>
          <H3>{title}</H3>
          <Detail style={{ opacity: 0.8 }}>{props.roles.join(', ')}</Detail>
        </ListItemTitle>
        <ListItemDescription>
          <Paragraph>{description}</Paragraph>
        </ListItemDescription>
        <ListItemImage color={color?.hex}>
          <FeatureImage src={coverImage?.url} alt='Cover image' />
        </ListItemImage>
      </ListItemWrapper>
    </Link>
  );
};

export default CaseStudyListItem;
