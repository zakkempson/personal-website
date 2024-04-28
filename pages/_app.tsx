import '../styles/global.css';
import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

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
