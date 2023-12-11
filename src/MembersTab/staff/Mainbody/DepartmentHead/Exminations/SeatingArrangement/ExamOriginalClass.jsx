import React, { useCallback, useEffect, useState } from "react";
import style from "./SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useInView } from "react-intersection-observer";
import { useGetClassListExam } from "../../../../../../hooks/member_tab/department-api";
import { debounce } from "lodash";
import ExamClassCard from "./ExamClassCard";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";

const ExamOriginalClass = ({ onClose, examId, onSelect }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [classList, setClassList] = useState([]);
  const [search, setSearch] = useState("");

  const { getClassListExam, getClassListExamRefetch } = useGetClassListExam({
    data: {
      eid: examId,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !examId,
  });
  useEffect(() => {
    if (examId) {
      setShowingDataLoading(true);
      getClassListExamRefetch();
    }
  }, [examId, page, search, getClassListExamRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setClassList(getClassListExam?.all_classes);
      setShowingDataLoading(false);
    } else {
      if (getClassListExam?.all_classes) {
        setClassList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getClassListExam?.all_classes]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getClassListExam?.all_classes?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getClassListExam?.all_classes?.length === 10) setState(true);
    else setState(false);
  }, [getClassListExam?.all_classes]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("select_class")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginBottom: "1rem",
          }}
        />

        <div
          className={style.search_container}
          style={{
            marginBottom: "0.5rem",
          }}
        >
          <div
            className={style.search_container_input}
            style={{
              width: "100%",
            }}
          >
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder={t("search-label")}
              style={{
                width: "100%",
              }}
              onChange={onSearchEvent}
              // onClick={onClick}
            />
          </div>
        </div>
        {classList?.map((cls, index) =>
          classList?.length === index + 1 ? (
            <div ref={ref} key={cls?._id}>
              <ExamClassCard cls={cls} onSelect={onSelect} />
            </div>
          ) : (
            <ExamClassCard key={cls?._id} cls={cls} onSelect={onSelect} />
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default ExamOriginalClass;
