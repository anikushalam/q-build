import React from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../Academics/Academics.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useNavigate, useParams } from "react-router-dom";
const ExrtaLecture = ({
  onClose,
  extraLectureList,
  extraLoading,
  carryParentState,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const params = useParams();
  const onMarkAttendance = (val) => {
    navigate(
      `/q/${params.username}/member/subject/${params.sname}?a=extra-attendance`,
      {
        state: {
          ...carryParentState,
          attendaceView: "EXTRA_MARK",
          attendaceViewId: val,
        },
      }
    );
  };
  return (
    <>
      <PopupWrapper onClose={onClose}>
        <div className={style.add_academic_record}>
          <div className={style.add_academic_record_title}>
            <div className={style.add_academic_record_text}>
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt="back icon"
                style={{
                  cursor: "pointer",
                }}
              />
              <h6>{t("extra_lecture")}</h6>
            </div>
            <button
              style={{
                color: "#436dfa",
                fontSize: "14px",
                fontWeight: "500",
              }}
              onClick={() => onMarkAttendance("")}
            >
              {t("mark_attendance")}
            </button>
          </div>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.7rem",
            }}
          />

          {extraLectureList?.map((attendance, index) => (
            <h6
              className={style.extra_lecture_container}
              key={attendance?._id}
              onClick={() => onMarkAttendance(attendance?._id)}
            >
              {t("extra")} {index + 1}
            </h6>
          ))}

          {extraLoading && <QvipleLoading status="white" />}
        </div>
      </PopupWrapper>
    </>
  );
};

export default ExrtaLecture;
