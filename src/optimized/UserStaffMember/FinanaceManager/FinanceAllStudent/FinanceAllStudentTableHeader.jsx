import { useTranslation } from "react-i18next";
import style from "./FinanceAllStudent.module.css";
const FinanceAllStudentTableHeader = ({ studentAlias }) => {
  const { t } = useTranslation();
  return (
    <div className={style.student_table}>
      <div className={style.student_table_header}>
        <p
          className={style.student_table_header_label}
          style={{
            flex: "1",
          }}
        >
          {studentAlias ?? t("gr_no")}
        </p>
        <p
          className={style.student_table_header_label}
          style={{
            flex: "3",
          }}
        >
          {t("name")}
        </p>
        <p
          className={style.student_table_header_label}
          style={{
            flex: "2",
          }}
        >
          {t("contact_number")}
        </p>
        <p
          className={style.student_table_header_label}
          style={{
            flex: "1",
          }}
        >
          {t("applicable_outs")}
        </p>
      </div>
    </div>
  );
};

export default FinanceAllStudentTableHeader;
