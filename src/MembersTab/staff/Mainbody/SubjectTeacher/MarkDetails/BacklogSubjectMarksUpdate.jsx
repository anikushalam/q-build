import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CommonStaffMember from "../../../CommonStaffMember";
import { useLocation, useNavigate } from "react-router-dom";
import goStyle from "../../../../../JoiningForm/Student/Form/JoinForm.module.css";
import QLoader from "../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./Markdetails.module.css";
import {
  useBacklogExamAllStudent,
  useBacklogExamMarks,
} from "../../../../../hooks/member_tab/subject-api";
import { useDepartmentExamDetail } from "../../../../../hooks/member_tab/department-api";

const BacklogSubjectMarksUpdate = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [location.state?.subjectId]);
  const onGoback = () => {
    navigate(-1);
  };

  const [subjects, setSubjects] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const { backlogExamAllStudent, backlogExamAllStudentRefetch } =
    useBacklogExamAllStudent({
      data: {
        sid: location.state?.subjectId,
        eid: location.state?.examId,
      },
      skip: !location.state?.subjectId,
    });
  const [backlogExamMarks] = useBacklogExamMarks();

  const { departmentExamDetail, departmentExamDetailRefetch } =
    useDepartmentExamDetail({
      eid: location.state?.examId,
      skip: !location.state?.examId,
    });
  useEffect(() => {
    if (location.state?.subjectId) backlogExamAllStudentRefetch();
  }, [location.state?.subjectId, backlogExamAllStudentRefetch]);

  useEffect(() => {
    if (backlogExamAllStudent?.students) setDisabled(false);
  }, [backlogExamAllStudent?.students]);
  useEffect(() => {
    if (location.state?.examId) departmentExamDetailRefetch();
  }, [location.state?.examId, departmentExamDetailRefetch]);
  const onInputClick = (val, prev_id) => {
    if (subjects?.length) {
      const allIds = [];
      for (let sub of subjects) {
        allIds.push(sub.studentId);
      }
      if (!allIds?.includes(val)) {
        setSubjects([
          ...subjects,
          {
            studentId: val,
            obtainMarks: 0,
            previous_year_id: prev_id,
          },
        ]);
      }
    } else {
      setSubjects([
        ...subjects,
        {
          studentId: val,
          obtainMarks: 0,
          previous_year_id: prev_id,
        },
      ]);
    }
  };

  const onInputChange = (e) => {
    for (let sub of subjects) {
      if (sub.studentId === e.target.name) {
        sub.obtainMarks = parseInt(e.target.value);
      }
    }
  };

  const onSubmitMarks = () => {
    if (location.state?.examId && location.state?.subjectId) {
      setDisabled((pre) => !pre);
      backlogExamMarks({
        sid: location.state?.subjectId,
        marksList: {
          examId: location.state?.examId,
          marks: subjects,
        },
      })
        .then(() => {
          // console.info(res);
          backlogExamAllStudentRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <CommonStaffMember>
      {" "}
      <div className={goStyle.goback_container} id="scrollView">
        <div className={goStyle.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={goStyle.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>
      <div
        className={goStyle.student_from_container}
        style={{ marginBottom: "1rem" }}
      >
        <div className={style.markDetails}>
          <div className={style.markDetailsHeader}>
            <h6>
              <span className={style.span}>{t("exam")} : </span>{" "}
              {departmentExamDetail?.exam?.examName}
            </h6>
            {subjects?.length > 0 ? (
              <div className={style.savebtn} onClick={onSubmitMarks}>
                {t("save")}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={style.markDetailsHeader2}>
            <h6>
              <span className={style.span2}> {t("Maximum Marks")} : </span>{" "}
              {backlogExamAllStudent?.maximumMarks}
            </h6>
            {departmentExamDetail?.exam?.examType === "Final" ? (
              ""
            ) : (
              <h6>
                <span className={style.span2}> {t("weightage")} : </span>{" "}
                {departmentExamDetail?.exam?.examWeight}%
              </h6>
            )}
          </div>

          <div className={style.table}>
            <table>
              <thead className={style.thead}>
                <tr className={style.tr}>
                  <th className={`${style.th} ${style.rroll}`}>
                    {t("roll_no")}
                  </th>
                  <th className={`${style.th} ${style.rname}`}>{t("name")}</th>
                  <th className={`${style.th} ${style.rmark}`}>{t("ob")}</th>
                  {departmentExamDetail?.exam?.examType === "Final" ? (
                    ""
                  ) : (
                    <th className={`${style.th} ${style.rmark}`}>{t("fr")}</th>
                  )}
                </tr>
              </thead>
              <tbody className={style.tbody}>
                {backlogExamAllStudent?.students?.map((stu) => (
                  <tr className={style.tr} key={stu?._id}>
                    <td
                      className={`${style.rroll} ${style.rrolld} ${style.td}`}
                    >
                      {stu?.studentROLLNO !== "" ? (
                        <h6> {stu?.studentROLLNO}.</h6>
                      ) : (
                        <h6></h6>
                      )}
                    </td>
                    <td className={style.td}>
                      <div className={style.student}>
                        <img
                          src={
                            stu?.studentProfilePhoto
                              ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                              : "/images/member_tab/class/default_avatar.svg"
                          }
                          alt=""
                        />
                        <h6>
                          {stu?.studentFirstName}{" "}
                          {stu?.studentMiddleName
                            ? stu?.studentMiddleName
                            : " "}{" "}
                          {stu?.studentLastName}
                        </h6>
                      </div>
                    </td>
                    <td className={`${style.td} ${style.tdinputcontaier}`}>
                      <div className={style.tdinput}>
                        <input
                          type="number"
                          name={stu?._id}
                          defaultValue={stu?.obtainMarks || 0}
                          min="0"
                          max={backlogExamAllStudent?.maximumMarks ?? 100}
                          onClick={() =>
                            onInputClick(stu?._id, stu?.previous_year_id)
                          }
                          onChange={onInputChange}
                        />
                      </div>
                    </td>
                    {departmentExamDetail?.exam?.examType === "Final" ? (
                      ""
                    ) : (
                      <td className={style.td}>
                        {(
                          (stu.obtainMarks *
                            departmentExamDetail?.exam?.examWeight) /
                          backlogExamAllStudent?.maximumMarks
                        ).toFixed(2)}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {disabled && <QLoader />}
        </div>
      </div>
    </CommonStaffMember>
  );
};

export default BacklogSubjectMarksUpdate;
