import React from "react";
import { useSelector } from "react-redux";
import UserSearch from "./UserSearch";
import InstituteSearch from "./InstituteSearch";
import { useLocation } from "react-router-dom";
const SearchWrapper = () => {
  const ids = useSelector((state) => state.idChange);
  // console.info("this is ids", ids);
  const loaction = useLocation();
  return (
    <>
      {ids.loggedinAs === "user" ? (
        <UserSearch search={loaction.state?.search} />
      ) : ids.loggedinAs === "institute" ? (
        <InstituteSearch search={loaction.state?.search} />
      ) : (
        ""
      )}
    </>
  );

  // <div className={style.search_wrapper}></div>;
};

export default SearchWrapper;
