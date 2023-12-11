import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  studentBanksInfo,
  studentAddressInfo,
  studentIdentityDetails,
  studentOtherPersonalInfo,
  studentParentsInfo,
  applyFormLabelOtherPersonalInfo,
  applyFormLabelIdentityDetails,
  applyFormLabelParentsInfo,
  applyFormLabelAddressInfo,
  applyFormLabelBanksInfo,
  applyFormLabelPreviousSchoolAndDocument,
  chooseGenderKey,
  chooseGenderValue,
  studentHosteCpiInfo,
  applyFormLabelHostelInfo,
} from "../../constant/constant_value";
import Crop from "../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import style from "./Form/JoinForm.module.css";
import JoinFormInput from "./Form/JoinFormInput";
import JoinFormSelect from "./Form/JoinFormSelect";
import JoinFormTextArea from "./Form/JoinFormTextArea";
import JoinFormFile from "./Form/JoinFormFile";
import JoinFormToggle from "./Form/JoinFormToggle";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
import { Notfication } from "../../validation/Snackbar";
import FormCheckbox from "../../StaffTab/components/DividerTab/MainContent/StaffForm/FormCheckbox";
import StudentDetails from "./StudentDetails";
import { useFileUpload } from "../../hooks/authentication-api";
import QLoader from "../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import JoinFormCalender from "./Form/JoinFormCalender";
import { withCurrentDate } from "../../Functions/timeComparison/timeComparison";
import { useGetHostelForm } from "../../hooks/member_tab/hostel-api";
const StudentHostelApplyForm = ({
  preview,
  setPreview,
  onApplyForm,
  hostelId,
}) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const [fullName, setFullName] = useState("");
  const [studentForm, setStudentForm] = useState({});
  const [studentPhoneNumberAdd, setStudentPhoneNumberAdd] = useState("");
  const [dynamicForm, setDynamicForm] = useState([]);
  const [formData, setFormData] = useState({
    studentFirstName: "",
    studentMiddleName: "",
    studentLastName: "",
    studentDOB: "",
    studentGender: "",
    studentMotherName: "",
  });
  const [dynamicFormDocument, setDynamicFormDocument] = useState([]);
  const [dynamicDocument, setDynamicDocument] = useState({});
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [disabled, setDisabled] = useState("");
  const [oneFileUpload] = useFileUpload();
  const [studentNewField, setStudentNewFiled] = useState({
    student_prn_enroll_number: "",
    student_hostel_cpi: "",
  });
  const { getHostelForm, getHostelFormRefetch } = useGetHostelForm({
    hid: hostelId,
    skip: !hostelId,
  });
  useEffect(() => {
    if (hostelId) getHostelFormRefetch();
  }, [getHostelFormRefetch, hostelId]);

  useEffect(() => {
    if (getHostelForm?.one_hostel?.student_form_query) {
      const latestSnapshot1 = [];
      for (let obj in getHostelForm?.one_hostel?.student_form_query) {
        if (obj === "previousSchoolAndDocument") {
          let compareValue =
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument;
          let fileField = [];
          for (let nestedObj in compareValue) {
            if (compareValue[nestedObj]) {
              if (nestedObj === "aadharCard") {
                setDynamicDocument((prev) => ({
                  ...prev,
                  addharFrontCard: "",
                  addharBackCard: "",
                }));
                fileField.push("addharFrontCard", "addharBackCard");
              } else if (nestedObj === "previousSchoolDocument") {
                setDynamicDocument((prev) => ({
                  ...prev,
                  studentPreviousSchool: "",
                  previousSchoolDocument: "",
                }));
                fileField.push(
                  "previousSchoolDocument",
                  "studentPreviousSchool"
                );
              } else {
                setDynamicDocument((prev) => ({
                  ...prev,
                  [nestedObj]: "",
                }));
                fileField.push(nestedObj);
              }
            }
          }
          setDynamicFormDocument([...fileField]);
        } else if (getHostelForm?.one_hostel?.student_form_query[obj]) {
          if (obj === "otherPersonalInfo") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentOtherPersonalInfo?.withValue,
            }));
            latestSnapshot1.push(...studentOtherPersonalInfo?.keys);
          } else if (obj === "identityDetails") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentIdentityDetails?.withValue,
            }));
            latestSnapshot1.push(...studentIdentityDetails?.keys);
          } else if (obj === "addressInfo") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentAddressInfo?.withValue,
            }));
            latestSnapshot1.push(...studentAddressInfo?.keys);
          } else if (obj === "parentsInfo") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentParentsInfo?.withValue,
            }));
            latestSnapshot1.push(...studentParentsInfo?.keys);
          } else if (obj === "bankDetails") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentBanksInfo?.withValue,
            }));
            latestSnapshot1.push(...studentBanksInfo?.keys);
          } else if (obj === "cpi") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentHosteCpiInfo?.withValue,
            }));
            latestSnapshot1.push(...studentHosteCpiInfo?.keys);
          } else {
          }
        } else {
        }
      }
      setDynamicForm([...latestSnapshot1]);
    }
  }, [getHostelForm?.one_hostel?.student_form_query]);

  useEffect(() => {
    if (fullName) {
      const splitName = fullName.split(" ");
      if (splitName.length >= 3)
        setFormData((s) => ({
          ...s,
          studentFirstName: splitName[0],
          studentMiddleName: splitName[1],
          studentLastName: splitName.slice(2).toString().replaceAll(",", " "),
        }));
      else
        setFormData((s) => ({
          ...s,
          studentFirstName: splitName[0],
          studentMiddleName: "",
          studentLastName: splitName[1] === undefined ? "" : splitName[1],
        }));
    }
  }, [fullName]);

  const profileImgChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };
  useEffect(() => {
    if (upload) {
      onFileUpload({ target: { name: "file", files: [file] } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const onValidation = (formData, studentForm, dynamicDocument) => {
    const errors = {};
    if (!file) {
      setNotificationState({
        msg: t("form_select_image_label"),
        run: true,
      });
      errors["file"] = `profile image is required!`;
    }
    if (
      studentForm["studentBankAccount"] &&
      studentForm["studentBankAccount"] !== studentForm["studentBankReAccount"]
    ) {
      errors["studentBankReAccount"] = `${t(
        "form_account_dose_not_match_label"
      )}`;
    }
    for (let obj in formData) {
      if (obj === "studentMiddleName") {
      } else {
        if (!formData[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    for (let obj1 in studentForm) {
      if (
        obj1 === "studentPhoneNumber" ||
        obj1 === "studentEmail" ||
        obj1 === "studentFatherRationCardColor"
        // ||
        // obj1 === "student_blood_group"
      ) {
      } else {
        if (!studentForm[obj1]) errors[obj1] = `${obj1} is required!`;
      }
    }
    for (let obj1 in dynamicDocument) {
      if (obj1 === "previousSchoolDocument") {
      } else if (obj1 === "studentPreviousSchool") {
        if (!dynamicDocument["previousSchoolDocument"]) {
          if (!dynamicDocument[obj1]) {
            errors[obj1] = `${obj1} is required!`;
          }
        }
      } else {
        if (!dynamicDocument[obj1]) {
          errors[obj1] = `${obj1} is required!`;
        }
      }
    }
    if (getHostelForm?.one_hostel?.student_form_query?.enrollmentPrn) {
      if (!studentNewField.student_prn_enroll_number)
        errors[
          "student_prn_enroll_number"
        ] = `student_prn_enroll_number is required!`;
    }

    return errors;
  };

  const onProfileInfo = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onDynamicFieldChange = (e) => {
    setStudentForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onDynamicDocumentFieldChange = (e) => {
    // console.info("this is dynamic filr -> ", e.target.name, e.target);
    if (e.target.name === "previousSchoolDocument") {
      setDynamicDocument((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name === "studentPreviousSchool") {
      setDynamicDocument((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      setDynamicDocument((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.files[0],
      }));
    }
  };
  // console.info("instituteStudentForm", dynamicForm, studentForm);
  // console.info("instituteStudentForm", instituteStudentForm);

  const onAddressCheck = (e) => {
    if (e.target.checked) {
      setStudentForm((prevState) => ({
        ...prevState,
        asSameAddress: e.target.checked,
        studentAddress: prevState.studentCurrentAddress,
        studentPincode: prevState.studentCurrentPincode,
      }));
    } else {
      setStudentForm((prevState) => ({
        ...prevState,
        asSameAddress: e.target.checked,
        studentAddress: "",
        studentPincode: "",
      }));
    }
  };

  const onFileUpload = (e) => {
    // console.info("this is nofmfnsd", e.target.files[0]);
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (e.target.name === "file") {
          setUpload(false);
          setFile({
            name: e.target.name,
            key: res.data?.imageKey,
            type: e.target.files[0]?.type,
          });
        } else if (e.target.name === "bankPassbook") {
          setStudentForm((prevState) => ({
            ...prevState,
            [e.target.name]: {
              originalName: e.target.files[0]?.name,
              name: e.target.name,
              key: res.data?.imageKey,
              type: e.target.files[0]?.type,
            },
          }));
        } else {
          setDynamicDocument((prevState) => ({
            ...prevState,
            [e.target.name]: {
              originalName: e.target.files[0]?.name,
              name: e.target.name,
              key: res.data?.imageKey,
              type: e.target.files[0]?.type,
            },
          }));
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const onFormPreview = (e) => {
    e.preventDefault();
    const validation = onValidation(formData, studentForm, dynamicDocument);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFormErrors(validation);
    } else {
      setPreview((pre) => !pre);
    }
  };

  const onDateFunction = (val) => {
    const dobCorrect = withCurrentDate(val);
    if (dobCorrect) {
      let splitDate = val?.split("/");
      let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      setFormData((prevState) => ({
        ...prevState,
        studentDOB: dob,
      }));
    } else {
      setNotificationState({
        msg: `You cannot select upcoming date ${val}`,
        run: true,
      });
    }
  };

  const onGateYear = (val) => {
    let splitDate = val?.split("/");
    let dob = `${splitDate[2]}`;
    setStudentForm((prevState) => ({
      ...prevState,
      student_year: dob,
    }));
  };
  const onApplyStudentForm = () => {
    onApplyForm({
      file,
      formData,
      studentForm,
      dynamicDocument,
      studentNewField,
      pdfUndertaking: getHostelForm?.one_hostel
        ?.pg_undertakings_hostel_admission
        ? "PG"
        : getHostelForm?.one_hostel?.ug_undertakings_hostel_admission
        ? "UG"
        : // : "PG",
          "OFF",
    });
  };
  // console.info("this is form errors", location);
  return (
    <>
      {!preview ? (
        <form onSubmit={onFormPreview}>
          <div className={style.form_container}>
            <h4>{t("form_personal_info_label")}:</h4>
            <div className={style.form_container_profile}>
              <JoinFormInput
                labelText={t("form_name_label")}
                placeholder={t("form_name_placeholder")}
                name={"fullname"}
                value={fullName}
                type={"text"}
                onChange={(e) => setFullName(e.target.value)}
                customStyleContainer={
                  getHostelForm?.one_hostel?.student_form_query?.enrollmentPrn
                    ? {
                        width: "56%",
                      }
                    : {
                        width: "86%",
                      }
                }
                errorShow={
                  formErrors["studentFirstName"] ||
                  formErrors["studentLastName"]
                }
              />
              {getHostelForm?.one_hostel?.student_form_query?.enrollmentPrn && (
                <JoinFormInput
                  labelText={t("form_prn_enr_label")}
                  placeholder={t("form_prn_enr_placeholder")}
                  name={"prn"}
                  value={studentNewField.student_prn_enroll_number}
                  type={"text"}
                  onChange={(e) =>
                    setStudentNewFiled((prevState) => ({
                      ...prevState,
                      student_prn_enroll_number: e.target.value,
                    }))
                  }
                  customStyleContainer={{
                    width: "30%",
                  }}
                  errorShow={formErrors["student_prn_enroll_number"]}
                />
              )}
              <div className={style.form_container_profile_image}>
                <label
                  htmlFor="profile"
                  className={style.form_container_profile_image_label}
                >
                  <img
                    className={style.form_container_profile_photo}
                    src={
                      photoURL ? photoURL : "/images/ins_default_profile.svg"
                    }
                    alt="student avatar"
                  />
                  <img
                    src="/images/user-pencil-edit-transparent.svg"
                    alt="edit icon"
                    className={style.form_edit_icon}
                  />
                </label>
                <input
                  type="file"
                  id="profile"
                  onChange={profileImgChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className={style.form_profile_info}>
              <JoinFormSelect
                selectLabel={t("form_gender_label")}
                selectedValue={t("form_gender_placeholder")}
                value={formData.studentGender}
                name={"studentGender"}
                onChange={onProfileInfo}
                options={chooseGenderKey}
                optionsValue={chooseGenderValue}
                errorShow={formErrors["studentGender"]}
              />
              <JoinFormCalender
                labelText={t("form_date_of_birth_label")}
                placeholder={t("form_date_of_birth_placeholder")}
                name={"studentDOB"}
                value={formData.studentDOB}
                onDateFunction={onDateFunction}
                errorShow={formErrors["studentDOB"]}
                customStyleContainer={{ position: "relative" }}
              />

              <JoinFormInput
                labelText={t("form_mother_name_label")}
                placeholder={t("form_mother_name_placeholder")}
                name={"studentMotherName"}
                value={formData.studentMotherName}
                type={"text"}
                onChange={onProfileInfo}
                errorShow={formErrors["studentMotherName"]}
              />
            </div>
            <BorderBottom
              customStyle={{
                width: "104.5%",
                marginTop: "15px",
                marginLeft: "-24px",
              }}
            />
            {getHostelForm?.one_hostel?.student_form_query
              ?.otherPersonalInfo && (
              <>
                <h4>{t("form_other_personal_info_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelOtherPersonalInfo.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) &&
                        (exitingLabel?.type ? (
                          <JoinFormSelect
                            key={exitingLabel?.id}
                            selectLabel={t(exitingLabel?.label)}
                            selectedValue={t(exitingLabel?.placeHolder)}
                            value={studentForm[formField]}
                            name={formField}
                            onChange={onDynamicFieldChange}
                            options={exitingLabel?.chooseOptions}
                            optionsValue={exitingLabel?.chooseOptionsValue}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ) : (
                          <JoinFormInput
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            placeholder={t(exitingLabel?.placeHolder)}
                            name={formField}
                            value={studentForm[formField]}
                            type={
                              [
                                "studentPhoneNumber",
                                "studentAadharNumber",
                              ].includes(formField)
                                ? "tel"
                                : "text"
                            }
                            inputLength={
                              formField === "studentPhoneNumber" ? 10 : 12
                            }
                            onChange={onDynamicFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
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
              </>
            )}
            {getHostelForm?.one_hostel?.student_form_query?.identityDetails && (
              <>
                <h4>{t("form_identity_details_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelIdentityDetails.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) &&
                        (exitingLabel?.type ? (
                          <JoinFormSelect
                            key={exitingLabel?.id}
                            selectLabel={t(exitingLabel?.label)}
                            selectedValue={t(exitingLabel?.placeHolder)}
                            value={studentForm[formField]}
                            onChange={onDynamicFieldChange}
                            options={exitingLabel?.chooseOptions}
                            optionsValue={exitingLabel?.chooseOptionsValue}
                            name={formField}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ) : (
                          <JoinFormInput
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            placeholder={t(exitingLabel?.placeHolder)}
                            name={formField}
                            value={studentForm[formField]}
                            type={"text"}
                            onChange={onDynamicFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
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
              </>
            )}
            {getHostelForm?.one_hostel?.student_form_query?.addressInfo && (
              <>
                <h4>{t("form_address_info_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelAddressInfo.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) &&
                        (exitingLabel?.type ? (
                          <JoinFormTextArea
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            placeholder={t(exitingLabel?.placeHolder)}
                            name={formField}
                            value={studentForm[formField]}
                            type={"text"}
                            onChange={onDynamicFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ) : exitingLabel?.checkbox ? (
                          <FormCheckbox
                            key={exitingLabel?.id}
                            checkLabel={t(exitingLabel?.label)}
                            checkedValue={studentForm.asSameAddress}
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
                            value={studentForm[formField]}
                            type={
                              [
                                "studentCurrentPincode",
                                "studentPincode",
                              ].includes(formField)
                                ? "tel"
                                : "text"
                            }
                            inputLength={6}
                            onChange={onDynamicFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
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
              </>
            )}

            {getHostelForm?.one_hostel?.student_form_query?.parentsInfo && (
              <>
                <h4>{t("form_parent_guardian_info_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelParentsInfo.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) &&
                        (exitingLabel?.type ? (
                          <JoinFormSelect
                            key={exitingLabel?.id}
                            selectLabel={t(exitingLabel?.label)}
                            selectedValue={t(exitingLabel?.placeHolder)}
                            value={studentForm[formField]}
                            onChange={onDynamicFieldChange}
                            options={exitingLabel?.chooseOptions}
                            optionsValue={exitingLabel?.chooseOptionsValue}
                            name={formField}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ) : (
                          <JoinFormInput
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            placeholder={t(exitingLabel?.placeHolder)}
                            name={formField}
                            value={studentForm[formField]}
                            type={
                              ["studentParentsPhoneNumber"].includes(formField)
                                ? "tel"
                                : "text"
                            }
                            inputLength={
                              formField === "studentParentsPhoneNumber"
                                ? 10
                                : 30
                            }
                            onChange={onDynamicFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
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
              </>
            )}
            {getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.previousSchoolDocument && (
              <>
                <h4>{t("form_previous_school_document_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicFormDocument?.map((formField) =>
                    applyFormLabelPreviousSchoolAndDocument.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) &&
                        (exitingLabel?.fileType ? (
                          <JoinFormFile
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            name={formField}
                            value={dynamicDocument[formField]}
                            onChange={onFileUpload}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ) : exitingLabel?.checkbox ? (
                          ""
                        ) : (
                          // <JoinFormToggle
                          //   key={exitingLabel?.id}
                          //   labelText={t(exitingLabel?.label)}
                          //   name={formField}
                          //   value={dynamicDocument[formField]}
                          //   onChange={onDynamicDocumentFieldChange}
                          //   customStyleContainer={{
                          //     width: "49.5%",
                          //   }}
                          // />
                          !dynamicDocument?.previousSchoolDocument && (
                            <JoinFormInput
                              key={exitingLabel?.id}
                              labelText={t(exitingLabel?.label)}
                              placeholder={t(exitingLabel?.placeHolder)}
                              name={formField}
                              value={dynamicDocument[formField]}
                              type={"text"}
                              onChange={onDynamicDocumentFieldChange}
                              customStyleContainer={{
                                width: "100%",
                              }}
                              errorShow={formErrors[formField]}
                            />
                          )
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
              </>
            )}
            {getHostelForm?.one_hostel?.student_form_query?.bankDetails && (
              <>
                <h4>{t("form_student_bank_details_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelBanksInfo.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) &&
                        (exitingLabel?.fileType ? (
                          <JoinFormFile
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            name={formField}
                            value={studentForm[formField]}
                            onChange={onFileUpload}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ) : (
                          <JoinFormInput
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            placeholder={t(exitingLabel?.placeHolder)}
                            name={formField}
                            value={studentForm[formField]}
                            type={
                              [
                                "studentBankAccount",
                                "studentBankReAccount",
                              ].includes(formField)
                                ? "tel"
                                : "text"
                            }
                            reAccount={
                              formField === "studentBankReAccount"
                                ? formErrors[formField]
                                : ""
                            }
                            inputLength={50}
                            onChange={onDynamicFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ))
                    )
                  )}
                </div>
              </>
            )}

            {getHostelForm?.one_hostel?.student_form_query?.cpi && (
              <>
                <h4>{t("form_student_hostel_cpi")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelHostelInfo.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) &&
                        (exitingLabel?.isCalender ? (
                          <JoinFormCalender
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            placeholder={t(exitingLabel?.placeHolder)}
                            name={formField}
                            value={studentForm[formField]}
                            onDateFunction={onGateYear}
                            errorShow={formErrors[formField]}
                            customStyleContainer={{
                              position: "relative",
                              width: "49.5%",
                            }}
                          />
                        ) : exitingLabel?.type ? (
                          <JoinFormSelect
                            key={exitingLabel?.id}
                            selectLabel={t(exitingLabel?.label)}
                            selectedValue={t(exitingLabel?.placeHolder)}
                            value={studentForm[formField]}
                            name={formField}
                            onChange={onDynamicFieldChange}
                            options={exitingLabel?.chooseOptions}
                            optionsValue={exitingLabel?.chooseOptionsValue}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ) : (
                          <JoinFormInput
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            placeholder={t(exitingLabel?.placeHolder)}
                            name={formField}
                            value={studentForm[formField]}
                            type={"text"}
                            onChange={onDynamicFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                            errorShow={formErrors[formField]}
                          />
                        ))
                    )
                  )}
                </div>
              </>
            )}
            <ButtonWithTypeSubmit
              type={"submit"}
              buttonText={t("form_preview")}
              customStyleButton={{ marginTop: "1.5vw" }}
            />
          </div>
          {openCrop && (
            <Dialog open={openCrop}>
              <Crop
                setPhotoURL={setPhotoURL}
                photoURL={photoURL}
                setFile={setFile}
                setOpenCrop={setOpenCrop}
                setProfilePhoto={setProfilePhoto}
                first={1}
                second={1}
                setUpload={setUpload}
              />
            </Dialog>
          )}
          <Notfication
            msg={notificationState.msg}
            run={notificationState.run}
            setRun={() => setNotificationState({ msg: "", run: false })}
            postiton="bottom"
            type="error"
          />
        </form>
      ) : (
        <StudentDetails
          studentForm={studentForm}
          dynamicForm={dynamicForm}
          formData={formData}
          dynamicFormDocument={dynamicFormDocument}
          dynamicDocument={dynamicDocument}
          fileUrl={photoURL}
          formSetting={getHostelForm?.one_hostel?.student_form_query}
          onApplyStudentForm={onApplyStudentForm}
          studentNewField={studentNewField}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default StudentHostelApplyForm;
