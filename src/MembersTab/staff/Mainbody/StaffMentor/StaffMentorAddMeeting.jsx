import React, { useState } from "react";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormTextArea from "../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../Loader/QLoader";
import style from "../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import FormToggle from "../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import StaffMentorMarkAttendance from "./StaffMentorMarkAttendance";
import { useAddMeetingByMentor } from "../../../../hooks/member_tab/department-api";
const StaffMentorAddMeeting = ({ onRefetch, onClose, mid }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [mark, setMark] = useState(false);
  const [state, setState] = useState({
    agenda: "",
    discussion: "",
    summary: "",
    meeting_alert: true,
  });

  const [addMeetingByMentor] = useAddMeetingByMentor();
  const onInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };
  const onMark = () => {
    setMark((pre) => !pre);
  };
  const onAddMeeting = (data) => {
    if (mid) {
      setDisabled((pre) => !pre);
      addMeetingByMentor({
        meetingData: {
          ...state,
          mid: mid,
          p_array: data?.present,
          a_array: data?.absent,
        },
      })
        .then(() => {
          onRefetch();
          onClose();
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.seating_modal}
        style={{
          width: "40rem",
        }}
      >
        {!mark ? (
          <>
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
              <h6>{t("add_meeting")}</h6>
            </section>
            <BorderBottom
              customStyle={{
                width: "100%",
                marginBottom: "1rem",
              }}
            />
            <FormToggle
              labelHeading={t("add_meeting_alert")}
              labelDescription=""
              defaultLabel={false}
              customContainer={{
                padding: "0",
              }}
              checkedToggle={state.meeting_alert}
              onToggleHandler={(e) =>
                setState((prev) => ({
                  ...prev,
                  meeting_alert: e.target.checked,
                }))
              }
            />
            <JoinFormInput
              labelText={t("agenda")}
              placeholder={t("agenda_placeholder")}
              name={"agenda"}
              value={state.agenda}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled["agenda"]}
            />
            <JoinFormTextArea
              labelText={t("summary")}
              placeholder={t("summary_placeholder")}
              name={"summary"}
              value={state.summary}
              type={"text"}
              onChange={onInputChange}
              customStyleContainer={{
                width: "100%",
              }}
              errorShow={filled["summary"]}
            />
            <JoinFormTextArea
              labelText={t("discussion")}
              placeholder={t("discussion_placeholder")}
              name={"discussion"}
              value={state.discussion}
              type={"text"}
              onChange={onInputChange}
              customStyleContainer={{
                width: "100%",
              }}
              errorShow={filled["discussion"]}
            />
            <button className={style.start_arrangement_btn} onClick={onMark}>
              {t("mark_attendance")}
            </button>

            {/* <button
              className={style.start_arrangement_btn}
              onClick={onAddMeeting}
            >
              {t("add")}
            </button> */}
          </>
        ) : (
          <StaffMentorMarkAttendance
            mid={mid}
            onClose={onMark}
            onAddMeeting={onAddMeeting}
          />
        )}

        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default StaffMentorAddMeeting;
