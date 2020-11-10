import Link from 'next/link';
import React from 'react';
import { Paragraph, H3, Detail } from '../../../styles/styles';
import styled from 'styled-components';
import { CaseStudyI } from '../../../pages/case-studies/[slug]';
import { ResponsiveContext } from '../../../pages/_app';

export type CaseStudyListItemI = Pick<
  CaseStudyI,
  'title' | 'slug' | 'description' | 'coverImage' | 'roles' | 'color'
>;

interface ListItemImageI {
  color: string;
}

const ListItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  cursor: pointer;
  padding: 2.4rem 0rem;
  border-top: 1px solid #eeeeee;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 630px) {
    padding: 1.4rem 0rem;
  }
`;

const ListItemTitle = styled.div`
  flex: 1;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 630px) {
    padding-top: 0.5rem;
  }
`;

const ListItemDescription = styled.div`
  flex: 1;
`;

const ListItemImage = styled.div<ListItemImageI>`
  flex: 1;
  margin: 0rem 1rem;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};

  @media (max-width: 630px) {
    margin: 0;
    flex-basis: 100%;
  }
`;

const FeatureImage = styled.img`
  max-height: 250px;
  max-width: 100%;
  object-fit: cover;
`;

const CaseStudyListItem = (props: CaseStudyListItemI) => {
  const { title, slug, description, coverImage, color } = props;

  const { width } = React.useContext(ResponsiveContext);

  return (
    <Link href={`/case-studies/${slug}`}>
      <ListItemWrapper>
        <ListItemTitle>
          <H3>{title}</H3>
          <Detail style={{ opacity: 0.8 }}>{props.roles.join(', ')}</Detail>
        </ListItemTitle>
        {width > 800 && (
          <ListItemDescription>
            <Paragraph>{description}</Paragraph>
          </ListItemDescription>
        )}
        <ListItemImage color={color?.hex}>
          <FeatureImage src={coverImage?.url} alt='Cover image' />
        </ListItemImage>
      </ListItemWrapper>
    </Link>
  );
};

export default CaseStudyListItem;
