import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';
import React from 'react';

declare global {
  interface Window {
    $crisp: string[][];
    CRISP_WEBSITE_ID: string;
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    if (window) {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_ID;

      const initialize = () => {
        const d = document;
        const s = d.createElement('script');
        s.src = 'https://client.crisp.chat/l.js';
        s.async = true;
        d.getElementsByTagName('head')[0].appendChild(s);
      };

      initialize();
    }
  }, []);

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
