import * as React from "react";

export const useWindowSize = (params: { element?: HTMLElement } = {}) => {
  const { element } = params;

  const [width, setWidth] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);

  const mobileMaxWidth = 600;
  const tabletMinWidth = 600;
  const tabletMaxWidth = 1024;

  const isMobileCondition = 0 <= width && width <= mobileMaxWidth;
  const [isMobile, setIsMobile] = React.useState(isMobileCondition);

  const isTabletCondition = tabletMinWidth <= width && width <= tabletMaxWidth;
  const [isTablet, setIsTablet] = React.useState(isTabletCondition);

  React.useEffect(() => {
    if (!element) {
      return;
    }

    setWidth(element.clientWidth);
    setHeight(element.clientHeight);
  }, [element]);

  React.useEffect(() => {
    if (element) {
      return undefined;
    }

    const handleResize = () => {
      setWidth(window?.innerWidth);
      setHeight(window?.innerHeight);
    };

    if (window) {
      window.addEventListener("resize", handleResize);
    }

    handleResize();

    return () => {
      if (window) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  React.useEffect(() => {
    setIsMobile(isMobileCondition);
    setIsTablet(isTabletCondition);
  }, [width, height]);

  return {
    width,
    height,
    isMobile,
    isTablet,
  };
};
