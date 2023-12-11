import React, { useState } from "react";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { Link, useParams } from "react-router-dom";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { imageShowUrl, fileShowUrl } from "../../../../../services/BaseUrl";
import { useExportZipStudentProfilePhoto } from "../../../../../hooks/ExportData/export-data-api";
import QLoader from "../../../../../Loader/QLoader";

const StudentDetailCard = ({
  student,
  is_view,
  messageId,
  headId,
  // carryParentState,
  instituteId,
}) => {
  const params = useParams();
  const [disabled, setDisabled] = useState(false);
  const [exportZipStudentProfilePhoto] = useExportZipStudentProfilePhoto();
  const onZipDownload = (e) => {
    e.preventDefault();
    setDisabled(true);
    exportZipStudentProfilePhoto({
      instituteId: student?._id,
    })
      .then((res) => {
        // if (res?.data?.Key) {
        //   let anchorTag = document.getElementById("id_card_photo");
        //   anchorTag.href = `${pdfShowUrlNext}/${res?.data?.Key}`;
        //   anchorTag.addEventListener("click", null);
        // }
        window.open(`${fileShowUrl}/${res?.data?.Key}`, "_blank");
        setDisabled(false);
      })
      .catch({});
  };
  return (
    <>
      <Link
        to={`/q/${params.username}/student/profile`}
        state={{
          sid: student?._id,
          viewAs: is_view ? is_view : "INSTITUTE_ADMIN",
          messageId: messageId,
          headId: headId,
          studentMessaageView: "STUDENT_MESSAGE",
          instituteId: instituteId,
          // ...carryParentState,
        }}
      >
        <div className={style.student_table_content_card}>
          <p
            className={style.student_table_header_label}
            style={{
              flex: "1",
            }}
          >
            {student?.studentGRNO ?? ""}
          </p>
          <div
            className={style.student_table_profile}
            style={{
              flex: "3",
            }}
          >
            {is_view === "ID_CARD_SECTION" ? (
              <img
                src={
                  student?.studentProfilePhoto
                    ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                loading="lazy"
                alt="avatar"
                style={{
                  cursor: "pointer",
                }}
                title="Download profile photo"
                onClick={onZipDownload}
              />
            ) : (
              <img
                src={
                  student?.studentProfilePhoto
                    ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                loading="lazy"
                alt="avatar"
              />
            )}

            <div>
              <p className={style.student_table_header_name}>
                {`${student?.studentFirstName ?? ""} ${
                  student?.studentMiddleName ?? ""
                } ${student?.studentLastName ?? ""}`}
                {student?.profile_percentage === "100" ||
                student?.profile_percentage === 100 ? (
                  <img
                    src={"/images/member_tab/class/profile-complete-icon.svg"}
                    loading="lazy"
                    alt="avatar"
                    style={{
                      marginLeft: "0.6rem",
                      height: "1rem",
                    }}
                  />
                ) : null}
              </p>
              <p className={style.student_table_header_label_text}>
                {student?.studentClass?.classTitle ?? ""}
              </p>
            </div>
          </div>
          <div
            className={style.student_table_header_label}
            style={{
              flex: "2",
            }}
          >
            <div className={style.student_table_contact}>
              <img src="/images/user_signup/gender.svg" alt="gender icon" />

              <p className={style.student_table_contact_email}>
                {student?.studentGender}
              </p>
            </div>
            <div
              className={style.student_table_contact}
              style={{
                marginTop: "0.4rem",
              }}
            >
              <img src="/images/phone-white.svg" alt="" />
              <p className={style.student_table_contact_number}>
                {student?.user.userPhoneNumber
                  ? student?.user.userPhoneNumber
                  : student?.user.userEmail ?? ""}
              </p>
            </div>
          </div>
          <p
            className={style.student_table_header_label}
            style={{
              flex: "1",
            }}
          >
            {student?.applicable_fees_pending ?? 0}
          </p>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
      </Link>
      {disabled && <QLoader />}
    </>
  );
};

export default StudentDetailCard;
