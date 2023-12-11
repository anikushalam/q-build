import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import { useGetHashtagList } from "../../../../../../../Post/Institute/Components/post-api";
import style from "./Hashtag.module.css";
import HashtagCard from "./HashtagCard";
import HashtagCarousel from "./HashtagCarousel";
const Hashtag = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hashtagList, setHashtagList] = useState([]);
  const { getHashtagList, getHashtagListRefetch } = useGetHashtagList({
    data: {
      page: page,
      limit: 10,
      search: "",
    },
  });

  useEffect(() => {
    setShowingDataLoading(true);
    getHashtagListRefetch();
  }, [page, getHashtagListRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getHashtagList?.hash) {
      setHashtagList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getHashtagList?.hash]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getHashtagList?.hash?.length === 0) setShowingDataLoading(false);
    else {
    }
    if (getHashtagList?.hash?.length === 10) setState(true);
    else setState(false);
  }, [getHashtagList?.hash]);

  const onScrollNext = () => {
    const selectId = document.getElementById("viewScrollHashtag");
    selectId.scrollLeft += 350;
  };
  const onScrollPrevious = () => {
    const selectId = document.getElementById("viewScrollHashtag");
    selectId.scrollLeft -= 350;
  };
  return (
    <div className={style.hashtag}>
      <section className={style.hashtag_header}>
        <div>
          <h6 className={style.hashtag_follow}>{t("hashtag_follow")}</h6>
          <h6 className={style.hashtag_for_you}>{t("hashtag_for_you")}</h6>
        </div>
        {/* <button>{t("view_all")}</button> */}
      </section>
      <div className={style.hashtag_main}>
        <HashtagCarousel onScrollNext={onScrollPrevious} viewAs="PREVIOUS" />
        <section className={style.hashtag_container} id="viewScrollHashtag">
          {hashtagList?.map((hashtag, index) =>
            hashtagList?.length === index + 1 ? (
              <div ref={ref} key={hashtag?._id}>
                <HashtagCard hashtag={hashtag} />
              </div>
            ) : (
              <HashtagCard hashtag={hashtag} key={hashtag?._id} />
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </section>
        <HashtagCarousel onScrollNext={onScrollNext} />
      </div>
    </div>
  );
};

export default Hashtag;
