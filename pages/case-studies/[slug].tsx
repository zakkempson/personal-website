import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CaseStudyListItemI } from '../../components/index/CaseStudyList/CaseStudyListItem';
import {
  Container,
  Detail,
  H3,
  Paragraph,
  SubTitle,
} from '../../styles/styles';
import styled from 'styled-components';
import Progress from '../../components/Progress/Progress';
import React from 'react';
import Name from '../../components/Name';
import { Date, DateDuration } from '../../components/date';
import CaseStudySection from '../../components/CaseStudies/CaseStudySection';
import ReactMarkdown from 'react-markdown';
import Testimonial, {
  TestimonialI,
} from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer';
import ContactSection from '../../components/Contact/ContactSection';
import PrototypeLink from '../../components/CaseStudies/PrototypeLink/PrototypeLink';

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
  roles: string[];
  startDate: string;
  endDate: string;
  problemText: string;
  problemGallery: { url: string }[];
  processText: string;
  processGallery: { url: string }[];
  processPrototypeURL?: string;
  processPrototypeThumbnail?: { url: string };
  buildText: string;
  outcomeText: string;
  outcomeGallery: { url: string }[];
  whatILearned: string;
  testimonial?: TestimonialI;
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
  width: 1400px;
  margin: auto;
`;

const NameContainer = styled.div`
  position: absolute;
  left: 6%;
  top: 12%;
  width: 400px;
  opacity: 0.2;
`;

const FeatureImage = styled.img`
  position: absolute;
  right: 50%;
  transform: translateX(120%);
  width: 480px;
`;

const Description = styled.div`
  display: flex;
`;

const DescriptionItem = styled.div`
  flex: 1;
`;

const HR = styled.hr`
  margin-top: 2rem;
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
            <SubTitle inverted style={{ maxWidth: '600px' }}>
              {props.title}
            </SubTitle>
          </TitleContainer>
          <NameContainer>
            <Name inverted />
          </NameContainer>
          <FeatureImage src={props.coverImage.url} />
        </Hero>
        <Container width={'narrow'} style={{ padding: '3rem 0 5rem 0' }}>
          <Paragraph size='large'>{props.description}</Paragraph>
          <Description style={{ marginTop: '2rem' }}>
            <DescriptionItem>
              <H3>My roles:</H3>
              <Detail>{props.roles.join(', ')}</Detail>
            </DescriptionItem>
            <DescriptionItem>
              <H3>Duration:</H3>
              <Detail>
                <DateDuration
                  startDateString={props.startDate}
                  endDateString={props.endDate}
                />
                <i>
                  {'  '}
                  (<Date
                    dateString={props.startDate}
                    specificity='month'
                  /> - <Date dateString={props.endDate} specificity='month' />)
                </i>
              </Detail>
            </DescriptionItem>
          </Description>
          <HR />
        </Container>
        <div>
          <CaseStudySection name='Problem' color={props.color.hex}>
            <ReactMarkdown allowDangerousHtml>
              {props.problemText}
            </ReactMarkdown>
            {props.problemGallery?.map((p, i) => (
              <img src={p.url} key={i} />
            ))}
          </CaseStudySection>
          <CaseStudySection name='Design' color={props.color.hex}>
            <ReactMarkdown allowDangerousHtml>
              {props.processText}
            </ReactMarkdown>
            <PrototypeLink {...props} />
            {props.processGallery?.map((p, i) => (
              <img src={p.url} key={i} />
            ))}
          </CaseStudySection>
          <CaseStudySection name='Build' color={props.color.hex}>
            <ReactMarkdown allowDangerousHtml>{props.buildText}</ReactMarkdown>
          </CaseStudySection>
          <CaseStudySection name='Outcome' color={props.color.hex}>
            <ReactMarkdown allowDangerousHtml linkTarget='__blank'>
              {props.outcomeText}
            </ReactMarkdown>
            {props.outcomeGallery?.map((p, i) => (
              <img src={p.url} key={i} />
            ))}
          </CaseStudySection>
          <CaseStudySection name='What I Learned' color={props.color.hex}>
            <ReactMarkdown allowDangerousHtml>
              {props.whatILearned}
            </ReactMarkdown>
          </CaseStudySection>
        </div>
        <Container>
          <Testimonial {...props.testimonial} color={props.color.hex} />
        </Container>
      </article>
      <ContactSection />
      <Footer />
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
				},
				roles,
				startDate,
				endDate,
				problemText,
				problemGallery {
				  	url
				},
				processText,
				processGallery {
					url
				},
				processPrototypeURL,
				processPrototypeThumbnail {
					url
				},
				buildText,
				outcomeText,
				outcomeGallery {
					url
				  },
				whatILearned,
				testimonial {
					name,
					description,
					role,
					brand {
						name
							logo {
						url
						},
					},
					linkedInUrl,
					twitterUrl,
					avatar {
						url,
					}
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
