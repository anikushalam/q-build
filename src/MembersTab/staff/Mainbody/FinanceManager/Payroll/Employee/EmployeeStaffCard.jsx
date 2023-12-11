import React from "react";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "../Payroll.module.css";

const EmployeeStaffCard = ({ staff, setSelectedEmployee }) => {
  const { t } = useTranslation();
  return (
    <>
      <section
        className={style.add_employee_staff}
        onClick={() => setSelectedEmployee(staff)}
        title="Open staff Account"
      >
        <img
          src={
            staff?.staff?.staffProfilePhoto
              ? `${imageShowUrl}/${staff?.staff?.staffProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          alt="staff avatar"
        />
        <div className={style.add_employee_staff_text}>
          <h6>{`${staff?.staff?.staffFirstName ?? ""} 
  ${staff?.staff?.staffMiddleName ?? ""}
  ${staff?.staff?.staffLastName ?? ""} `}</h6>
          <p>
            {t("index_number")} : {staff?.staff?.staffROLLNO ?? ""}
          </p>
        </div>
      </section>
    </>
  );
};

export default EmployeeStaffCard;
