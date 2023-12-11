import { t } from "i18next";
import React, { useEffect, useState } from "react";
import {
  useSubjectOneExamMarks,
  useSubjectOneExamStudents,
} from "../../../../../hooks/member_tab/subject-api";
import QLoader from "../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./Markdetails.module.css";
import { Notfication } from "../../../../../validation/Snackbar";

function MarkDetails({ examView, sid, isDepartment }) {
  const [subjects, setSubjects] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
    isSuccess: false,
  });
  const { subjectOneExamStudents, subjectOneExamStudentsRefetch } =
    useSubjectOneExamStudents({
      data: { sid: sid, eid: examView?._id, page: 1, limit: 50 },
      skip: !sid,
    });
  const [subjectOneExamMarks] = useSubjectOneExamMarks();
  useEffect(() => {
    if (sid) subjectOneExamStudentsRefetch();
  }, [sid, subjectOneExamStudentsRefetch]);

  useEffect(() => {
    if (subjectOneExamStudents?.students) setDisabled(false);
  }, [subjectOneExamStudents?.students]);

  const onInputClick = (val) => {
    if (isDepartment) {
    } else {
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
            },
          ]);
        }
      } else {
        setSubjects([
          ...subjects,
          {
            studentId: val,
            obtainMarks: 0,
          },
        ]);
      }
    }
  };

  const onInputChange = (e) => {
    if (isDepartment) {
    } else {
      if (+e.target.value < 0) {
        setNotificationState({
          msg: t("obtain_marks_validation_2"),
          run: true,
        });
      } else if (+e.target.value <= +examView?.totalMarks) {
      } else {
        setNotificationState({
          msg: `${t("obtain_marks_validation_1")} ${examView?.totalMarks}`,
          run: true,
        });
      }
      for (let sub of subjects) {
        if (sub.studentId === e.target.name) {
          sub.obtainMarks = parseInt(e.target.value);
        }
      }
    }
  };

  const onSubmitMarks = () => {
    if (isDepartment) {
    } else {
      let flag = true;
      for (let mark of subjects) {
        if (mark?.obtainMarks < 0) {
          setNotificationState({
            msg: t("obtain_marks_validation_2"),
            run: true,
          });
          flag = false;
          break;
        } else if (mark?.obtainMarks > +examView?.totalMarks) {
          setNotificationState({
            msg: `${t("obtain_marks_validation_1")} ${examView?.totalMarks}`,
            run: true,
          });
          flag = false;
          break;
        } else {
        }
      }
      if (flag) {
        setDisabled((pre) => !pre);
        subjectOneExamMarks({
          sid: sid,
          marksList: {
            examId: examView?._id,
            marks: subjects,
          },
        })
          .then(() => {
            subjectOneExamStudentsRefetch();
            setDisabled((pre) => !pre);
            setNotificationState({
              msg: t("obtain_marks_validation_3"),
              run: true,
              isSuccess: true,
            });
          })
          .catch({});
      }
    }
  };

  return (
    <>
      <div className={style.markDetails}>
        <div className={style.markDetailsHeader}>
          <h6>
            <span className={style.span}>{t("exam")} : </span>{" "}
            {examView?.examName}
          </h6>
          {subjects?.length > 0 && !isDepartment ? (
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
            {examView?.totalMarks}
          </h6>
          {/* {examView?.examType === "Final" ? (
          ""
        ) : (
          <h6>
            <span className={style.span2}> {t("weightage")} : </span>{" "}
            {examView?.examWeight}%
          </h6>
        )} */}
        </div>

        <div className={style.table}>
          <table>
            <thead className={style.thead}>
              <tr className={style.tr}>
                <th className={`${style.th} ${style.rroll}`}>{t("roll_no")}</th>
                <th
                  className={`${style.th} ${style.rname}`}
                  style={{
                    width: "50%",
                  }}
                >
                  {t("name")}
                </th>
                <th
                  className={`${style.th}`}
                  style={{
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  {t("obtain_marks")}
                </th>
                <th
                  className={`${style.th}`}
                  style={{
                    width: "10%",
                    textAlign: "center",
                  }}
                >
                  {t("attendance")}
                </th>
              </tr>
            </thead>
            <tbody className={style.tbody}>
              {subjectOneExamStudents?.students?.map((stu) => (
                <tr className={style.tr} key={stu?._id}>
                  <td className={`${style.rroll} ${style.rrolld} ${style.td}`}>
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
                        {stu?.studentMiddleName ? stu?.studentMiddleName : " "}{" "}
                        {stu?.studentLastName}
                      </h6>
                    </div>
                  </td>
                  <td
                    className={`${style.td} ${style.tdinputcontaier}`}
                    style={{
                      width: "20%",
                      textAlign: "center",
                    }}
                  >
                    <div className={style.tdinput}>
                      <input
                        type="tel"
                        name={stu?._id}
                        defaultValue={
                          stu?.obtainMarks === 0 ? "" : stu?.obtainMarks
                        }
                        // value={}
                        placeholder="0"
                        onClick={() => onInputClick(stu?._id)}
                        onChange={onInputChange}
                      />
                    </div>
                  </td>
                  <td
                    className={style.td}
                    style={{
                      width: "10%",
                      textAlign: "center",
                    }}
                  >
                    {stu.present === null ? "_" : stu.present ? "P" : "A"}
                    {/* {(
                    (stu.obtainMarks * examView?.examWeight) /
                    examView?.totalMarks
                  ).toFixed(2)} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {disabled && <QLoader />}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type={notificationState.isSuccess ? "success" : "error"}
      />
    </>
  );
}

export default MarkDetails;
