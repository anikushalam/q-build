import React, { useEffect, useState } from "react";
import style from "../../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import ApplicationOtherInfo from "./ApplicationOtherInfo";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";

function AdmissionApplicationEdit({
  openApplicationMenu,
  onEdit,
  onClose,
  viewAs,
}) {
  const { t } = useTranslation();
  const [activeStep, setActivatedStep] = useState(0);
  const [filled, setFilled] = useState("");
  const [formdata, setFormData] = useState({
    applicationName: openApplicationMenu?.applicationName,
    gr_initials: openApplicationMenu?.gr_initials,
  });
  useEffect(() => {
    if (
      openApplicationMenu?.gr_initials ||
      openApplicationMenu?.applicationName
    ) {
      setFormData((prev) => ({
        ...prev,
        applicationName: openApplicationMenu?.applicationName,
        gr_initials: openApplicationMenu?.gr_initials,
      }));
    }
  }, [openApplicationMenu?.applicationName, openApplicationMenu?.gr_initials]);

  const onActiveStep = (val) => {
    setActivatedStep(val);
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };
  const onNext = () => {
    const validation = onValidation({
      applicationName: formdata.applicationName,
      // gr_initials: formdata.gr_initials,
    });
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      onActiveStep(1);
    }
  };

  // console.info("sfgjsd", openApplicationMenu);

  const onInputChange = (e) => {
    if (e.target.name === "gr_initials") {
      if (e.target.value?.length <= 10)
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    } else
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
  };

  const onUpdateApplication = (data) => {
    onEdit({
      ...formdata,
      ...data,
    });
  };
  return (
    <>
      {activeStep === 0 && (
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
              <h6>{t("update_admission_application")}</h6>
            </section>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <JoinFormInput
              labelText={t("application_name")}
              placeholder={t("please_enter_application_name")}
              name={"applicationName"}
              value={formdata?.applicationName}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled["applicationName"]}
            />
            {viewAs === "HOSTEL_MANAGER" ? (
              ""
            ) : (
              <JoinFormInput
                labelText={t("application_initials")}
                placeholder={t("department_initials_placeholder")}
                name={"gr_initials"}
                value={formdata?.gr_initials}
                type={"text"}
                onChange={onInputChange}
              />
            )}
            {viewAs === "HOSTEL_MANAGER" ? (
              <>
                <CustomNormalSelectInput
                  selectLabel={t("select_unit")}
                  openAs="BACKLOG"
                  value={
                    openApplicationMenu?.applicationUnit?.hostel_unit_name ?? ""
                  }
                />
                <CustomNormalSelectInput
                  selectLabel={t("select_batch")}
                  openAs="BACKLOG"
                  value={openApplicationMenu?.applicationBatch?.batchName ?? ""}
                />
              </>
            ) : (
              <>
                <CustomNormalSelectInput
                  selectLabel={t("select_department")}
                  openAs="BACKLOG"
                  value={
                    openApplicationMenu?.applicationDepartment?.dName ?? ""
                  }
                />
                <CustomNormalSelectInput
                  selectLabel={t("select_batch")}
                  openAs="BACKLOG"
                  value={openApplicationMenu?.applicationBatch?.batchName ?? ""}
                />
                <CustomNormalSelectInput
                  selectLabel={t("select_standerd")}
                  openAs="BACKLOG"
                  value={
                    openApplicationMenu?.applicationMaster?.className ?? ""
                  }
                />
              </>
            )}
            <button className={style.start_arrangement_btn} onClick={onNext}>
              {t("next")}
            </button>
          </div>
        </PopupWrapper>
      )}
      {activeStep === 1 && (
        <ApplicationOtherInfo
          onClose={() => onActiveStep(0)}
          is_update
          isType={
            openApplicationMenu?.applicationType === "Plain Application"
              ? "Normal Application"
              : "Direct Application"
          }
          openApplicationMenu={openApplicationMenu}
          onCreateApplication={onUpdateApplication}
          isDirect={
            openApplicationMenu?.application_type === "Step Wise Admission"
              ? false
              : true
          }
          viewAs={viewAs === "HOSTEL_MANAGER" ? "HOSTEL" : ""}
        />
      )}
    </>
  );
}

export default AdmissionApplicationEdit;
