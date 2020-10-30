import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import { Container, Paragraph, SubTitle, Title } from '../styles/styles';
import styled from 'styled-components';
import React from 'react';
import Intro from '../components/index/Intro';
import Skills from '../components/index/Skills/Skills';
import { GraphQLClient } from 'graphql-request';
import CaseStudyList from '../components/index/CaseStudyList/CaseStudyList';

export default function Home({ caseStudies }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Intro />
      <Skills />
      <Container>
        <Title style={{ marginTop: '2rem' }}>Recent work</Title>
        <CaseStudyList caseStudies={caseStudies} />
      </Container>
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> */}
      {/* <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
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
		}
	}
  `);

  return {
    props: {
      caseStudies,
    },
  };
}
