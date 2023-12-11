import React from "react";
import {
  applyFormLabelAddressInfo,
  applyFormLabelBanksInfo,
  applyFormLabelIdentityDetails,
  applyFormLabelOtherPersonalInfo,
  applyFormLabelPreviousSchoolAndDocument,
  chooseGenderKey,
  chooseGenderValue,
  otherAllDocument,
  staffAddressInfo,
  staffBanksInfo,
  staffIdentityDetails,
  staffOtherPersonalInfo,
  staffPreviousSchoolAndDocument,
} from "../../constant/constant_value";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
import FormCheckbox from "../../StaffTab/components/DividerTab/MainContent/StaffForm/FormCheckbox";
import JoinFormFileEdit from "../Student/Form/JoinFormFileEdit";
import JoinFormInput from "../Student/Form/JoinFormInput";
import JoinFormSelect from "../Student/Form/JoinFormSelect";
import JoinFormTextArea from "../Student/Form/JoinFormTextArea";
import { useStaff } from "./use-staff";
import style from "../Student/Form/JoinForm.module.css";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { imageShowUrl } from "../../services/BaseUrl";
import QLoader from "../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import JoinFormCalender from "../Student/Form/JoinFormCalender";

const EditStaffForm = ({ location }) => {
  const {
    staff,
    fullName,
    sameAdd,
    disabled,
    onUpdateFullName,
    onUpdateInput,
    onAddressCheck,
    onFileUpload,
    onUpdateForm,
    requiredField,
    onDateFunction,
  } = useStaff({
    sid: location?.sid,
  });
  const { t } = useTranslation();
  // console.info("this s s", requiredField);
  return (
    <form onSubmit={onUpdateForm}>
      <div className={style.form_container}>
        <h4>{t("form_personal_info_label")}:</h4>
        <div className={style.form_container_profile}>
          <JoinFormInput
            labelText={t("form_name_label")}
            placeholder={t("form_name_placeholder")}
            name={"fullname"}
            value={fullName}
            type={"text"}
            onChange={onUpdateFullName}
            customStyleContainer={{
              width: "86%",
            }}
            errorShow={
              requiredField["staffFirstName"] || requiredField["staffLastName"]
            }
          />
          <div className={style.form_container_profile_image}>
            <label className={style.form_container_profile_image_label}>
              <img
                className={style.form_container_profile_photo}
                src={
                  staff.staffProfilePhoto
                    ? `${imageShowUrl}/${staff.staffProfilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
                alt="student avatar"
              />
            </label>
          </div>
        </div>
        <div className={style.form_profile_info}>
          <JoinFormSelect
            selectLabel={t("form_gender_label")}
            selectedValue={t("form_gender_placeholder")}
            value={staff.staffGender}
            name={"staffGender"}
            onChange={onUpdateInput}
            options={chooseGenderKey}
            optionsValue={chooseGenderValue}
            errorShow={requiredField["staffGender"]}
          />
          {/* <JoinFormInput
            labelText={t("form_date_of_birth_label")}
            placeholder={t("form_date_of_birth_placeholder")}
            name={"staffDOB"}
            value={staff.staffDOB}
            type={"date"}
            onChange={onUpdateInput}
            errorShow={requiredField["staffDOB"]}
          /> */}
          <JoinFormCalender
            labelText={t("form_date_of_birth_label")}
            placeholder={t("form_date_of_birth_placeholder")}
            name={"staffDOB"}
            value={staff.staffDOB}
            onDateFunction={onDateFunction}
            errorShow={requiredField["staffDOB"]}
            customStyleContainer={{ position: "relative" }}
          />
          <JoinFormInput
            labelText={t("form_mother_name_label")}
            placeholder={t("form_mother_name_placeholder")}
            name={"staffMotherName"}
            value={staff.staffMotherName}
            type={"text"}
            onChange={onUpdateInput}
            // errorShow={formErrors["staffMotherName"]}
          />
        </div>
        <BorderBottom
          customStyle={{
            width: "104.5%",
            marginTop: "15px",
            marginLeft: "-24px",
          }}
        />
        <h4>{t("form_other_personal_info_label")}:</h4>
        <div className={style.form_other_field}>
          {staffOtherPersonalInfo.keys?.map((formField) =>
            applyFormLabelOtherPersonalInfo.map(
              (exitingLabel) =>
                exitingLabel?.lists?.includes(formField) &&
                (exitingLabel?.type ? (
                  <JoinFormSelect
                    key={exitingLabel?.id}
                    selectLabel={t(exitingLabel?.label)}
                    selectedValue={
                      staff[formField]
                        ? staff[formField]
                        : t(exitingLabel?.placeHolder)
                    }
                    value={staff[formField]}
                    name={formField}
                    onChange={onUpdateInput}
                    options={exitingLabel?.chooseOptions}
                    optionsValue={exitingLabel?.chooseOptionsValue}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ) : (
                  <JoinFormInput
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    placeholder={t(exitingLabel?.placeHolder)}
                    name={formField}
                    value={staff[formField]}
                    type={
                      ["staffPhoneNumber", "staffAadharNumber"].includes(
                        formField
                      )
                        ? "tel"
                        : "text"
                    }
                    inputLength={formField === "staffPhoneNumber" ? 10 : 12}
                    onChange={onUpdateInput}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ))
            )
          )}
        </div>
        <BorderBottom
          customStyle={{
            width: "104.5%",
            marginTop: "15px",
            marginLeft: "-24px",
          }}
        />

        <h4>{t("form_identity_details_label")}:</h4>
        <div className={style.form_other_field}>
          {staffIdentityDetails.keys?.map((formField) =>
            applyFormLabelIdentityDetails.map(
              (exitingLabel) =>
                exitingLabel?.lists?.includes(formField) &&
                (exitingLabel?.type ? (
                  <JoinFormSelect
                    key={exitingLabel?.id}
                    selectLabel={t(exitingLabel?.label)}
                    selectedValue={
                      staff[formField]
                        ? staff[formField]
                        : t(exitingLabel?.placeHolder)
                    }
                    value={staff[formField]}
                    onChange={onUpdateInput}
                    options={exitingLabel?.chooseOptions}
                    optionsValue={exitingLabel?.chooseOptionsValue}
                    name={formField}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ) : (
                  <JoinFormInput
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    placeholder={t(exitingLabel?.placeHolder)}
                    name={formField}
                    value={staff[formField]}
                    type={"text"}
                    onChange={onUpdateInput}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ))
            )
          )}
        </div>
        <BorderBottom
          customStyle={{
            width: "104.5%",
            marginTop: "15px",
            marginLeft: "-24px",
          }}
        />
        <h4>{t("form_address_info_label")}:</h4>
        <div className={style.form_other_field}>
          {staffAddressInfo.keys?.map((formField) =>
            applyFormLabelAddressInfo.map(
              (exitingLabel) =>
                exitingLabel?.lists?.includes(formField) &&
                (exitingLabel?.type ? (
                  <JoinFormTextArea
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    placeholder={t(exitingLabel?.placeHolder)}
                    name={formField}
                    value={staff[formField]}
                    type={"text"}
                    onChange={onUpdateInput}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ) : exitingLabel?.checkbox ? (
                  <FormCheckbox
                    key={exitingLabel?.id}
                    checkLabel={t(exitingLabel?.label)}
                    checkedValue={sameAdd}
                    onCheckboxAction={onAddressCheck}
                    customStyle={{
                      display: "block",
                      width: "100%",
                      marginLeft: "0",
                    }}
                  />
                ) : (
                  <JoinFormInput
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    placeholder={t(exitingLabel?.placeHolder)}
                    name={formField}
                    value={staff[formField]}
                    onChange={onUpdateInput}
                    type={
                      ["staffCurrentPincode", "staffPincode"].includes(
                        formField
                      )
                        ? "tel"
                        : "text"
                    }
                    inputLength={6}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ))
            )
          )}
        </div>
        <BorderBottom
          customStyle={{
            width: "104.5%",
            marginTop: "15px",
            marginLeft: "-24px",
          }}
        />
        <h4>{t("form_previous_school_document_label")}:</h4>
        <div className={style.form_other_field}>
          {staffPreviousSchoolAndDocument.keys?.map((formField) =>
            applyFormLabelPreviousSchoolAndDocument.map(
              (exitingLabel) =>
                exitingLabel?.lists?.includes(formField) &&
                (exitingLabel?.fileType ? (
                  <JoinFormFileEdit
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    name={formField}
                    value={staff[formField]}
                    onChange={onFileUpload}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ) : exitingLabel?.checkbox ? (
                  // <JoinFormToggle
                  //   key={exitingLabel?.id}
                  //   labelText={t(exitingLabel?.label)}
                  //   name={formField}
                  //   value={staff[formField]}
                  //   onChange={onUpdateFile}
                  //   customStyleContainer={{
                  //     width: "49.5%",
                  //   }}
                  // />
                  ""
                ) : (
                  // dynamicDocument?.previousSchoolDocument && (
                  <JoinFormInput
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    placeholder={t(exitingLabel?.placeHolder)}
                    name={formField}
                    value={staff[formField]}
                    type={"text"}
                    onChange={onUpdateInput}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                  // )
                ))
            )
          )}
          {otherAllDocument.keys?.map((formField) =>
            applyFormLabelPreviousSchoolAndDocument.map(
              (exitingLabel) =>
                exitingLabel?.lists?.includes(formField) && (
                  <JoinFormFileEdit
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    name={formField}
                    value={staff[formField]}
                    onChange={onFileUpload}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                )
            )
          )}
        </div>
        <BorderBottom
          customStyle={{
            width: "104.5%",
            marginTop: "15px",
            marginLeft: "-24px",
          }}
        />
        <h4>{t("form_staff_bank_details_label")}:</h4>
        <div className={style.form_other_field}>
          {staffBanksInfo.keys?.map((formField) =>
            applyFormLabelBanksInfo.map(
              (exitingLabel) =>
                exitingLabel?.lists?.includes(formField) &&
                (exitingLabel?.fileType ? (
                  <JoinFormFileEdit
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    name={formField}
                    value={staff[formField]}
                    onChange={onFileUpload}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ) : (
                  <JoinFormInput
                    key={exitingLabel?.id}
                    labelText={t(exitingLabel?.label)}
                    placeholder={t(exitingLabel?.placeHolder)}
                    name={formField}
                    value={staff[formField]}
                    type={
                      ["staffBankAccount", "staffBankReAccount"].includes(
                        formField
                      )
                        ? "tel"
                        : "text"
                    }
                    reAccount={
                      formField === "staffBankReAccount"
                        ? // ? formErrors[formField]
                          ""
                        : ""
                    }
                    inputLength={50}
                    onChange={onUpdateInput}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    // errorShow={formErrors[formField]}
                  />
                ))
            )
          )}
        </div>

        <ButtonWithTypeSubmit
          type={"submit"}
          buttonText={t("update")}
          customStyleButton={{ marginTop: "1.5vw" }}
        />
      </div>
      {disabled && <QLoader />}
    </form>
  );
};

export default EditStaffForm;
