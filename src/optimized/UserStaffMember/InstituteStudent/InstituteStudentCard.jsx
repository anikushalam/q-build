import { assestsFeedUrl } from "../../Services/UrlConfig/AssestsBaseUrl";
import style from "../PlateformUser/PlateformUser.module.css";
import { imageShowUrl } from "../../Services/UrlConfig/BaseUrl";
import BorderBottom from "../../Ui/Border/BorderBottom";
import { useTranslation } from "react-i18next";
const InstituteStudentCard = ({ student, selectedId, onSelect }) => {
  const { t } = useTranslation();
  const onSelectStudent = () => {
    onSelect(student);
  };
  return (
    <>
      <div
        className={style.assign_show_list_each}
        style={
          selectedId === student?._id
            ? { backgroundColor: "rgba(75, 26, 133, 0.1)" }
            : null
        }
        onClick={onSelectStudent}
      >
        <img
          src={
            student?.studentProfilePhoto
              ? `${imageShowUrl}/${student.studentProfilePhoto}`
              : `${assestsFeedUrl}/feed-staff-avatar.svg`
          }
          alt="profile avatar"
        />
        <div className={style.assign_each_paragraph}>
          <h6>{`${student?.studentFirstName ?? ""} ${
            student?.studentMiddleName ?? ""
          } ${student?.studentLastName ?? ""}`}</h6>
          <p>
            {t("gr_number")} {" : "}
            {student?.studentGRNO}
          </p>
        </div>
      </div>
      <BorderBottom
        customStyleBorder={{
          margin: "0",
        }}
      />
    </>
  );
};

export default InstituteStudentCard;
