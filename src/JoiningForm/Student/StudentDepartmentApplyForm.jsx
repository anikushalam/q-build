import React, { useEffect, useState } from "react";
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
  studentGateInfo,
  studentGateDegreeInfo,
  applyFormLabelGateInfo,
  applyFormLabelGateDegreeInfo,
  studentAntiRaggingDetails,
  studentIdCardDetails,
  applyFormLabelAntiRagging,
  applyFormLabelIdcard,
} from "../../constant/constant_value";
import Crop from "../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import { useDepartmentStudentForm } from "../../Department/Institute/Components/DepartmentApi/depart-api";
import style from "./Form/JoinForm.module.css";
import JoinFormInput from "./Form/JoinFormInput";
import JoinFormSelect from "./Form/JoinFormSelect";
import JoinFormTextArea from "./Form/JoinFormTextArea";
import JoinFormFile from "./Form/JoinFormFile";
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
import CustomAvatar from "../../Custom/Avatar/CustomAvatar";
import { customAvatarUrl } from "../../services/BaseUrl";
import { useGetAccountWithNumber } from "../../hooks/member_tab/admission-api";
import JoinFormExistingSelect from "./Form/JoinFormExistingSelect";
import SelectAdmissionFeeStructure from "../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/AdmssionStructureSelection/SelectFeeStructure";
import AdmissionPaymentForm from "./AdmissionPaymentForm";

