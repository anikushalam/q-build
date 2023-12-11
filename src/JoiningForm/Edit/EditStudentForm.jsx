import React from "react";
import {
  applyFormLabelAddressInfo,
  applyFormLabelBanksInfo,
  applyFormLabelGateDegreeInfo,
  applyFormLabelGateInfo,
  applyFormLabelIdentityDetails,
  applyFormLabelOtherPersonalInfo,
  applyFormLabelParentsInfo,
  applyFormLabelPreviousSchoolAndDocument,
  chooseGenderKey,
  chooseGenderValue,
  otherAllDocument,
  studentAddressInfo,
  studentBanksInfo,
  studentGateDegreeInfo,
  studentGateInfo,
  studentIdentityDetails,
  studentOtherPersonalInfo,
  studentParentsInfo,
  studentPreviousSchoolAndDocument,
  studentAntiRaggingDetails,
  studentIdCardDetails,
  applyFormLabelAntiRagging,
  applyFormLabelIdcard,
} from "../../constant/constant_value";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
import FormCheckbox from "../../StaffTab/components/DividerTab/MainContent/StaffForm/FormCheckbox";
import JoinFormFileEdit from "../Student/Form/JoinFormFileEdit";
import JoinFormInput from "../Student/Form/JoinFormInput";
import JoinFormSelect from "../Student/Form/JoinFormSelect";
import JoinFormTextArea from "../Student/Form/JoinFormTextArea";
import { useStudent } from "./use-student";
import style from "../Student/Form/JoinForm.module.css";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { imageShowUrl } from "../../services/BaseUrl";
import QLoader from "../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import JoinFormCalender from "../Student/Form/JoinFormCalender";
import StudentLoginDetails from "./StudentLoginDetails";

