import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInstituteAllSearch } from "../../Post/Institute/Components/search-api";
import { useSelector } from "react-redux";
import AllMixinList from "./AllMixinList";
export const InstituteAllSearchList = ({ search, username }) => {
  const ids = useSelector((state) => state.idChange);
  const [allResult, setAllResult] = useState([]);
  const [ref, inView] = useInView();
  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);

  const { instituteAllSearch, instituteAllSearchRefetch } =
    useInstituteAllSearch({
      skip: !ids?.id,
      search: {
        search: search,
        page: page,
        id: ids?.id,
        limit: 10,
        filter: "all",
      },
    });

  //for the infinite scroll then change the page
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (ids?.id) instituteAllSearchRefetch();
  }, [page, ids?.id, instituteAllSearchRefetch]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (instituteAllSearch?.universalArray) {
      const uniquePost = [...allResult, ...instituteAllSearch?.universalArray];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllResult(uniqueRefind);
    }
    if (instituteAllSearch?.universalArray?.length === 10) setState(true);
    else setState(false);
  }, [instituteAllSearch?.universalArray]);
  //   console.info("thiw ssddhfsbna auidasdvfasz", instituteAllSearch);

  return (
    <>
      {allResult?.map((mixin, index) =>
        allResult?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <AllMixinList
              mixin={mixin}
              key={mixin?._id}
              onCloseSearch={() => {}}
              username={username}
            />
          </div>
        ) : (
          <AllMixinList
            mixin={mixin}
            key={mixin?._id}
            onCloseSearch={() => {}}
            username={username}
          />
        )
      )}
    </>
  );
};

export default InstituteAllSearchList;
