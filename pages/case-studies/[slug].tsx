import Head from 'next/head';
import { GraphQLClient } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import { CaseStudyListItemI } from '../../components/index/CaseStudyList/CaseStudyListItem';
import { Container } from '../../styles/styles';
import Progress from '../../components/Progress/Progress';
import React from 'react';
import CaseStudySection from '../../components/CaseStudies/CaseStudySection';
import ReactMarkdown from 'react-markdown';
import Testimonial, {
  TestimonialI,
} from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer';
import ContactSection from '../../components/Contact/ContactSection';
import PrototypeLink from '../../components/CaseStudies/PrototypeLink/PrototypeLink';
import GalleryImage from '../../components/CaseStudies/GalleryImage';
import Gallery from '../../components/CaseStudies/Gallery';
import Hero from '../../components/CaseStudies/Hero';
import Details from '../../components/CaseStudies/Details';
import OtherCaseStudies from '../../components/CaseStudies/OtherCaseStudies';

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

interface CaseStudyPageI {
  caseStudy: CaseStudyI;
  otherCaseStudies: CaseStudyI[];
}

const CaseStudy = (props: CaseStudyPageI) => {
  const { caseStudy, otherCaseStudies } = props;
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
        <title>{caseStudy.title}</title>
      </Head>
      <article ref={articleRef}>
        <Progress color={caseStudy?.color?.hex} progress={progress} />
        <Hero {...caseStudy} />
        <Details {...caseStudy} />
        <div>
          <CaseStudySection name='Problem' color={caseStudy.color.hex}>
            <ReactMarkdown allowDangerousHtml>
              {caseStudy.problemText}
            </ReactMarkdown>
            {caseStudy.problemGallery?.map((p, i) => (
              <img src={p.url} key={i} />
            ))}
          </CaseStudySection>
          <CaseStudySection name='Design' color={caseStudy.color.hex}>
            <ReactMarkdown allowDangerousHtml>
              {caseStudy.processText}
            </ReactMarkdown>
            <Gallery>
              <PrototypeLink {...caseStudy} />
              {caseStudy.processGallery?.map((p, i) => (
                <GalleryImage src={p.url} key={i} />
              ))}
            </Gallery>
          </CaseStudySection>
          <CaseStudySection name='Build' color={caseStudy.color.hex}>
            <ReactMarkdown allowDangerousHtml>
              {caseStudy.buildText}
            </ReactMarkdown>
          </CaseStudySection>
          <CaseStudySection name='Outcome' color={caseStudy.color.hex}>
            <ReactMarkdown allowDangerousHtml linkTarget='__blank'>
              {caseStudy.outcomeText}
            </ReactMarkdown>
            {caseStudy.outcomeGallery?.map((p, i) => (
              <img src={p.url} key={i} />
            ))}
          </CaseStudySection>
          <CaseStudySection name='What I Learned' color={caseStudy.color.hex}>
            <ReactMarkdown allowDangerousHtml>
              {caseStudy.whatILearned}
            </ReactMarkdown>
          </CaseStudySection>
        </div>
        <Container>
          <Testimonial {...caseStudy.testimonial} color={caseStudy.color.hex} />
        </Container>
        <Container>
          <OtherCaseStudies caseStudies={otherCaseStudies} />
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

  console.log('context.params?.slug', context.params?.slug);

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

  const { caseStudies: otherCaseStudies } = await graphcms.request(`
	  {
		  caseStudies(where:{slug_not_in: "${context.params?.slug}"}, first: 3) {
			  title,
			  description,
			  slug,
			  coverImage {
				  url,
			  },
			  roles,
			  color {
				  hex
			  },
		  }
	  }
	`);

  return {
    props: {
      caseStudy,
      otherCaseStudies,
    },
  };
};

export default CaseStudy;
