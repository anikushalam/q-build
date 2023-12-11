import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TextInput } from "../../../../../../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import CustomAvatar from "../../../../../../Custom/Avatar/CustomAvatar";
import ButtonWithAction from "../../../../../../Custom/Button/ButtonWithAction";
import { InputDateWithoutIcon } from "../../../../../../Custom/Input/InputDateField";
import { withCurrentDate } from "../../../../../../Functions/timeComparison/timeComparison";
import { useAddEnquiry } from "../../../../../../hooks/member_tab/admission-api";
// import Crop from "../../../../../../ImageCrop/Crop";
import QLoader from "../../../../../../Loader/QLoader";
import { customAvatarUrl } from "../../../../../../services/BaseUrl";
import style from "./NewEnquiryModal.module.css";
import SelectOptions from "./SelectOptions";

const AddEnquiryForm = ({
  setIndex,
  selectApplication,
  onClose,
  setReftechWhenMark,
}) => {
  const { t } = useTranslation();
  const [addEnquiry] = useAddEnquiry();
  const [file, setFile] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [dateInput, setDateInput] = useState();
  const [enquiryForm, setEnquiryForm] = useState({
    inquiry_student_name: "",
    inquiry_student_gender: "",
    // inquiry_student_dob: "",
    inquiry_student_address: "",
    inquiry_student_previous: "",
    inquiry_student_mobileNo: "",
  });
  const [disable, setDisabled] = useState(false);
  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textArea.style.height = `${scHeight}px`;
  });
  const onInputUpdate = (e) => {
    setEnquiryForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onAddEnquiry = () => {
    if (selectApplication && dateInput) {
      setDisabled((pre) => !pre);
      const addEnquiryData = new FormData();
      let splitDate = dateInput?.split("/");
      let student_dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      addEnquiryData.append("sample_pic", file);
      addEnquiryData.append("inquiry_student_dob", student_dob);
      for (let obj in enquiryForm) {
        addEnquiryData.append(obj, enquiryForm[obj]);
      }
      addEnquiry({
        aid: selectApplication,
        enquiry: addEnquiryData,
      })
        .then(() => {
          //   console.info("this si as fdda", res);
          setReftechWhenMark(true);
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };

  useEffect(() => {
    if (openDate) {
      document.getElementById("scrollToTop")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [openDate]);

  const onDateChange = (val) => {
    const onDateValidate = withCurrentDate(val);
    if (onDateValidate) {
      setDateInput(val);
    } else {
      setDateInput("");
    }
    setOpenDate((pre) => !pre);
  };
  return (
    <>
      <div className={style.modalhead} id="scrollToTop">
        <img
          src="/images/back.svg"
          alt="go back icon"
          onClick={() => setIndex(0)}
        />
        <h6>{t("enquire")}</h6>
        <div />
      </div>
      <div className={style.modalbody}>
        <div className={style.formcontainer}>
          <div className={style.profilephotocontainerr}>
            <div className={style.profilephotocontainer}>
              {
                <label
                  htmlFor="profile"
                  className={style.profilephotocontainerr}
                  onClick={() => setOpenCrop(true)}
                >
                  <img
                    className={style.profilephotoins}
                    src={
                      file
                        ? `${customAvatarUrl}/${file}`
                        : "/images/ins_default_profile.svg"
                    }
                    alt="student avatar"
                  />
                  <img
                    src="/images/user-pencil-edit-transparent.svg"
                    alt="edit icon"
                    className={style.form_edit_icon}
                  />
                </label>
              }
            </div>
          </div>
          <div className={style.rowItem}>
            <h6>{t("student_name_")}</h6>
            <TextInput
              type="text"
              name="inquiry_student_name"
              placeholder={t("please_enter_full_name")}
              value={enquiryForm?.inquiry_student_name}
              handleChange={onInputUpdate}
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>

          <div className={style.rowItem}>
            <h6>{t("gender")}</h6>
            <div
              className={style.inputt}
              style={{
                position: "relative",
              }}
              onClick={() => setOpenOption(!openOption)}
            >
              {enquiryForm.inquiry_student_gender === "" ? (
                <p className={style.selectText}>{t("gender_details")}</p>
              ) : (
                <p className={style.selectTextActive}>
                  {enquiryForm.inquiry_student_gender}
                </p>
              )}
              {openOption ? (
                <img
                  className={style.arrowIcon}
                  src="/images/up-triangle-icon.svg"
                  alt=""
                />
              ) : (
                <img
                  className={style.arrow}
                  src="/images/downn-icon.svg"
                  alt=""
                />
              )}
              {openOption && (
                <SelectOptions
                  open={openOption}
                  onClose={() => setOpenOption(false)}
                  onSelect={onInputUpdate}
                />
              )}
            </div>
          </div>

          <div className={style.rowItem}>
            <InputDateWithoutIcon
              customStyleInput={{
                width: "100%",
                height: "2.2rem",
                padding: "1rem 0.5rem",
              }}
              placeholder={t("enter_dob")}
              datePickerPosition={{
                top: "-17rem",
                left: "1rem",
                borderRadius: "0.375rem",
                paddingBottom: "0",
              }}
              dateItemStyle={{
                padding: "0.25rem",
              }}
              range={false}
              label={t("dob")}
              dateInput={dateInput}
              setDateInput={onDateChange}
              setOpenDate={setOpenDate}
              asOpen={"Enquiry"}
            />
          </div>

          <div className={style.rowItem}>
            <h6>{t("mobile_bumber")}</h6>
            <TextInput
              type="tel"
              maxLength="10"
              name={"inquiry_student_mobileNo"}
              placeholder={t("enter_mobile")}
              value={enquiryForm.inquiry_student_mobileNo}
              handleChange={onInputUpdate}
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>

          <div className={style.rowItem}>
            <h6>{t("address")}</h6>
            <textarea
              className={style.pollTextarea}
              id="pollTextArea"
              type="text"
              required
              maxlength="50"
              placeholder={t("enter_add")}
              name="inquiry_student_address"
              value={enquiryForm.inquiry_student_address}
              onChange={onInputUpdate}
            />
          </div>

          <div className={style.rowItem}>
            <h6>{t("prev_schol_optional")}</h6>
            <TextInput
              type="text"
              name="inquiry_student_previous"
              placeholder={t("enter_prev_optional")}
              value={enquiryForm?.inquiry_student_previous}
              handleChange={onInputUpdate}
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
              }}
            />
          </div>

          <ButtonWithAction
            disabled={disable}
            buttonText={t("add")}
            customStyleButton={{
              minHeight: "2.3rem",

              marginBottom: "1rem",
            }}
            customStyleButtonText={{
              fontSize: "1rem",
            }}
            onAction={onAddEnquiry}
          />
        </div>
      </div>
      {openCrop && (
        <CustomAvatar
          onClose={() => setOpenCrop(false)}
          showContent="Select Avatar"
          onClick={setFile}
        />
      )}
      {disable && <QLoader />}
    </>
  );
};

export default AddEnquiryForm;
