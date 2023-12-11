import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./AlumniFeedback.module.css";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useGetFeedbackList } from "../../../../../hooks/member_tab/alumni-api";
import { useEffect } from "react";
import AlumniFeedbackCard from "./AlumniFeedbackCard";
import Feedbackform from "./Feedbackform";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

function AlumniFeedback({ carryParentState }) {
  const { t } = useTranslation();
  // --------------------------------------
  const [ref, inView] = useInView();
  const params = useParams();
  const [page, setPage] = useState(1);
  const [form, setForm] = useState(false);
  const [search, setSearch] = useState("");
  const [timeeOut, setTimeeOut] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [state, setState] = useState(true);
  const author = useSelector((state) => state.alumniChange);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { getFeedbackList, getFeedbackListRefetch } = useGetFeedbackList({
    data: {
      aid: author?.aid,
      page: page,
      limit: 10,
    },

    skip: !author?.aid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (author?.aid) {
      setShowingDataLoading(true);
      getFeedbackListRefetch();
    }
  }, [page, author?.aid, search, getFeedbackListRefetch]);

  useEffect(() => {
    if (search) {
      setFeedback(getFeedbackList?.all_feedback_poll);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setFeedback((prevState) =>
          [
            ...new Set(
              [...getFeedbackList?.all_feedback_poll, ...prevState]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setRefetchStatus(false);
      } else if (editRefetchStatus) {
        setFeedback((prevState) =>
          [
            ...new Set(
              [...getFeedbackList?.all_feedback_poll]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
        setEditRefetchStatus(false);
      } else {
        if (getFeedbackList?.all_feedback_poll) {
          setFeedback((prevState) =>
            [
              ...new Set(
                [...prevState, ...getFeedbackList?.all_feedback_poll]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getFeedbackList?.all_feedback_poll?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getFeedbackList?.all_feedback_poll?.length === 10) setState(true);
    else setState(false);
  }, [getFeedbackList?.all_feedback_poll]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
      setShowingDataLoading(false);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefetchWhenPollCreate = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    getFeedbackListRefetch();
  };

  return (
    <div className={style.alumnifeedback}>
      <div className={`${style.formSelect} ${style.bottomborder}`}>
        <Link
          to={`/q/${params.username}/member/alumni`}
          state={{ ...carryParentState }}
        >
          <img alt="" src="/images/arrow-left-icon.svg" />
        </Link>

        <h6>{t("alumni_feed")}</h6>
      </div>
      <div className={style.prominentAlumnitopcontainer}>
        <div className={`${style.prominentAlumnitop} ${style.nomargintop}`}>
          <img
            src="/images/alumni/alumni-feedbackk.svg"
            alt="prominent alumni"
          />
          <div className={style.prominentAlumnitoptext}>
            <div className={style.prominentAlumnitoptexttop}>
              <h6 className={style.prominentAlumnitoptexth6}>
                {t("avg_feed_rating")}
              </h6>
              <p className={style.prominentAlumnitoptextp}>
                {t("feed_received")} <span></span>{" "}
              </p>
            </div>
            <h6 className={style.prominentAlumnitoptexth6}>
              {t("total_feed_question")} <span>{feedback?.length}</span>{" "}
            </h6>
          </div>
        </div>

        <div className={style.prominentAlumnitoptextright}>
          <div className={style.prominentAlumnitoptexttopr}>
            <img src="/images/alumni/star.svg" className={style.stars} />
            <p className={style.prominentAlumnitoptextpright}>
              <span>5</span> {t("rating")}
            </p>
          </div>
          <div
            className={style.prominentAlumnitoptextbtn}
            onClick={() => setForm(true)}
          >
            {t("add_new_question")}
            <img src="/images/alumni/add_circle.svg" alt="add" />
          </div>
        </div>
      </div>

      {!form ? (
        <div className={style.alumnifeedbackbody}>
          <div className={style.alumnifeedbackcardcpntainer}>
            {feedback?.length === 0 && timeeOut ? (
              <div className={style.noData}>
                <img src="/images/nodata.jpg" alt="" />
              </div>
            ) : (
              <div>
                <div className={style.reglist}>
                  {feedback?.map((poll, index) =>
                    feedback?.length === index + 1 ? (
                      <div ref={ref} key={index} className={style.itemIcon}>
                        <AlumniFeedbackCard
                          aid={author?.aid}
                          poll={poll}
                          // onRefetchWhenPollCreate={
                          //   onRefetchWhenPollCreate
                          // }
                        />
                      </div>
                    ) : (
                      <div key={index} className={style.itemIcon}>
                        <AlumniFeedbackCard
                          aid={author?.aid}
                          poll={poll}
                          // onRefetchWhenPollCreate={
                          //   onRefetchWhenPollCreate
                          // }
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Feedbackform
          aid={author?.aid}
          setForm={setForm}
          onRefetchWhenPollCreate={onRefetchWhenPollCreate}
        />
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
}

export default AlumniFeedback;
