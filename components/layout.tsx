import Head from 'next/head';
import { getExperienceYears } from '../util/dates';

export const siteTitle = 'Zak Kempson | Product Designer';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/images/zak.png' />
        <meta
          name='description'
          content={`I'm a digital product designer with ${getExperienceYears()} years of experience`}
        />
        <meta property='og:image' content={`/images/zak.png`} />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <main>{children}</main>
    </div>
  );
}
