import React from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
const AdmissionFirstPopup = ({
  onClose,
  onDepartmentSelect,
  department,
  batch,
  classMaster,
  allDepartment,
  allStandard,
  onBatchSelect,
  onClassSelect,
  filled,
  onNext,
}) => {
  const { t } = useTranslation();
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.seating_modal}>
        <section
          className={style.seating_modal_title_left}
          style={{
            position: "relative",
          }}
        >
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt=""
          />
          <h6>{t("add_admission_card")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <CustomSelectDepartment
          selectLabel={t("select_department")}
          onClick={onDepartmentSelect}
          selectedValue={t("please_select_the_department")}
          options={allDepartment}
          errorShow={filled["department"]}
          openAs="PROMOTE"
          viewAs={"ADMISSION_APPLICATION"}
          defalutValue={department?.dName}
        />
        <CustomSelectDepartment
          selectLabel={t("select_batch")}
          onClick={onBatchSelect}
          selectedValue={t("select_batch_placeholder")}
          options={department?.batches ?? []}
          errorShow={filled["batch"]}
          openAs="PROMOTE"
          defalutValue={batch?.batchName}
          viewAs={"ADMISSION_APPLICATION"}
        />
        <CustomSelectDepartment
          selectLabel={t("select_standerd")}
          onClick={onClassSelect}
          selectedValue={t("please_select_standerd")}
          options={allStandard}
          errorShow={filled["classMaster"]}
          openAs="PROMOTE"
          defalutValue={classMaster?.className}
          viewAs={"ADMISSION_APPLICATION"}
        />
        <button className={style.start_arrangement_btn} onClick={onNext}>
          {t("next")}
        </button>
      </div>
    </PopupWrapper>
  );
};

export default AdmissionFirstPopup;
