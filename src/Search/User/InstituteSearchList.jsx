import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useUserAllSearch } from "../../Post/Institute/Components/search-api";
import UserConnectionResult from "../UserConnectionResult";

const InstituteSearchList = ({ search }) => {
  const ids = useSelector((state) => state.idChange);

  const [ref, inView] = useInView();

  const [allResult, setAllResult] = useState([]);

  //for the fetch more or not after seeing all post
  const [state, setState] = useState(true);
  //for setting the next page to fetch data
  const [page, setPage] = useState(1);

  const { userAllSearch, userAllSearchRefetch } = useUserAllSearch({
    skip: !ids?.id,
    search: {
      search: search,
      page: page,
      id: ids?.id,
      limit: 10,
      filter: "Institute",
    },
  });

  //for the infinite scroll then change the page
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (page && ids?.id && search) userAllSearchRefetch();
  }, [page, ids?.id, userAllSearchRefetch, search]);

  //for the infinite scroll then change the page
  useEffect(() => {
    if (userAllSearch?.universalArrayUser) {
      const uniquePost = [...allResult, ...userAllSearch?.universalArrayUser];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllResult(uniqueRefind);
    }
    if (userAllSearch?.universalArrayUser?.length === 10) setState(true);
    else setState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAllSearch?.universalArrayUser]);
  return (
    <>
      {allResult?.map((item, index) =>
        allResult?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <UserConnectionResult
              item={item}
              key={index}
              hideModal={() => {}}
              userId={ids?.id}
            />
          </div>
        ) : (
          <UserConnectionResult
            item={item}
            key={index}
            hideModal={() => {}}
            userId={ids?.id}
          />
        )
      )}
    </>
  );
};

export default InstituteSearchList;
