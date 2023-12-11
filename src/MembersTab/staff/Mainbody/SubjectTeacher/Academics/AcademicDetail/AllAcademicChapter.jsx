import React, { useEffect, useState } from "react";
import { useGetAllChapterOneSubject } from "../../../../../../hooks/member_tab/subject-api";
import { useInView } from "react-intersection-observer";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import AcademicCard from "./AcademicCard";
import CreateChapter from "./CreateChapter";
import style from "../Academics.module.css";
import { useTranslation } from "react-i18next";

const AllAcademicChapter = ({
  sid,
  isView,
  onGrabChapterId,
  topicId,
  isSubType,
  recordLecture,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [chapterList, setChapterList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { scrollToTop } = useScrollbar();
  const [addChapter, setAddChapter] = useState(false);

  const { getAllChapterOneSubject, getAllChapterOneSubjectRefetch } =
    useGetAllChapterOneSubject({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getAllChapterOneSubjectRefetch();
    }
  }, [sid, page, getAllChapterOneSubjectRefetch]);
  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllChapterOneSubject?.all_chapter) {
      if (page === 1) {
        setChapterList(getAllChapterOneSubject?.all_chapter);
      } else {
        setChapterList((prev) =>
          [
            ...new Set(
              [...prev, ...getAllChapterOneSubject?.all_chapter].map(
                JSON.stringify
              )
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (getAllChapterOneSubject?.all_chapter?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    if (getAllChapterOneSubject?.all_chapter?.length === 10) setState(true);
    else setState(false);
  }, [getAllChapterOneSubject?.all_chapter]);
  const onChapterToggle = () => {
    setAddChapter((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage((prev) => (prev = 1));
    setShowingDataLoading(true);
    getAllChapterOneSubjectRefetch();
  };
  return (
    <>
      {!recordLecture && ["INSTITUTE", "SUBJECT_TEACHER"]?.includes(isView) ? (
        <div
          className={style.record_lecture}
          style={{
            marginTop: "1rem",
          }}
        >
          <h6 className={style.add_record_lecture} onClick={onChapterToggle}>
            {t("add_new_chapter")}
          </h6>
        </div>
      ) : null}
      {chapterList?.map((chapter, index) =>
        chapterList?.length === index + 1 ? (
          <div ref={ref} key={chapter?._id}>
            <AcademicCard
              isView={isView}
              chapter={chapter}
              onGrabChapterId={onGrabChapterId}
              topicId={topicId}
              isSubType={isSubType}
              sid={sid}
              recordLecture={recordLecture}
            />
          </div>
        ) : (
          <AcademicCard
            key={chapter?._id}
            chapter={chapter}
            isView={isView}
            onGrabChapterId={onGrabChapterId}
            topicId={topicId}
            isSubType={isSubType}
            sid={sid}
            recordLecture={recordLecture}
          />
        )
      )}

      {!showingDataLoading && !chapterList?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No chapter list found."}
        />
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
      {addChapter && (
        <CreateChapter
          onClose={onChapterToggle}
          sid={sid}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </>
  );
};

export default AllAcademicChapter;