const EditStudentForm = ({
  location,
  openLoginDetails,
  onLoginDetailToggle,
}) => {
  const {
    student,
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
    onGateYear,
    onGateMonthYear,
    onUpdateLoginDetailsForm,
  } = useStudent({
    sid: location?.sid,
  });

  const { t } = useTranslation();

  return (
    <>
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
                width: "56%",
              }}
              errorShow={
                requiredField["studentFirstName"] ||
                requiredField["studentLastName"]
              }
            />
            <JoinFormInput
              labelText={t("form_prn_enr_label")}
              placeholder={t("form_prn_enr_placeholder")}
              name={"student_prn_enroll_number"}
              value={student.student_prn_enroll_number}
              type={"text"}
              onChange={onUpdateInput}
              customStyleContainer={{
                width: "30%",
              }}
              // errorShow={formErrors["student_prn_enroll_number"]}
            />
            <div className={style.form_container_profile_image}>
              <label className={style.form_container_profile_image_label}>
                <img
                  className={style.form_container_profile_photo}
                  src={
                    student.studentProfilePhoto
                      ? `${imageShowUrl}/${student.studentProfilePhoto}`
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
              value={student.studentGender}
              name={"studentGender"}
              onChange={onUpdateInput}
              options={chooseGenderKey}
              optionsValue={chooseGenderValue}
              errorShow={requiredField["studentGender"]}
            />
            {/* <JoinFormInput
            labelText={t("form_date_of_birth_label")}
            placeholder={t("form_date_of_birth_placeholder")}
            name={"studentDOB"}
            value={student.studentDOB}
            type={"date"}
            onChange={onUpdateInput}
            errorShow={requiredField["studentDOB"]}
          /> */}
            <JoinFormCalender
              labelText={t("form_date_of_birth_label")}
              placeholder={t("form_date_of_birth_placeholder")}
              name={"staffDOB"}
              value={student.studentDOB}
              onDateFunction={onDateFunction}
              errorShow={requiredField["studentDOB"]}
              customStyleContainer={{ position: "relative" }}
            />
            <JoinFormInput
              labelText={t("form_mother_name_label")}
              placeholder={t("form_mother_name_placeholder")}
              name={"studentMotherName"}
              value={student.studentMotherName}
              type={"text"}
              onChange={onUpdateInput}
              // errorShow={formErrors["studentMotherName"]}
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
            {studentOtherPersonalInfo.keys?.map((formField) =>
              applyFormLabelOtherPersonalInfo.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.type ? (
                    <JoinFormSelect
                      key={exitingLabel?.id}
                      selectLabel={t(exitingLabel?.label)}
                      selectedValue={
                        student[formField]
                          ? student[formField]
                          : t(exitingLabel?.placeHolder)
                      }
                      value={student[formField]}
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
                      value={student[formField]}
                      type={
                        ["studentPhoneNumber", "studentAadharNumber"].includes(
                          formField
                        )
                          ? "tel"
                          : "text"
                      }
                      inputLength={formField === "studentPhoneNumber" ? 10 : 12}
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
            {studentIdentityDetails.keys?.map((formField) =>
              applyFormLabelIdentityDetails.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.type ? (
                    <JoinFormSelect
                      key={exitingLabel?.id}
                      selectLabel={t(exitingLabel?.label)}
                      selectedValue={
                        student[formField]
                          ? student[formField]
                          : t(exitingLabel?.placeHolder)
                      }
                      value={student[formField]}
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
                      value={student[formField]}
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
            {studentAddressInfo.keys?.map((formField) =>
              applyFormLabelAddressInfo.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.type ? (
                    <JoinFormTextArea
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      placeholder={t(exitingLabel?.placeHolder)}
                      name={formField}
                      value={student[formField]}
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
                      value={student[formField]}
                      onChange={onUpdateInput}
                      type={
                        ["studentCurrentPincode", "studentPincode"].includes(
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
          <h4>{t("form_parent_guardian_info_label")}:</h4>
          <div className={style.form_other_field}>
            {studentParentsInfo.keys?.map((formField) =>
              applyFormLabelParentsInfo.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.type ? (
                    <JoinFormSelect
                      key={exitingLabel?.id}
                      selectLabel={t(t(exitingLabel?.label))}
                      selectedValue={t(t(exitingLabel?.placeHolder))}
                      value={student[formField]}
                      onChange={onUpdateInput}
                      options={exitingLabel?.chooseOptions}
                      optionsValue={exitingLabel?.chooseOptionsValue}
                      name={formField}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  ) : (
                    <JoinFormInput
                      key={exitingLabel?.id}
                      labelText={t(t(exitingLabel?.label))}
                      placeholder={t(t(exitingLabel?.placeHolder))}
                      name={formField}
                      value={student[formField]}
                      type={
                        ["studentParentsPhoneNumber"].includes(formField)
                          ? "tel"
                          : "text"
                      }
                      inputLength={
                        formField === "studentParentsPhoneNumber" ? 10 : 30
                      }
                      onChange={onUpdateInput}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
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
            {studentPreviousSchoolAndDocument.keys?.map((formField) =>
              applyFormLabelPreviousSchoolAndDocument.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.fileType ? (
                    <JoinFormFileEdit
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      name={formField}
                      value={student[formField]}
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
                    //   value={student[formField]}
                    //   onChange={onUpdateInput}
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
                      value={student[formField]}
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
                      value={student[formField]}
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
          <h4>{t("form_student_bank_details_label")}:</h4>
          <div className={style.form_other_field}>
            {studentBanksInfo.keys?.map((formField) =>
              applyFormLabelBanksInfo.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.fileType ? (
                    <JoinFormFileEdit
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      name={formField}
                      value={student[formField]}
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
                      value={student[formField]}
                      type={
                        ["studentBankAccount", "studentBankReAccount"].includes(
                          formField
                        )
                          ? "tel"
                          : "text"
                      }
                      reAccount={
                        formField === "studentBankReAccount"
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
          <BorderBottom
            customStyle={{
              width: "104.5%",
              marginTop: "15px",
              marginLeft: "-24px",
            }}
          />
          <h4>{t("form_student_idcard_details_label")}:</h4>
          <div className={style.form_other_field}>
            {studentIdCardDetails.keys?.map((formField) =>
              applyFormLabelIdcard.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.fileType ? (
                    <JoinFormFileEdit
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      name={formField}
                      value={student[formField]}
                      onChange={onFileUpload}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                      // errorShow={formErrors[formField]}
                    />
                  ) : null)
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

          <h4>{t("form_student_antiragging_details_label")}:</h4>
          <div className={style.form_other_field}>
            {studentAntiRaggingDetails.keys?.map((formField) =>
              applyFormLabelAntiRagging.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.fileType ? (
                    <JoinFormFileEdit
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      name={formField}
                      value={student[formField]}
                      onChange={onFileUpload}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                      // errorShow={formErrors[formField]}
                    />
                  ) : null)
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
          <h4>{t("form_student_pg_details_label")}:</h4>
          <div className={style.form_other_field}>
            {studentGateInfo.keys?.map((formField) =>
              applyFormLabelGateInfo.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.isCalender ? (
                    <JoinFormCalender
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      placeholder={t(exitingLabel?.placeHolder)}
                      name={formField}
                      value={student[formField]}
                      onDateFunction={onGateYear}
                      // errorShow={formErrors[formField]}
                      customStyleContainer={{
                        position: "relative",
                        width: "49.5%",
                      }}
                    />
                  ) : (
                    <JoinFormInput
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      placeholder={t(exitingLabel?.placeHolder)}
                      name={formField}
                      value={student[formField]}
                      type={"tel"}
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
          <div className={style.form_other_field}>
            {studentGateDegreeInfo?.keys?.map((formField) =>
              applyFormLabelGateDegreeInfo.map(
                (exitingLabel) =>
                  exitingLabel?.lists?.includes(formField) &&
                  (exitingLabel?.isCalender ? (
                    <JoinFormCalender
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      placeholder={t(exitingLabel?.placeHolder)}
                      name={formField}
                      value={student[formField]}
                      onDateFunction={onGateMonthYear}
                      // errorShow={formErrors[formField]}
                      customStyleContainer={{
                        position: "relative",
                        width: "49.5%",
                      }}
                    />
                  ) : exitingLabel?.isPreheading === "Heading" ? (
                    <h4>{t(exitingLabel?.label)}:</h4>
                  ) : exitingLabel?.isPreheading === "SUBHEADING" ? (
                    <h5>{t(exitingLabel?.label)}:</h5>
                  ) : (
                    <JoinFormInput
                      key={exitingLabel?.id}
                      labelText={t(exitingLabel?.label)}
                      placeholder={t(exitingLabel?.placeHolder)}
                      name={formField}
                      value={student[formField]}
                      type={
                        [
                          "student_degree_marks",
                          "student_percentage",
                          "student_class_cpi",
                          "student_pre_sem_points",
                          "student_final_sem_points",
                        ].includes(formField)
                          ? "tel"
                          : "text"
                      }
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
          <ButtonWithTypeSubmit
            type={"submit"}
            buttonText={t("update")}
            customStyleButton={{ marginTop: "1.5vw" }}
          />
        </div>
        {disabled && !openLoginDetails && <QLoader />}
      </form>
      {openLoginDetails && (
        <StudentLoginDetails
          onUpdateLoginDetailsForm={onUpdateLoginDetailsForm}
          onLoginDetailToggle={onLoginDetailToggle}
          student={student}
          onUpdateInput={onUpdateInput}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default EditStudentForm;
