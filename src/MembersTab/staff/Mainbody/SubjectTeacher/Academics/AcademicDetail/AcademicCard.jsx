import React, { useEffect, useState } from "react";
import style from "../Academics.module.css";
import AcademicTopicCard from "./AcademicTopicCard";
import { useGetAllTopicOneChapter } from "../../../../../../hooks/member_tab/subject-api";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useTranslation } from "react-i18next";
import CreateTopic from "./CreateTopic";
const AcademicCard = ({
  chapter,
  isView,
  onGrabChapterId,
  topicId,
  isSubType,
  sid,
  recordLecture,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [topicList, setTopicList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(false);
  const { scrollToTop } = useScrollbar();
  const [addChapter, setAddChapter] = useState(false);

  const { getAllTopicOneChapter, getAllTopicOneChapterRefetch } =
    useGetAllTopicOneChapter({
      data: {
        cid: chapter?._id,
        page: page,
        limit: 10,
      },
      skip: !isOpen ? !isOpen : !chapter?._id,
    });

  useEffect(() => {
    if (chapter?._id && isOpen) {
      setShowingDataLoading(true);
      getAllTopicOneChapterRefetch();
    }
  }, [chapter?._id, page, isOpen, getAllTopicOneChapterRefetch]);
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllTopicOneChapter?.all_topic) {
      if (page === 1) {
        setTopicList(getAllTopicOneChapter?.all_topic);
      } else {
        setTopicList((prev) =>
          [
            ...new Set(
              [...prev, ...getAllTopicOneChapter?.all_topic].map(JSON.stringify)
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getAllTopicOneChapter?.all_topic?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (getAllTopicOneChapter?.all_topic?.length === 10) setState(true);
    else setState(false);
  }, [getAllTopicOneChapter?.all_topic, isOpen]);

  const onToggle = () => {
    setIsOpen((pre) => !pre);
  };

  const onRefetch = () => {
    setPage(1);
    setShowingDataLoading(true);
    getAllTopicOneChapterRefetch();
  };
  const onChapterToggle = () => {
    setAddChapter((pre) => !pre);
  };
  return (
    <div className={style.academic_card_container}>
      <div className={style.academic_card_top} onClick={onToggle}>
        <img
          src="/images/member_tab/subject/subject-topic-icon.svg"
          alt="topic icon"
        />
        <h6>{chapter?.chapter_name ?? ""}</h6>
        <img
          src={
            isOpen
              ? "/images/member_tab/subject/subject-up-icon.svg"
              : "/images/member_tab/subject/subject-down-icon.svg"
          }
          alt="down icon"
        />
      </div>

      {isOpen && (
        <>
          {!recordLecture &&
          ["INSTITUTE", "SUBJECT_TEACHER"]?.includes(isView) ? (
            <div
              className={style.record_lecture}
              style={{
                marginTop: "1rem",
                paddingRight: "1rem",
              }}
            >
              <h6
                className={style.add_record_lecture}
                onClick={onChapterToggle}
              >
                {t("add_new_topic")}
              </h6>
            </div>
          ) : null}
          {topicList?.map((topic, index) =>
            topicList?.length === index + 1 ? (
              <div ref={ref} key={topic?._id}>
                <AcademicTopicCard
                  topic={topic}
                  isLast
                  isView={isView}
                  onGrabChapterId={onGrabChapterId}
                  topicId={topicId}
                  onRefetch={onRefetch}
                  isSubType={isSubType}
                />
              </div>
            ) : (
              <AcademicTopicCard
                topic={topic}
                key={topic?._id}
                isView={isView}
                onGrabChapterId={onGrabChapterId}
                topicId={topicId}
                onRefetch={onRefetch}
                isSubType={isSubType}
              />
            )
          )}
        </>
      )}
      {isOpen &&
        !showingDataLoading &&
        !getAllTopicOneChapter?.all_topic?.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "2rem",
            }}
            title={"No topic list found."}
          />
        )}
      {showingDataLoading && <QvipleLoading status="white" />}
      {addChapter && (
        <CreateTopic
          onClose={onChapterToggle}
          chid={chapter?._id}
          onRefetch={onRefetch}
        />
      )}
    </div>
  );
};

export default AcademicCard;
