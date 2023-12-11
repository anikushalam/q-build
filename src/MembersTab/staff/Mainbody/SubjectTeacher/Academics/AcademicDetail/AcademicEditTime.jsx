import React, { useEffect, useState } from "react";
import {
  useGetOneSubjectProfile,
  useSubjectEditAcademic,
} from "../../../../../../hooks/member_tab/subject-api";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../Academics.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../../Loader/QLoader";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useTranslation } from "react-i18next";

const AcademicEditTime = ({ sid, onClose }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    lecture_analytic: {
      lecture_count: "",
      lecture_time: "",
    },
    practical_analytic: {
      practical_count: "",
      practical_time: "",
    },
    tutorial_analytic: {
      tutorial_count: "",
      tutorial_time: "",
    },
  });
  const [subjectEditAcademic] = useSubjectEditAcademic();
  const { getOneSubjectProfile, getOneSubjectProfileRefetch } =
    useGetOneSubjectProfile({
      sid: sid,
      skip: !sid,
    });

  useEffect(() => {
    if (sid) {
      getOneSubjectProfileRefetch();
    }
  }, [sid, getOneSubjectProfileRefetch]);

  useEffect(() => {
    if (getOneSubjectProfile?.one_subject) {
      setState({
        lecture_analytic: {
          lecture_count:
            getOneSubjectProfile?.one_subject?.lecture_analytic
              ?.lecture_count || "",
          lecture_time:
            getOneSubjectProfile?.one_subject?.lecture_analytic?.lecture_time ||
            "",
        },
        practical_analytic: {
          practical_count:
            getOneSubjectProfile?.one_subject?.practical_analytic
              ?.practical_count || "",
          practical_time:
            getOneSubjectProfile?.one_subject?.practical_analytic
              ?.practical_time || "",
        },
        tutorial_analytic: {
          tutorial_count:
            getOneSubjectProfile?.one_subject?.tutorial_analytic
              ?.tutorial_count || "",
          tutorial_time:
            getOneSubjectProfile?.one_subject?.tutorial_analytic
              ?.tutorial_time || "",
        },
      });
    }
  }, [getOneSubjectProfile?.one_subject]);

  const onUpdate = () => {
    if (sid) {
      setDisabled((pre) => !pre);
      subjectEditAcademic({
        sid: sid,
        academicUpdate: state,
      })
        .then(() => {
          getOneSubjectProfileRefetch();
          onClose();
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_academic_record}>
        <div className={style.add_academic_record_title}>
          <div
            className={style.add_academic_record_text}
            style={{
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h6>{t("edit_academic")}</h6>
            <img
              src="/images/close-post-icon.svg"
              onClick={onClose}
              alt=""
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.5rem",
          }}
        />
        <div className={style.academic_edit_container}>
          <JoinFormInput
            labelText={t("total_lectures")}
            placeholder="60"
            name={"lecture_count"}
            type={"tel"}
            value={state.lecture_analytic.lecture_count}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                lecture_analytic: {
                  ...prev.lecture_analytic,
                  lecture_count: +e.target.value,
                },
              }))
            }
          />
          <JoinFormInput
            labelText={t("time_lectures")}
            placeholder="60"
            name={"lecture_time"}
            type={"tel"}
            value={state.lecture_analytic.lecture_time}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                lecture_analytic: {
                  ...prev.lecture_analytic,
                  lecture_time: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className={style.academic_edit_container}>
          <JoinFormInput
            labelText={t("practicals")}
            placeholder="60"
            name={"practical_count"}
            type={"tel"}
            value={state.practical_analytic.practical_count}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                practical_analytic: {
                  ...prev.practical_analytic,
                  practical_count: +e.target.value,
                },
              }))
            }
          />
          <JoinFormInput
            labelText={t("time_practical")}
            placeholder="60"
            name={"practical_time"}
            type={"tel"}
            value={state.practical_analytic.practical_time}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                practical_analytic: {
                  ...prev.practical_analytic,
                  practical_time: e.target.value,
                },
              }))
            }
          />
        </div>
        <div className={style.academic_edit_container}>
          <JoinFormInput
            labelText={t("tutorials")}
            placeholder="60"
            name={"tutorial_count"}
            type={"tel"}
            value={state.tutorial_analytic.tutorial_count}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                tutorial_analytic: {
                  ...prev.tutorial_analytic,
                  tutorial_count: +e.target.value,
                },
              }))
            }
          />
          <JoinFormInput
            labelText={t("time_tutorial")}
            placeholder="60"
            name={"tutorial_time"}
            type={"tel"}
            value={state.tutorial_analytic.tutorial_time}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                tutorial_analytic: {
                  ...prev.tutorial_analytic,
                  tutorial_time: e.target.value,
                },
              }))
            }
          />
        </div>
        <button className={style.academic_edit_btn} onClick={onUpdate}>
          {t("update")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default AcademicEditTime;
