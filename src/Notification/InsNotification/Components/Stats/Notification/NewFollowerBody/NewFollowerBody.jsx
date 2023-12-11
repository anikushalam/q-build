import React, { useState, useEffect } from "react";
import style from "./Body.module.css";
import Item from "./Items/Item";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useInstituteFollowersArray } from "../../../../../../hooks/dashboard/dashboard-api";
import QvipeLoaderGif from "../../../../../../Loader/QvipleLoaderGif";

function NewFollowerBody() {
  const [load, setLoad] = useState(true);
  const id = useSelector((state) => state.idChange.id);
  const [allFollowers, setAllFollowers] = useState([]);
  const [ref, inView] = useInView();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);

  const { instituteFollowersArray, instituteFollowersArrayRefetch } =
    useInstituteFollowersArray({
      data: {
        id: id,
        page: page,
        limit: 10,
      },
      skip: !id,
    });

  useEffect(() => {
    if (id) instituteFollowersArrayRefetch();
  }, [id, page, instituteFollowersArrayRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (
      instituteFollowersArray?.iFollowers?.length ||
      instituteFollowersArray?.uFollowers?.length
    ) {
      const dublicates = [
        ...allFollowers,
        ...instituteFollowersArray?.iFollowers,
        ...instituteFollowersArray?.uFollowers,
      ];
      const uniqueRefind = [...new Set(dublicates.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllFollowers(uniqueRefind);
    }
    //for next api is call or not dashboard
    // if (subjectMcqQuestion?.questions.length === 10) setState(true);
    // else setState(false);
  }, [
    instituteFollowersArray?.iFollowers,
    instituteFollowersArray?.uFollowers,
  ]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <div className={style.body}>
      {allFollowers?.length === 0 && load && <QvipeLoaderGif />}
      {allFollowers?.map((d, index) =>
        allFollowers?.length === index + 1 ? (
          <div key={index} ref={ref}>
            <Item data={d ? d : ""} followBack="false" />
          </div>
        ) : (
          <div key={index}>
            <Item data={d ? d : ""} followBack="false" />
          </div>
        )
      )}
    </div>
  );
}

export default NewFollowerBody;
