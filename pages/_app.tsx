import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/global.css';
import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { useRouter } from 'next/router';

declare global {
  interface Window {
    $crisp: string[][];
    CRISP_WEBSITE_ID: string;
  }
}

export const ResponsiveContext = React.createContext({
  width: 0,
  height: 0,
  isMobile: false,
  isTablet: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  const windowSize = useWindowSize();
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

  const [scrollMemories, setScrollMemories] = React.useState<{
    [asPath: string]: number;
  }>({});

  const [isPop, setIsPop] = React.useState(false);
  const Router = useRouter();

  // Handle browser 'back' behaviour to deal with 'x' button in case studies and restore scroll positions
  React.useEffect(() => {
    if (process.browser) {
      window.history.scrollRestoration = 'manual';
      window.onpopstate = () => {
        setIsPop(true);
      };
    }

    Router.events.on('routeChangeStart', () => {
      saveScroll();
    });

    Router.events.on('routeChangeComplete', () => {
      console.log('New page is:', Router.pathname);
      restoreScroll();
    });

    const saveScroll = () => {
      const newScrollMemories = { ...scrollMemories };
      newScrollMemories[Router.asPath] = window.scrollY;
      setScrollMemories((sm) => newScrollMemories);
    };

    const restoreScroll = () => {
      const prevScrollY = scrollMemories[Router.asPath];
      if (prevScrollY !== undefined && Router.pathname === '/') {
        window.requestAnimationFrame(() => window.scrollTo(0, prevScrollY));
      } else {
        window.requestAnimationFrame(() => window.scrollTo(0, 0));
      }
    };

    setIsPop(false);
  }, [Component]);

  return (
    <ResponsiveContext.Provider value={windowSize}>
      <Component {...pageProps} />
    </ResponsiveContext.Provider>
  );
};

export default App;
