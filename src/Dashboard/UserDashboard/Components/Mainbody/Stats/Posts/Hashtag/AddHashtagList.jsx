import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import { useGetHashtagList } from "../../../../../../../Post/Institute/Components/post-api";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "./Hashtag.module.css";

const AddHashtagList = ({ searchHashtag, onSelectHashtag, viewAs }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hashtagList, setHashtagList] = useState([]);
  const { getHashtagList, getHashtagListRefetch } = useGetHashtagList({
    data: {
      page: page,
      limit: 10,
      search: searchHashtag,
    },
  });

  useEffect(() => {
    setShowingDataLoading(true);
    getHashtagListRefetch();
  }, [searchHashtag, page, getHashtagListRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getHashtagList?.hash) {
      if (searchHashtag) {
        setHashtagList(getHashtagList?.hash);
        setShowingDataLoading(false);
      } else {
        setHashtagList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getHashtagList?.hash]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    } else if (getHashtagList?.hash?.length === 0) setShowingDataLoading(false);
    else {
    }

    if (getHashtagList?.hash?.length === 10) setState(true);
    else setState(false);
  }, [getHashtagList?.hash]);
  return (
    <div
      className={viewAs === "POLL" ? style.add_hashtag_poll : style.add_hashtag}
    >
      {hashtagList?.map((hashtag, index) =>
        hashtagList?.length === index + 1 ? (
          <div
            className={style.add_hashtag_card}
            title="Select hashtag"
            ref={ref}
            onClick={() => onSelectHashtag(hashtag)}
          >
            <img
              src={
                hashtag?.hashtag_profile_photo
                  ? `${imageShowUrl}/${hashtag?.hashtag_profile_photo}`
                  : "/images/user-icon.svg"
              }
              loading="lazy"
              alt="bg-card icon"
            />
            <h6>{hashtag?.hashtag_name}</h6>
          </div>
        ) : (
          <div
            className={style.add_hashtag_card}
            title="Select hashtag"
            onClick={() => onSelectHashtag(hashtag)}
          >
            <img
              src={
                hashtag?.hashtag_profile_photo
                  ? `${imageShowUrl}/${hashtag?.hashtag_profile_photo}`
                  : "/images/user-icon.svg"
              }
              loading="lazy"
              alt="bg-card icon"
            />
            <h6>{hashtag?.hashtag_name}</h6>
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default AddHashtagList;
