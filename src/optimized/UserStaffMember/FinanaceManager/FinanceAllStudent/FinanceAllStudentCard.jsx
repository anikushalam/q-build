import {
  assestsFeedUrl,
  assestsUtilityUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { Link, useLocation, useParams } from "react-router-dom";
import style from "./FinanceAllStudent.module.css";
import BorderBottom from "../../../Ui/Border/BorderBottom";
const FinanceAllStudentCard = ({ student, messageId, headId, instituteId }) => {
  const params = useParams();
  const getQuery = useLocation();
  return (
    <>
      <Link
        to={`/q/${params.username}/student/profile`}
        state={{
          ...getQuery.state,
          sid: student?._id,
          // studentId: student?._id,
          messageId: messageId,
          headId: headId,
          instituteId: instituteId,
        }}
      >
        <div
          className={style.student_table_content_card}
          style={{
            cursor: "pointer",
          }}
        >
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
            <img
              src={
                student?.studentProfilePhoto
                  ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                  : `${assestsFeedUrl}/feed-user-avatar.svg`
              }
              loading="lazy"
              alt="avatar"
            />

            <div>
              <p className={style.student_table_header_name}>
                {`${student?.studentFirstName ?? ""} ${
                  student?.studentMiddleName ?? ""
                } ${student?.studentLastName ?? ""}`}
                {student?.profile_percentage === "100" ||
                student?.profile_percentage === 100 ? (
                  <img
                    src={`${assestsUtilityUrl}/complete.svg`}
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
              <img src={`${assestsUtilityUrl}/gender.svg`} alt="gender icon" />

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
              <img src={`${assestsUtilityUrl}/phone.svg`} alt="phone icon" />
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
          customStyleBorder={{
            margin: "0",
          }}
        />
      </Link>
    </>
  );
};

export default FinanceAllStudentCard;
