import React, { useEffect, useState } from "react";
import style from "../../../Hostel/Hostel.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetOneMeetingDetail } from "../../../../../../hooks/member_tab/department-api";
import StaffMenteeCard from "../../../StaffMentor/StaffMenteeCard";

const MeetingDetail = ({ queryFlow }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [open, setOpen] = useState("");
  const { getOneMeetingDetail, getOneMeetingDetailRefetch } =
    useGetOneMeetingDetail({
      meid: getQuery.state?.meid,
      skip: !getQuery.state?.meid,
    });
  useEffect(() => {
    if (getQuery.state?.meid) {
      getOneMeetingDetailRefetch();
    }
  }, [getQuery.state?.qid, getOneMeetingDetailRefetch]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const onOpen = (val) => {
    if (val === open) {
      setOpen("");
    } else {
      setOpen(val);
    }
  };

  return (
    <>
      <div
        className={style.with_search}
        style={{
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <h6>{t("meeting_detail")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
          marginBottom: "0.5rem",
        }}
      />

      <JoinFormInputView
        labelText={`${t("agenda")}: `}
        value={getOneMeetingDetail?.all_meet?.agenda ?? ""}
      />

      <JoinFormInputView
        labelText={`${t("summary")}: `}
        value={getOneMeetingDetail?.all_meet?.summary ?? ""}
        customStyleValue={{
          width: "100%",
          whiteSpace: "break-spaces",
        }}
        customStyleContainer={{
          alignItems: "flex-start",
        }}
      />
      <JoinFormInputView
        labelText={`${t("discussion")}: `}
        value={getOneMeetingDetail?.all_meet?.discussion ?? ""}
        customStyleValue={{
          width: "100%",
          whiteSpace: "break-spaces",
        }}
        customStyleContainer={{
          alignItems: "flex-start",
        }}
      />
      <JoinFormInputView
        labelText={`${t("date")}: `}
        value={moment(getOneMeetingDetail?.all_meet?.created_at).format(
          "DD MMM,yyyy"
        )}
      />
      {/* <JoinFormInputView
        labelText={`${t("present")}: `}
        value={getOneMeetingDetail?.all_meet?.mentees_present_count ?? 0}
      />
      <JoinFormInputView
        labelText={`${t("absent")}: `}
        value={getOneMeetingDetail?.all_meet?.mentees_absent_count ?? 0}
      /> */}
      {queryFlow === "By_Student" ? null : (
        <>
          <div className={style.mentor_attendance_container}>
            <div
              className={
                open === "PRESENT"
                  ? `${style.mentor_attendance_btn} ${style.mentor_attendance_btn_active}`
                  : style.mentor_attendance_btn
              }
              onClick={() => onOpen("PRESENT")}
            >
              <h6>
                {`${t("present")}: `}
                {getOneMeetingDetail?.all_meet?.mentees_present_count ?? 0}
              </h6>
              <img src="/images/forward-right-icon.svg" alt="view academics" />
            </div>
            <div
              className={
                open === "ABSENT"
                  ? `${style.mentor_attendance_btn} ${style.mentor_attendance_btn_active}`
                  : style.mentor_attendance_btn
              }
              onClick={() => onOpen("ABSENT")}
            >
              <h6>
                {`${t("absent")}: `}
                {getOneMeetingDetail?.all_meet?.mentees_absent_count ?? 0}
              </h6>
              <img src="/images/forward-right-icon.svg" alt="view academics" />
            </div>
          </div>
          {open === "PRESENT" ? (
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <p>
                {getOneMeetingDetail?.all_meet?.present_mentees?.length > 0
                  ? t("present_mentee_list")
                  : t("no_present_mentee_list")}
              </p>
              {getOneMeetingDetail?.all_meet?.present_mentees?.map((mentee) => (
                <StaffMenteeCard
                  mentee={mentee}
                  key={mentee?._id}
                  viewAs="MEETING_DETAIL"
                  isPresent
                />
              ))}
            </div>
          ) : open === "ABSENT" ? (
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <p>
                {getOneMeetingDetail?.all_meet?.absent_mentees?.length > 0
                  ? t("absent_mentee_list")
                  : t("no_absent_mentee_list")}
              </p>
              {getOneMeetingDetail?.all_meet?.absent_mentees?.map((mentee) => (
                <StaffMenteeCard
                  mentee={mentee}
                  key={mentee?._id}
                  viewAs="MEETING_DETAIL"
                />
              ))}
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default MeetingDetail;
