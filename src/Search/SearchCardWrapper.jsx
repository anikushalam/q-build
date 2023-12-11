import React from "react";
import ReactDom from "react-dom";
import SearchCardOverlay from "./SearchCardOverlay";
const SearchCardWrapper = ({ children, customStyle }) => {
  return (
    <>
      {ReactDom.createPortal(
        <SearchCardOverlay children={children} customStyle={customStyle} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default SearchCardWrapper;
