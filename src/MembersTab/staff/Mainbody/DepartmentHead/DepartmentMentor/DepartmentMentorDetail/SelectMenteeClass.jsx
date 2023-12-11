import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../../Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useGetAllMentorClassList } from "../../../../../../hooks/member_tab/department-api";
const SelectMenteeClass = ({ onBack, onSelect, did }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [classList, setClassList] = useState([]);

  const { getAllMentorClassList, getAllMentorClassListRefetch } =
    useGetAllMentorClassList({
      data: {
        did: did,
        page: page,
        limit: 10,
      },
      skip: !did,
    });

  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      getAllMentorClassListRefetch();
    }
  }, [did, page, getAllMentorClassListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllMentorClassList?.all_classes) {
      setClassList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getAllMentorClassList?.all_classes]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getAllMentorClassList?.all_classes?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getAllMentorClassList?.all_classes?.length === 10) setState(true);
    else setState(false);
  }, [getAllMentorClassList?.all_classes]);

  const onSelectOne = (val) => {
    onSelect(val);
  };

  return (
    <PopupWrapper onClose={onBack}>
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img src="/images/arrow-left-fees-icon.svg" onClick={onBack} alt="" />
          <h6>{t("select_class")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        {classList?.map((cls, index) =>
          classList?.length === index + 1 ? (
            <div
              className={style.classes_main_container}
              key={cls._id}
              ref={ref}
              onClick={() => onSelectOne(cls?._id)}
            >
              <img src="/images/master-24-grey-icon.svg" alt="classes icon" />
              <div className={style.with_check_container}>
                <div className={style.person_container_text}>
                  <h6>{`${cls?.className ?? ""} ${cls?.classTitle ?? ""}`}</h6>{" "}
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    ({cls?.batch?.batchName ?? ""})
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={style.classes_main_container}
              key={cls._id}
              onClick={() => onSelectOne(cls?._id)}
            >
              <img src="/images/master-24-grey-icon.svg" alt="classes icon" />
              <div className={style.with_check_container}>
                <div className={style.person_container_text}>
                  <h6>{`${cls?.className ?? ""} ${cls?.classTitle ?? ""}`}</h6>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    ({cls?.batch?.batchName ?? ""})
                  </span>
                </div>
              </div>
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default SelectMenteeClass;
