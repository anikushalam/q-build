import React, { useEffect, useState } from "react";
import style from "../../../DepartmentHead/Exminations/SeatingArrangement/SeatingArrangement.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import JoinFormTextArea from "../../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import JoinFormFile from "../../../../../../JoiningForm/Student/Form/JoinFormFile";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
const ApplicationOtherInfo = ({
  onClose,
  is_update,
  openApplicationMenu,
  isType,
  onCreateApplication,
  isDirect,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [formdata, setFormData] = useState({
    applicationSeats: "",
    applicationStartDate: "",
    applicationEndDate: "",
    applicationAbout: "",
    applicationPhoto: "",
  });
  const [filled, setFilled] = useState("");
  const [file, setFile] = useState("");
  const [disabled, setDisabled] = useState(false);

  const [oneFileUpload] = useFileUpload();
  useEffect(() => {
    if (is_update) {
      setFormData((prev) => ({
        ...prev,
        applicationSeats: openApplicationMenu?.applicationSeats,
        applicationStartDate: openApplicationMenu?.applicationStartDate,
        applicationEndDate: openApplicationMenu?.applicationEndDate,
        applicationAbout: openApplicationMenu?.applicationAbout,
        applicationPhoto: openApplicationMenu?.applicationPhoto,
      }));
    }
  }, [is_update, openApplicationMenu]);

  const onStartDate = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setFormData((prev) => ({
      ...prev,
      applicationStartDate: modify,
    }));
  };

  const onEndDate = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setFormData((prev) => ({
      ...prev,
      applicationEndDate: modify,
    }));
  };

  const onInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    setFile(e.target.files[0]);
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        setDisabled((pre) => !pre);
        setFormData((prev) => ({
          ...prev,
          applicationPhoto: res.data?.imageKey,
        }));
      })
      .catch(() => {
        setDisabled((pre) => !pre);
      });
  };
  const onNext = () => {
    if (isType === "Normal Application") {
      onCreateApplication(formdata);
    } else {
      const validation = onValidation({
        applicationSeats: formdata.applicationSeats,
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
        onCreateApplication(formdata);
      }
    }
  };
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
          <h6>
            {t(
              is_update
                ? "update_admission_application"
                : isType === "Normal Application"
                ? "create_new_application"
                : viewAs === "HOSTEL"
                ? "new_direct_hostel_application"
                : "new_direct_admission_application"
            )}
          </h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <JoinFormInput
          labelText={t(
            isDirect ? "available_seat_not_optional" : "available_seat"
          )}
          placeholder={t("please_enter_available_seat")}
          name={"applicationSeats"}
          value={formdata?.applicationSeats}
          type={"tel"}
          onChange={onInputChange}
          errorShow={filled["applicationSeats"]}
        />

        <JoinFormCalender
          labelText={t("application_start_date")}
          placeholder={t("please_select_the_date")}
          name={"applicationStartDate"}
          value={formdata.applicationStartDate}
          onDateFunction={onStartDate}
          customStyleContainer={{
            position: "relative",
            width: "100%",
          }}
          datePickerPosition={{
            top: "0rem",
            left: "2rem",
          }}
          customStyleCaledarIcon={{
            bottom: "1.7rem",
          }}
        />
        <JoinFormCalender
          labelText={t("application_end_date")}
          placeholder={t("please_select_the_date")}
          name={"applicationEndDate"}
          value={formdata.applicationEndDate}
          onDateFunction={onEndDate}
          customStyleContainer={{
            position: "relative",
            width: "100%",
          }}
          datePickerPosition={{
            top: "0rem",
            left: "2rem",
          }}
          customStyleCaledarIcon={{
            bottom: "1.7rem",
          }}
        />
        <JoinFormFile
          labelText={t("brochure")}
          name="brochure_file"
          value={
            file
              ? {
                  originalName: file?.name,
                }
              : formdata.applicationPhoto
              ? {
                  originalName: "Brochure file",
                }
              : ""
          }
          onChange={onFileUpload}
          customStyleContainer={{
            width: "100%",
          }}
        />
        <JoinFormTextArea
          labelText={t("application_info_required")}
          placeholder={t("write_something")}
          name={"applicationAbout"}
          value={formdata.applicationAbout}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "100%",
          }}
        />
        <button className={style.start_arrangement_btn} onClick={onNext}>
          {t(is_update ? "update" : "create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default ApplicationOtherInfo;
