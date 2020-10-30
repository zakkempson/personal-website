import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';
import { useRouter } from 'next/router';
import React from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  //   const [scrollMemories, setScrollMemories] = React.useState<{
  //     [asPath: string]: number;
  //   }>({});
  //   const [isPop, setIsPop] = React.useState(false);

  //   const Router = useRouter();

  //   React.useEffect(() => {
  //     // let isPop = false;
  //     const newScrolls: { [asPath: string]: number } = {};

  //     if (process.browser) {
  //       window.history.scrollRestoration = 'manual';
  //       window.onpopstate = () => {
  //         console.log('Its is apparently a pop');
  //         setIsPop(true);
  //       };
  //     }

  //     Router.events.on('routeChangeStart', () => {
  //       console.log('Route change start');
  //       //   saveScroll();
  //       //   newScrolls[Router.asPath] = window.scrollY;
  //     });

  //     Router.events.on('routeChangeComplete', () => {
  //       console.log('Route change complete');
  //       //   if (isPop) {
  //       //     console.log('isPop!!!!!');
  //       //     restoreScroll();
  //       //     setIsPop(false);
  //       //   } else {
  //       //     console.log('isNOT POP!!');
  //       //     scrollToTop();
  //       //   }
  //     });

  //     const saveScroll = () => {
  //       const newScrollMemories = { ...scrollMemories };
  //       newScrollMemories[Router.asPath] = window.scrollY;
  //       setScrollMemories((sm) => newScrollMemories);
  //     };

  //     const restoreScroll = () => {
  //       const prevScrollY = newScrolls[Router.asPath];
  //       if (prevScrollY !== undefined) {
  //         window.requestAnimationFrame(() => window.scrollTo(0, prevScrollY));
  //       }
  //     };

  //     const scrollToTop = () => {
  //       window.requestAnimationFrame(() => window.scrollTo(0, 0));
  //     };

  //     setIsPop(false);
  //   }, [Component]);
  return <Component {...pageProps} />;
};

export default App;
