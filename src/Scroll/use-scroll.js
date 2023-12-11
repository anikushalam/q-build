import React from "react";
export const useScrollbar = () => {
  const hideScrollbar = React.useCallback(() => {
    // document.body.style.overflow = "hidden";
  }, []);

  const showScrollbar = React.useCallback(() => {
    document.body.style.overflow = "";
  }, []);
  const scrollToTop = React.useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return {
    hideScrollbar,
    showScrollbar,
    scrollToTop,
  };
};
