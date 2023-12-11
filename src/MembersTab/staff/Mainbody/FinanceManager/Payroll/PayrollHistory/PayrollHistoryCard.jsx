import React from "react";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "../Payroll.module.css";
const PayrollHistoryCard = ({ staff, setOpenEmployeeHistory }) => {
  const { t } = useTranslation();

  return (
    <section
      className={style.add_employee_staff}
      onClick={() => setOpenEmployeeHistory(staff)}
      title="View Payroll info"
    >
      <img
        src={
          staff?.emp_pay?.staff?.staffProfilePhoto
            ? `${imageShowUrl}/${staff?.emp_pay?.staff?.staffProfilePhoto}`
            : "/images/member_tab/class/default_avatar.svg"
        }
        alt="staff avatar"
      />
      <div className={style.add_employee_staff_text}>
        <h6>{`${staff?.emp_pay?.staff?.staffFirstName ?? ""} 
${staff?.emp_pay?.staff?.staffMiddleName ?? ""}
${staff?.emp_pay?.staff?.staffLastName ?? ""} `}</h6>
        <p>
          {t("salary")} : {t("rs")}{" "}
          <span
            style={{
              fontWeight: "600",
            }}
          >
            {staff?.salary ?? ""}
          </span>{" "}
          /- {staff?.pay_mode ?? ""}
        </p>
      </div>
    </section>
  );
};

export default PayrollHistoryCard;
