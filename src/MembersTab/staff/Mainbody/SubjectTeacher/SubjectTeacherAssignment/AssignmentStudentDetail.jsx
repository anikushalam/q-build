import style from "./SubjectTeacherAssignment.module.css";
import React, { useState, useEffect } from "react";
import {
  useSubjectAssignmentSubmitOneStudentDetail,
  useSubjectAssignmentSubmitOneStudentAction,
} from "../../../../../hooks/member_tab/subject-api";
import moment from "moment";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../Loader/QLoader";
import { pdfShowUrlNext } from "../../../../../services/BaseUrl";
import { imageExtensionVerify } from "../../../../../utils/image_extenstion";
import { useLocation, useNavigate } from "react-router-dom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
function AssignmentStudentDetail({ isDepartment, onRefetch }) {
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState("");
  const {
    subjectAssignmentSubmitOneStudentDetail,
    subjectAssignmentSubmitOneStudentDetailRefetch,
  } = useSubjectAssignmentSubmitOneStudentDetail({
    data: {
      sid: getQuery.state?.studentId,
      aid: getQuery.state?.aid,
    },
    skip: !getQuery.state?.studentId,
  });
  const { t } = useTranslation();
  const [subjectAssignmentSubmitOneStudentAction] =
    useSubjectAssignmentSubmitOneStudentAction();
  useEffect(() => {
    if (getQuery.state?.studentId)
      subjectAssignmentSubmitOneStudentDetailRefetch();
  }, [getQuery.state?.studentId]);

  const onButtonAction = (val) => {
    setDisabled((pre) => !pre);
    subjectAssignmentSubmitOneStudentAction({
      sid: getQuery.state?.studentId,
      aid: getQuery.state?.aid,
      assignmentAction: {
        assignmentSubmit: val,
        obtain_marks: state,
      },
    })
      .then(() => {
        if (!val) {
          onRefetch();
          navigate(-1);
        }
        subjectAssignmentSubmitOneStudentDetailRefetch();
        setDisabled((pre) => !pre);
      })
      .catch(() => {});
  };
  // console.info("this is ", subjectAssignmentSubmitOneStudentDetail);
  return (
    <div className={style.assignmentDetail}>
      <div className={style.assignmentDetailTop}>
        <img
          src="/images/members/arrow-left.svg"
          alt=""
          onClick={() => navigate(-1)}
        />
        <div>
          <h6>{`${
            subjectAssignmentSubmitOneStudentDetail?.studentAssignment
              ?.studentFirstName ?? ""
          } ${
            subjectAssignmentSubmitOneStudentDetail?.studentAssignment
              ?.studentMiddleName
              ? subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                  ?.studentMiddleName
              : ""
          } ${
            subjectAssignmentSubmitOneStudentDetail?.studentAssignment
              ?.studentLastName ?? ""
          }`}</h6>
          <p>
            {t("roll_no")}{" "}
            {
              subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                ?.studentROLLNO
            }
          </p>
        </div>
        <img
          className={style.menu}
          src="/images/menu-dots-dark-icon.svg"
          alt=""
        />
      </div>
      {subjectAssignmentSubmitOneStudentDetail?.studentAssignment?.assignments
        ?.length && (
        <div className={style.assignmentDetailBody}>
          <div
            className={style.assignmentDetailBodyTop}
            style={{
              paddingLeft: "0",
              paddingBottom: "0",
            }}
          >
            <h6> {t("sub_date")} : </h6>
            <h6>
              {moment(
                subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                  ?.assignments[0]?.submmittedDate
              ).format("DD MMM yyyy")}
            </h6>
          </div>
          <div className={style.assignment_body_row}>
            <p>
              {t("ass_name")}
              {" : "}
            </p>
            <h6>
              {
                subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                  ?.assignments[0]?.assignmentName
              }
            </h6>
          </div>
          <div className={style.assignment_body_row}>
            <p>
              {t("due_date")} {" : "}
            </p>
            <h6>
              {moment(
                subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                  ?.assignments[0]?.dueDate
              ).format("DD MMM yyyy")}
            </h6>
          </div>

          <p>
            {t("description")} {" :"}
          </p>
          <h6
            style={{
              whiteSpace: "break-spaces",
            }}
          >
            {
              subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                ?.assignments[0]?.studentDescritpion
            }
          </h6>
          {subjectAssignmentSubmitOneStudentDetail?.studentAssignment
            ?.assignments[0]?.studentFiles?.length > 0 ? (
            <p>{t("file/image")}</p>
          ) : (
            ""
          )}

          {subjectAssignmentSubmitOneStudentDetail?.studentAssignment?.assignments[0]?.studentFiles?.map(
            (doc) =>
              doc?.documentType === "application/octet-stream" ||
              doc?.documentType === "image/jpeg" ||
              doc?.documentType === "image/png" ||
              imageExtensionVerify(doc?.documentKey) ? (
                <a
                  href={`${pdfShowUrlNext}/${doc?.documentKey}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                  key={doc?._id}
                >
                  <div className={style.img}>
                    <img
                      src={"/images/members/img-icon.svg"}
                      alt="upload documents"
                    />
                    <p>{doc.documentName}</p>
                  </div>
                </a>
              ) : (
                <a
                  title="Download File"
                  href={`${pdfShowUrlNext}/${doc?.documentKey}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div className={style.img} key={doc?._id}>
                    <img
                      src={
                        doc?.documentType === "image/jpeg"
                          ? "/images/members/img-icon.svg"
                          : "/images/admin/pdf-icon.svg"
                      }
                      alt="upload documents"
                    />
                    <p>{doc?.documentName}</p>
                  </div>
                </a>
              )
          )}

          {subjectAssignmentSubmitOneStudentDetail?.studentAssignment
            ?.assignments[0]?.assignment_total_mark ? (
            <div
              className={style.assignment_body_row}
              style={{
                marginTop: "1rem",
              }}
            >
              <p
                style={{
                  marginBottom: "0",
                }}
              >
                {t("total_marks")} {" : "}
              </p>
              <h6>
                {
                  subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                    ?.assignments[0]?.assignment_total_mark
                }
              </h6>
            </div>
          ) : null}
          {subjectAssignmentSubmitOneStudentDetail?.studentAssignment
            ?.assignments[0]?.assignment_obtain_mark ? (
            <div className={style.assignment_body_row}>
              <p>
                {t("obtain_marks")} {" : "}
              </p>
              <h6>
                {
                  subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                    ?.assignments[0]?.assignment_obtain_mark
                }
              </h6>
            </div>
          ) : (
            <JoinFormInput
              labelText={t("obtain_marks")}
              placeholder={t("enter_the_marks")}
              name={"obtain_marks"}
              value={state}
              type={"tel"}
              onChange={(e) => setState(+e.target.value)}
            />
          )}

          {isDepartment ? null : (
            <>
              <hr />
              {!subjectAssignmentSubmitOneStudentDetail?.studentAssignment
                ?.assignments[0]?.assignmentSubmit && (
                <div className={style.assignmentActionButton}>
                  <div
                    className={style.assignmentCancelButton}
                    onClick={() => onButtonAction(false)}
                  >
                    {t("incomplete")}
                  </div>
                  <div
                    className={`${style.completed}`}
                    onClick={() => onButtonAction(true)}
                  >
                    {t("completed")}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default AssignmentStudentDetail;
