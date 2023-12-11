import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import QueriesCard from "./QueriesCard";
import { useGetAllQueryList } from "../../../../../../hooks/member_tab/department-api";

const SolvedQuesries = ({ carryParentState, did, queryFlow }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [queriesList, setQuesriesList] = useState([]);
  const { getAllQueryList, getAllQueryListRefetch } = useGetAllQueryList({
    data: {
      did: did,
      page: page,
      limit: 10,
      status: "Solved",
      flow: queryFlow,
    },
    skip: !did,
  });
  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      getAllQueryListRefetch();
    }
  }, [did, page, getAllQueryListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllQueryList?.all_query) {
      setQuesriesList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getAllQueryList?.all_query]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getAllQueryList?.all_query?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getAllQueryList?.all_query?.length === 10) setState(true);
    else setState(false);
  }, [getAllQueryList?.all_query]);
  return (
    <>
      {queriesList?.map((query_detail, index) =>
        queriesList?.length === index + 1 ? (
          <div ref={ref} key={query_detail?._id}>
            <QueriesCard
              query_detail={query_detail}
              carryParentState={carryParentState}
              viewAs="SOLVED"
              queryFlow={queryFlow}
            />
          </div>
        ) : (
          <QueriesCard
            query_detail={query_detail}
            key={query_detail?._id}
            carryParentState={carryParentState}
            viewAs="SOLVED"
            queryFlow={queryFlow}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default SolvedQuesries;
