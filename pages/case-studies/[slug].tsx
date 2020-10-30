import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CaseStudyListItemI } from '../../components/index/CaseStudyList/CaseStudyListItem';
import { SubTitle, Title } from '../../styles/styles';
import styled from 'styled-components';
import Progress from '../../components/Progress/Progress';
import React from 'react';

export interface BrandI {
  name: string;
  logo: {
    url: string;
  };
}

export interface CaseStudyI {
  title: string;
  slug: string;
  description: string;
  coverImage: {
    url: string;
  };
  brand: BrandI;
  color: {
    hex: string;
  };
}

type HeroProps = CaseStudyI['color'];

const Hero = styled.section<HeroProps>`
  height: 70vh;
  background-color: ${(props) => props.hex};
  position: relative;
  display: flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  z-index: 10;
  padding: 2rem;
  max-width: 600px;
`;

const FeatureImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
`;

const CaseStudy = (props: CaseStudyI) => {
  const articleRef = React.useRef<HTMLElement>();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const updateHeight = () => {
      if (!articleRef.current) return;

      const { height } = articleRef.current.getBoundingClientRect();

      setProgress(window.scrollY / (height - window.innerHeight));
    };

    updateHeight();

    window.addEventListener('scroll', updateHeight);
    return () => {
      window.removeEventListener('scroll', updateHeight);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article ref={articleRef}>
        <Progress color={props?.color?.hex} progress={progress} />
        <Hero hex={props?.color?.hex}>
          <TitleContainer>
            <SubTitle inverted>{props.title}</SubTitle>
          </TitleContainer>
          <FeatureImage src={props.coverImage.url} />
        </Hero>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque
          unde officiis, corrupti quam repudiandae iusto tenetur quo eveniet
          minus impedit illo fugit earum, quisquam ad, libero aliquid eligendi!
          Enim.s
        </Title>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque
          unde officiis, corrupti quam repudiandae iusto tenetur quo eveniet
          minus impedit illo fugit earum, quisquam ad, libero aliquid eligendi!
          Enim.s
        </Title>
        <Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure neque
          unde officiis, corrupti quam repudiandae iusto tenetur quo eveniet
          minus impedit illo fugit earum, quisquam ad, libero aliquid eligendi!
          Enim.s
        </Title>
        {/* <div dangerouslySetInnerHTML={{ __html: props.contentHtml }} /> */}
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const graphcms = new GraphQLClient(process.env.GRAPH_ENDPOINT);

  const { caseStudies } = await graphcms.request<{
    caseStudies: Pick<CaseStudyListItemI, 'slug'>[];
  }>(`
	  {
		  caseStudies {
			  slug,
		  }
	  }
	`);

  return {
    paths: caseStudies.map((cs) => ({
      params: {
        slug: cs.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const graphcms = new GraphQLClient(process.env.GRAPH_ENDPOINT);

  const { caseStudy } = await graphcms.request<{ caseStudy: CaseStudyI }>(`
		{
			caseStudy(where: {
				slug: "${context.params?.slug}",
			}) {
				title,
				description,
				slug,
				coverImage {
					url,
				},
				color {
					hex
				}
			}
		}
	  `);

  return {
    props: {
      ...caseStudy,
    },
  };
};

export default CaseStudy;