const StudentDepartmentApplyForm = ({
  preview,
  setPreview,
  location,
  onApplyForm,
}) => {
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
  const { t } = useTranslation();
  const [studentAdmission, setStudentAdmission] = useState({
    // type: "",
    sample_pic: "",
    mode: "",
    amount: "",
    fee_payment_mode: "",
    fee_payment_amount: "",
    transaction_date: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
    fee_struct: "",
  });
  const [selectedUser, setSelectedUser] = useState("");
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openSelectFees, setOpenSelectFees] = useState(false);
  const [openFeeTransaction, setOpenFeeTransaction] = useState(false);
  const [openFeesQuery, setOpenFeesQuery] = useState("");
  const [studentNewField, setStudentNewFiled] = useState({
    student_prn_enroll_number: "",
    fee_struct: "",
    is_remain: "",
    batch_set: [],
  });

  // here functionality work
  const { getAccountWithNumber, getAccountWithNumberRefetch } =
    useGetAccountWithNumber({
      phoneKey: studentPhoneNumberAdd,
      skip: studentPhoneNumberAdd?.length !== 10,
    });

  const { departmentStudentForm, departmentStudentFormRefetch } =
    useDepartmentStudentForm({
      did: location?.departmentId,
      skip: !location?.departmentId,
    });
  useEffect(() => {
    if (location?.departmentId) departmentStudentFormRefetch();
  }, [departmentStudentFormRefetch, location?.departmentId]);

  useEffect(() => {
    if (departmentStudentForm?.studentFormSetting) {
      const latestSnapshot1 = [];
      for (let obj in departmentStudentForm.studentFormSetting) {
        if (obj === "previousSchoolAndDocument") {
          let compareValue =
            departmentStudentForm?.studentFormSetting
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
        } else if (departmentStudentForm.studentFormSetting[obj]) {
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
          } else if (obj === "gate_score") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentGateInfo?.withValue,
            }));
            latestSnapshot1.push(...studentGateInfo?.keys);
          } else if (obj === "marks_and_degree_score") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentGateDegreeInfo?.withValue,
            }));
            latestSnapshot1.push(...studentGateDegreeInfo?.keys);
          } else if (obj === "id_card") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentIdCardDetails?.withValue,
            }));
            latestSnapshot1.push(...studentIdCardDetails?.keys);
          } else if (obj === "anti_ragging") {
            setStudentForm((prev) => ({
              ...prev,
              ...studentAntiRaggingDetails?.withValue,
            }));
            latestSnapshot1.push(...studentAntiRaggingDetails?.keys);
          } else {
          }
        } else {
        }
      }
      setDynamicForm([...latestSnapshot1]);
    }
  }, [departmentStudentForm?.studentFormSetting]);

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
    if (location?.openAs === "ADMISSION_ADMIN_SIDE") {
      setOpenAvatar(true);
    } else {
      const image = URL.createObjectURL(e.target.files[0]);
      setFile(e.target.files[0]);
      setProfilePhoto(image);
      setPhotoURL(image);
      setOpenCrop(true);
    }
  };
  useEffect(() => {
    if (upload) {
      onFileUpload({ target: { name: "file", files: [file] } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const onAdmissionAdminValidation = (
    formData,
    studentPhoneNumberAdd,
    studentAdmission
  ) => {
    const errors = {};
    if (!file) {
      setNotificationState({
        msg: "Please Select Image",
        run: true,
      });
      errors["file"] = `profile image is required!`;
    }
    if (!studentPhoneNumberAdd) {
      errors["studentPhoneNumberAdd"] = "* required";
    }
    for (let obj in formData) {
      if (obj === "studentMiddleName" || obj === "studentMotherName") {
      } else {
        if (!formData[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    for (let obj in studentAdmission) {
      if (
        obj === "sample_pic" ||
        obj === "fee_bank_holder" ||
        obj === "fee_bank_name" ||
        obj === "fee_utr_reference"
      ) {
      } else {
        if (!studentAdmission[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onValidation = (
    formData,
    studentForm,
    dynamicDocument
    // optinalSubject
  ) => {
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
    // let count = 0;
    // for (let sub in optinalSubject) {
    //   if (optinalSubject[sub]) count += 1;
    // }
    // if (count < searchCodeForJoin?.classes?.optionalSubjectCount) {
    //   errors[
    //     "optionalSubject"
    //   ] = `atleast ${searchCodeForJoin?.classes?.optionalSubjectCount} optional subject required`;
    // }
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
        obj1 === "student_anti_ragging" ||
        obj1 === "student_id_card_front" ||
        obj1 === "student_id_card_back" ||
        obj1 === "studentFatherRationCardColor"
        // ||
        // obj1 === "student_blood_group"
      ) {
      } else {
        if (!studentForm[obj1]) errors[obj1] = `${obj1} is required!`;
      }
    }
    // enable this code when you want to validation of file upload.
    // for (let obj1 in dynamicDocument) {
    //   if (obj1 === "previousSchoolDocument") {
    //   } else if (obj1 === "studentPreviousSchool") {
    //     if (!dynamicDocument["previousSchoolDocument"]) {
    //       if (!dynamicDocument[obj1]) {
    //         errors[obj1] = `${obj1} is required!`;
    //       }
    //     }
    //   } else {
    //     if (!dynamicDocument[obj1]) {
    //       errors[obj1] = `${obj1} is required!`;
    //     }
    //   }
    // }
    if (departmentStudentForm?.studentFormSetting?.enrollmentPrn) {
      if (!studentNewField?.student_prn_enroll_number)
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
    if (
      e.target.name === "studentPhoneNumber" ||
      e.target.name === "studentParentsPhoneNumber"
    ) {
      setStudentForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value?.trim(),
      }));
    } else {
      setStudentForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onDynamicGateFieldChange = (e) => {
    if (
      [
        "student_gate_score",
        "student_degree_marks",
        "student_percentage",
        "student_class_cpi",
        "student_pre_sem_points",
        "student_final_sem_points",
      ]?.includes(e.target.name)
    ) {
      setStudentForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value?.trim(),
      }));
    } else {
      setStudentForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onDynamicDocumentFieldChange = (e) => {
    if (e.target.name === "previousSchoolDocument") {
      if (e.target.value)
        setDynamicDocument((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
          studentPreviousSchool: "No",
        }));
      else
        setDynamicDocument((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
          studentPreviousSchool: "",
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
    if (e.target.files?.length) {
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
          } else if (
            [
              "bankPassbook",
              "student_id_card_front",
              "student_id_card_back",
              "student_anti_ragging",
            ]?.includes(e.target.name)
          ) {
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
    }
  };

  const onSelectAvatar = (val) => {
    setFile(val);
    setStudentAdmission((prev) => ({
      ...prev,
      sample_pic: val,
    }));
  };

  const onFormPreview = (e) => {
    e.preventDefault();
    const validation =
      location?.openAs === "ADMISSION_ADMIN_SIDE"
        ? onAdmissionAdminValidation(
            formData,
            studentPhoneNumberAdd,
            studentAdmission
          )
        : onValidation(formData, studentForm, dynamicDocument);
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
    // console.info(validation);
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

  const onGetAllAccount = (e) => {
    setStudentPhoneNumberAdd(e.target.value?.trim());
    if (
      e.target.value?.trim()?.length === 10 &&
      location?.openAs === "ADMISSION_ADMIN_SIDE"
    ) {
      getAccountWithNumberRefetch();
    }
  };
  const onSelectedUser = (e) => {
    setSelectedUser(e.target.value);
  };

  const onAdmissionFeeStructure = (val) => {
    setOpenFeesQuery(val);
    setOpenFeeTransaction(true);
    setStudentAdmission((prev) => ({
      ...prev,
      fee_struct: val?._id,
    }));
  };

  const onApplyStudentForm = () => {
    onApplyForm({
      studentPhoneNumberAdd: studentPhoneNumberAdd,
      file: file,
      formData: formData,
      studentForm: studentForm,
      dynamicDocument: dynamicDocument,
      optinalSubject: null,
      studentAdmission: studentAdmission,
      selectedUser: selectedUser,
      studentNewField: studentNewField,
      pdfUndertaking: departmentStudentForm?.pg_undertakings_admission
        ? "PG"
        : departmentStudentForm?.ug_undertakings_admission
        ? "UG"
        : // : "PG",
          "OFF",
    });
  };

  const onClosePaymentForm = () => {
    setOpenFeeTransaction(false);
    setStudentAdmission((prev) => ({
      ...prev,
      mode: "",
      amount: "",
      fee_payment_mode: "",
      fee_payment_amount: "",
      transaction_date: "",
      fee_bank_name: "",
      fee_bank_holder: "",
      fee_utr_reference: "",
      fee_struct: "",
    }));
  };

  const onGateMonthYear = (val) => {
    let splitDate = val?.split("/");
    let dob = `${splitDate[2]}-${splitDate[1]}`;
    setStudentForm((prevState) => ({
      ...prevState,
      student_degree_year: dob,
    }));
  };

  const onGateYear = (val) => {
    let splitDate = val?.split("/");
    let dob = `${splitDate[2]}`;
    setStudentForm((prevState) => ({
      ...prevState,
      student_gate_year: dob,
    }));
  };

  // console.info("sdfbdsfjs", formErrors);
  return (
    <>
      {!preview ? (
        <form onSubmit={onFormPreview}>
          <div className={style.form_container}>
            {location?.openAs === "ADMISSION_ADMIN_SIDE" && (
              <>
                <div className={style.form_other_field}>
                  <JoinFormInput
                    labelText={t("form_mobile_no_label")}
                    placeholder={t("form_student_mobile_number_placeholder")}
                    name={"mobileNumber"}
                    value={studentPhoneNumberAdd}
                    type={"text"}
                    onChange={onGetAllAccount}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    errorShow={formErrors["studentPhoneNumberAdd"]}
                  />
                  {getAccountWithNumber?.all_account?.length ? (
                    <JoinFormExistingSelect
                      selectLabel={t("existing_account")}
                      selectedValue={t("select_existing_account")}
                      value={selectedUser}
                      name={"user"}
                      onChange={onSelectedUser}
                      options={getAccountWithNumber?.all_account}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  ) : (
                    ""
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
                  departmentStudentForm?.studentFormSetting?.enrollmentPrn
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
              {departmentStudentForm?.studentFormSetting?.enrollmentPrn && (
                <JoinFormInput
                  labelText={t(
                    location?.openAs === "ADMISSION_ADMIN_SIDE"
                      ? "form_prn_enr_label"
                      : "form_prn_enr_student_label"
                  )}
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
                  onClick={() =>
                    location?.openAs === "ADMISSION_ADMIN_SIDE"
                      ? profileImgChange()
                      : {}
                  }
                >
                  {location?.openAs === "ADMISSION_ADMIN_SIDE" ? (
                    <img
                      className={style.form_container_profile_photo}
                      src={
                        file
                          ? `${customAvatarUrl}/${file}`
                          : "/images/ins_default_profile.svg"
                      }
                      alt="student avatar"
                    />
                  ) : (
                    <img
                      className={style.form_container_profile_photo}
                      src={
                        photoURL ? photoURL : "/images/ins_default_profile.svg"
                      }
                      alt="student avatar"
                    />
                  )}
                  <img
                    src="/images/user-pencil-edit-transparent.svg"
                    alt="edit icon"
                    className={style.form_edit_icon}
                  />
                </label>
                {location?.openAs !== "ADMISSION_ADMIN_SIDE" && (
                  <input
                    type="file"
                    id="profile"
                    onChange={profileImgChange}
                    style={{ display: "none" }}
                  />
                )}
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

            {location?.openAs === "ADMISSION_ADMIN_SIDE" && (
              <>
                <h4>
                  {t("form_admission_fees_details")}:
                  {formErrors["fee_payment_mode"] ? (
                    <span style={{ color: "red", marginLeft: "15px" }}>
                      * required
                    </span>
                  ) : (
                    ""
                  )}
                </h4>
                {studentAdmission.fee_struct && (
                  <>
                    <div className={style.form_other_field}>
                      <JoinFormInput
                        labelText={t("selected_fee_structure")}
                        name={"selected_fee_structure"}
                        value={openFeesQuery.unique_structure_name ?? ""}
                        type={"text"}
                        onChange={() => {}}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                      <JoinFormInput
                        labelText={t("payment_type")}
                        name={"payment_type"}
                        value={studentAdmission.fee_payment_mode}
                        type={"text"}
                        onChange={() => {}}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                    <div className={style.form_other_field}>
                      <JoinFormInput
                        labelText={t("amount")}
                        name={"fee_payment_amount"}
                        value={studentAdmission.fee_payment_amount}
                        type={"tel"}
                        onChange={() => {}}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                      <JoinFormCalender
                        labelText={t("select_date_of_transaction")}
                        name={"transaction_date"}
                        value={studentAdmission.transaction_date}
                        onDateFunction={() => {}}
                        customStyleContainer={{
                          position: "relative",
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                          width: "49.5%",
                        }}
                        datePickerPosition={{
                          top: "-3rem",
                        }}
                        customStyleLabel={{
                          marginTop: "7px",
                        }}
                      />
                    </div>
                    <div className={style.form_other_field}>
                      {studentAdmission.fee_bank_name && (
                        <JoinFormInput
                          labelText={t("bank_name_collect")}
                          name={"bank_name_collect"}
                          value={studentAdmission.fee_bank_name}
                          type={"text"}
                          onChange={() => {}}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      )}
                      {studentAdmission.fee_bank_holder && (
                        <JoinFormInput
                          labelText={t("banke_holder_name")}
                          name={"banke_holder_name"}
                          value={studentAdmission.fee_bank_holder}
                          type={"text"}
                          onChange={() => {}}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      )}
                    </div>
                    <div className={style.form_other_field}>
                      {studentAdmission.fee_utr_reference && (
                        <JoinFormInput
                          labelText={t("cheque_dd_neft")}
                          name={"cheque_dd_neft"}
                          value={studentAdmission.fee_utr_reference}
                          type={"text"}
                          onChange={() => {}}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      )}
                    </div>
                  </>
                )}
                <div className={style.form_other_field}>
                  <div
                    className={style.form_add_fee_btn}
                    onClick={() => setOpenSelectFees(true)}
                  >
                    {t(
                      studentAdmission.fee_struct
                        ? "edit_select_fee_structure"
                        : "select_fee_structure"
                    )}
                  </div>
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

            {departmentStudentForm?.studentFormSetting?.otherPersonalInfo && (
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
            {departmentStudentForm?.studentFormSetting?.identityDetails && (
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
            {departmentStudentForm?.studentFormSetting?.addressInfo && (
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

            {departmentStudentForm?.studentFormSetting?.parentsInfo && (
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
            {departmentStudentForm?.studentFormSetting
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
                        ) : exitingLabel?.checkbox ? null : (
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
                              // customStyleContainer={{
                              //   width: "49.5%",
                              // }}
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
            {departmentStudentForm?.studentFormSetting?.bankDetails && (
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
                <BorderBottom
                  customStyle={{
                    width: "104.5%",
                    marginTop: "15px",
                    marginLeft: "-24px",
                  }}
                />
              </>
            )}
            {(departmentStudentForm?.studentFormSetting?.gate_score ||
              departmentStudentForm?.studentFormSetting
                ?.marks_and_degree_score) && (
              <>
                <h4>{t("form_student_pg_details_label")}:</h4>
                {departmentStudentForm?.studentFormSetting?.gate_score && (
                  <div className={style.form_other_field}>
                    {dynamicForm?.map((formField) =>
                      applyFormLabelGateInfo.map(
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
                          ) : (
                            <JoinFormInput
                              key={exitingLabel?.id}
                              labelText={t(exitingLabel?.label)}
                              placeholder={t(exitingLabel?.placeHolder)}
                              name={formField}
                              value={studentForm[formField]}
                              type={"tel"}
                              onChange={onDynamicGateFieldChange}
                              customStyleContainer={{
                                width: "49.5%",
                              }}
                              errorShow={formErrors[formField]}
                            />
                          ))
                      )
                    )}
                  </div>
                )}
                {departmentStudentForm?.studentFormSetting
                  ?.marks_and_degree_score && (
                  <>
                    <div className={style.form_other_field}>
                      {dynamicForm?.map((formField) =>
                        applyFormLabelGateDegreeInfo.map(
                          (exitingLabel) =>
                            exitingLabel?.lists?.includes(formField) &&
                            (exitingLabel?.isCalender ? (
                              <JoinFormCalender
                                key={exitingLabel?.id}
                                labelText={t(exitingLabel?.label)}
                                placeholder={t(exitingLabel?.placeHolder)}
                                name={formField}
                                value={studentForm[formField]}
                                onDateFunction={onGateMonthYear}
                                errorShow={formErrors[formField]}
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
                                value={studentForm[formField]}
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
                                onChange={onDynamicGateFieldChange}
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
                <BorderBottom
                  customStyle={{
                    width: "104.5%",
                    marginTop: "15px",
                    marginLeft: "-24px",
                  }}
                />
              </>
            )}

            {departmentStudentForm?.studentFormSetting?.id_card && (
              <>
                <h4>{t("form_student_idcard_details_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelIdcard.map(
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
              </>
            )}
            {departmentStudentForm?.studentFormSetting?.anti_ragging && (
              <>
                <h4>{t("form_student_antiragging_details_label")}:</h4>
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelAntiRagging.map(
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
                        ) : null)
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
          fileUrl={
            location?.openAs === "ADMISSION_ADMIN_SIDE"
              ? `${customAvatarUrl}/${file}`
              : photoURL
          }
          formSetting={departmentStudentForm?.studentFormSetting}
          onApplyStudentForm={onApplyStudentForm}
          location={location}
          studentPhoneNumber={studentPhoneNumberAdd}
          studentAdmission={studentAdmission}
          showingExistingUser={getAccountWithNumber?.all_account}
          selectedUser={selectedUser}
          studentNewField={studentNewField}
          openFeesQuery={openFeesQuery}
        />
      )}
      {disabled && <QLoader />}
      {openAvatar && (
        <CustomAvatar
          onClose={() => setOpenAvatar(false)}
          showContent="Select Avatar"
          onClick={onSelectAvatar}
        />
      )}
      {openSelectFees && (
        <SelectAdmissionFeeStructure
          onClose={() => setOpenSelectFees(false)}
          departmentId={location?.applicationDepartment}
          classMasterId={location?.applicationMaster}
          batchId={location?.batchId}
          onSelectedStudent={onAdmissionFeeStructure}
          asOpen="STUDENT_JOINING_FORM"
        />
      )}
      {openFeeTransaction && (
        <AdmissionPaymentForm
          onClose={onClosePaymentForm}
          onCloseFunction={() => setOpenFeeTransaction(false)}
          openFeesQuery={openFeesQuery}
          setStudentAdmission={setStudentAdmission}
        />
      )}
    </>
  );
};

export default StudentDepartmentApplyForm;
