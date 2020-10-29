import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { Paragraph, SubTitle, Title } from '../styles/styles';
import styled from 'styled-components';
import Name from '../components/Name';

const Intro = styled.section`
  display: flex;
  height: 60vh;
`;

const IntroLeft = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 0.2;
`;

const IntroName = styled.div`
  flex: 1;
  max-width: 380px;
`;

const ZakImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 60%;
  z-index: -1;
  width: 230px;
`;

const IntroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const IntoRightContent = styled.div`
  max-width: 550px;
`;

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Intro>
        <IntroLeft>
          <Spacer />
          <IntroName>
            <Title> Hey, i'm</Title>
            <Name />
          </IntroName>
          <ZakImage src='/images/zak.png' alt={`Picture of Zak's ugly face`} />
        </IntroLeft>
        <IntroRight>
          <IntoRightContent>
            <SubTitle>
              I’m a <strong>product designer</strong> with{' '}
              <strong>4 years</strong> of experience.
            </SubTitle>
            <Paragraph>
              Remarkable products pave the way to a better future, so I get
              stuck in and help bring them to life.
            </Paragraph>
            <Paragraph>
              Along the way I’ve started a company, lead product teams and
              created successful user interfaces for businesses,and customers.
            </Paragraph>
          </IntoRightContent>
        </IntroRight>
      </Intro>
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
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
