import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Container, Title } from '../styles/styles';
import React from 'react';
import Intro from '../components/index/Intro';
import Skills from '../components/index/Skills/Skills';
import { GraphQLClient } from 'graphql-request';
import CaseStudyList from '../components/index/CaseStudyList/CaseStudyList';
import ContactSection from '../components/Contact/ContactSection';
import Footer from '../components/Footer';

export default function Home({ caseStudies }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro />
      <Skills />
      <Container>
        <Title style={{ marginTop: '2rem' }}>Recent work</Title>
        <CaseStudyList caseStudies={caseStudies} />
      </Container>
      <ContactSection />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const graphcms = new GraphQLClient(process.env.GRAPH_ENDPOINT);

  const { caseStudies } = await graphcms.request(`
	{
		caseStudies {
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
      caseStudies,
    },
  };
}
