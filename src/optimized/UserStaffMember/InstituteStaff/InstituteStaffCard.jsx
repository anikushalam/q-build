import { assestsFeedUrl } from "../../Services/UrlConfig/AssestsBaseUrl";
import style from "../PlateformUser/PlateformUser.module.css";
import { imageShowUrl } from "../../Services/UrlConfig/BaseUrl";
import BorderBottom from "../../Ui/Border/BorderBottom";
import { useTranslation } from "react-i18next";
const InstituteStaffCard = ({ staff, selectedId, onSelect }) => {
  const { t } = useTranslation();
  const onSelectStaff = () => {
    onSelect(staff);
  };
  return (
    <>
      <div
        className={style.assign_show_list_each}
        style={
          selectedId === staff?._id
            ? { backgroundColor: "rgba(75, 26, 133, 0.1)" }
            : null
        }
        onClick={onSelectStaff}
      >
        <img
          src={
            staff?.staffProfilePhoto
              ? `${imageShowUrl}/${staff.staffProfilePhoto}`
              : `${assestsFeedUrl}/feed-staff-avatar.svg`
          }
          alt="profile avatar"
        />
        <div className={style.assign_each_paragraph}>
          <h6>{`${staff?.staffFirstName ?? ""} ${
            staff?.staffMiddleName ?? ""
          } ${staff?.staffLastName ?? ""}`}</h6>
          <p>
            {t("index")} {" : "}
            {staff?.staffROLLNO}
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

export default InstituteStaffCard;
