import React, { useEffect, useState } from "react";
import { Dialog } from "@mui/material";
import { useFileUpload } from "../../../../hooks/authentication-api";
import { useInstituteStudentForm } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormSelect from "../../../../JoiningForm/Student/Form/JoinFormSelect";
import {
  allFileKeyToSend,
  applyFormLabelAddressInfo,
  applyFormLabelBanksInfo,
  applyFormLabelIdentityDetails,
  applyFormLabelOtherPersonalInfo,
  applyFormLabelParentsInfo,
  applyFormLabelPreviousSchoolAndDocument,
  chooseGenderKey,
  chooseGenderValue,
  studentAddressInfo,
  studentBanksInfo,
  studentIdentityDetails,
  studentOtherPersonalInfo,
  studentParentsInfo,
  studentPrnEnrollmentInfo,
} from "../../../../constant/constant_value";
import JoinFormCalender from "../../../../JoiningForm/Student/Form/JoinFormCalender";
import JoinFormTextArea from "../../../../JoiningForm/Student/Form/JoinFormTextArea";
import FormCheckbox from "../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormCheckbox";
import JoinFormFile from "../../../../JoiningForm/Student/Form/JoinFormFile";
import ButtonWithTypeSubmit from "../../../../Custom/Button/ButtonWithTypeSubmit";
import Crop from "../../../../ImageCrop/Crop";
import { Notfication } from "../../../../validation/Snackbar";
import QLoader from "../../../../Loader/QLoader";
import style from "../../../../JoiningForm/Student/Form/JoinForm.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import { withCurrentDate } from "../../../../Functions/timeComparison/timeComparison";
import {
  useStudentFormEdit,
  useStudentProfilePhoto,
} from "../../../../hooks/member_tab/class-api";
import { useNavigate, useParams } from "react-router-dom";
import { useStudentDesignationDataQuery } from "../../../../services/joining/joinApi";
import { imageShowUrl } from "../../../../services/BaseUrl";
const EditOwnStudentForm = ({ location }) => {
  const navigate = useNavigate();
  const params = useParams();
  const [fullName, setFullName] = useState("");
  const [studentForm, setStudentForm] = useState({});
  const [dynamicForm, setDynamicForm] = useState([]);
  const [formData, setFormData] = useState({
    studentFirstName: location?.student?.studentFirstName ?? "",
    studentMiddleName: location?.student?.studentMiddleName ?? "",
    studentLastName: location?.student?.studentLastName ?? "",
    studentDOB: location?.student?.studentDOB ?? "",
    studentGender: location?.student?.studentGender ?? "",
    studentMotherName: location?.student?.studentMotherName ?? "",
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
  const [studentFormEdit] = useStudentFormEdit();
  const [studentProfilePhoto] = useStudentProfilePhoto();
  const { instituteStudentForm, instituteStudentFormRefetch } =
    useInstituteStudentForm({
      id: location?.student?.institute?._id,
      skip: !location?.student?.institute?._id,
    });
  const {
    data: studentDesignationData,
    refetch: studentDesignationDataRefetch,
  } = useStudentDesignationDataQuery(location?.student?._id, {
    skip: !location?.student?._id,
  });

  useEffect(() => {
    if (location?.student?.institute?._id) instituteStudentFormRefetch();
  }, [instituteStudentFormRefetch, location?.student?.institute?._id]);

  useEffect(() => {
    setFormData({
      studentFirstName: location?.student?.studentFirstName ?? "",
      studentMiddleName: location?.student?.studentMiddleName ?? "",
      studentLastName: location?.student?.studentLastName ?? "",
      studentDOB: location?.student?.studentDOB ?? "",
      studentGender: location?.student?.studentGender ?? "",
      studentMotherName: location?.student?.studentMotherName ?? "",
    });
    setFullName(
      `${location?.student?.studentFirstName ?? ""} ${
        location?.student?.studentMiddleName ?? ""
      } ${location?.student?.studentLastName ?? ""}`
    );
  }, [location?.student]);

  useEffect(() => {
    if (instituteStudentForm?.studentFormSetting) {
      const latestSnapshot1 = [];
      for (let obj in instituteStudentForm.studentFormSetting) {
        if (obj === "previousSchoolAndDocument") {
          let compareValue =
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument;
          let fileField = [];
          for (let nestedObj in compareValue) {
            if (compareValue[nestedObj]) {
              if (nestedObj === "aadharCard") {
                setDynamicDocument((prev) => ({
                  ...prev,
                  addharFrontCard: location?.student?.addharFrontCard ?? "",
                  addharBackCard: location?.student?.addharBackCard ?? "",
                }));
                fileField.push("addharFrontCard", "addharBackCard");
              } else if (nestedObj === "previousSchoolDocument") {
                setDynamicDocument((prev) => ({
                  ...prev,
                  studentPreviousSchool:
                    location?.student?.studentPreviousSchool ?? "",
                  previousSchoolDocument: "",
                }));
                fileField.push(
                  "previousSchoolDocument",
                  "studentPreviousSchool"
                );
              } else {
                if (nestedObj === "casteCertificate") {
                  setDynamicDocument((prev) => ({
                    ...prev,
                    [nestedObj]:
                      location?.student?.studentCasteCertificatePhoto ?? "",
                  }));
                  fileField.push(nestedObj);
                } else {
                  let keyValue = "";
                  for (let doc of location?.student?.studentDocuments) {
                    if (nestedObj === doc?.documentName) {
                      keyValue = doc?.documentKey;
                      break;
                    }
                  }
                  setDynamicDocument((prev) => ({
                    ...prev,
                    [nestedObj]: keyValue,
                  }));
                  fileField.push(nestedObj);
                }
              }
            }
          }
          setDynamicFormDocument([...fileField]);
        } else if (instituteStudentForm.studentFormSetting[obj]) {
          if (obj === "otherPersonalInfo") {
            setStudentForm((prev) => ({
              ...prev,
              studentBirthPlace: location?.student?.studentBirthPlace ?? "",
              studentPhoneNumber: location?.student?.studentPhoneNumber ?? "",
              studentFatherRationCardColor:
                location?.student?.studentFatherRationCardColor ?? "",
              studentAadharNumber: location?.student?.studentAadharNumber ?? "",
              studentEmail: location?.student?.studentEmail ?? "",
              student_blood_group: location?.student?.student_blood_group ?? "",
            }));
            latestSnapshot1.push(...studentOtherPersonalInfo?.keys);
          } else if (obj === "identityDetails") {
            setStudentForm((prev) => ({
              ...prev,
              studentNationality: location?.student?.studentNationality ?? "",
              studentReligion: location?.student?.studentReligion ?? "",
              studentCast: location?.student?.studentCast ?? "",
              studentCastCategory: location?.student?.studentCastCategory ?? "",
              studentMTongue: location?.student?.studentMTongue ?? "",
            }));
            latestSnapshot1.push(...studentIdentityDetails?.keys);
          } else if (obj === "addressInfo") {
            setStudentForm((prev) => ({
              ...prev,
              studentCurrentAddress:
                location?.student?.studentCurrentAddress ?? "",
              studentCurrentPincode:
                location?.student?.studentCurrentPincode ?? "",
              studentAddress: location?.student?.studentAddress ?? "",
              studentPincode: location?.student?.studentPincode ?? "",
            }));
            latestSnapshot1.push(...studentAddressInfo?.keys);
          } else if (obj === "parentsInfo") {
            setStudentForm((prev) => ({
              ...prev,
              studentParentsName: location?.student?.studentParentsName ?? "",
              studentParentsPhoneNumber:
                location?.student?.studentParentsPhoneNumber ?? "",
              studentParentsOccupation:
                location?.student?.studentParentsOccupation ?? "",
              studentParentsAnnualIncom:
                location?.student?.studentParentsAnnualIncom ?? "",
            }));
            latestSnapshot1.push(...studentParentsInfo?.keys);
          } else if (obj === "bankDetails") {
            setStudentForm((prev) => ({
              ...prev,
              studentBankName: location?.student?.studentBankName ?? "",
              studentBankAccountHolderName:
                location?.student?.studentBankAccountHolderName ?? "",
              studentBankAccount: location?.student?.studentBankAccount ?? "",
              studentBankIfsc: location?.student?.studentBankIfsc ?? "",
              bankPassbook: location?.student?.bankPassbook ?? "",
            }));
            latestSnapshot1.push(...studentBanksInfo?.keys);
          } else if (obj === "enrollmentPrn") {
            setStudentForm((prev) => ({
              ...prev,
              student_prn_enroll_number:
                location?.student?.student_prn_enroll_number ?? "",
            }));
            latestSnapshot1.push(...studentPrnEnrollmentInfo?.keys);
          } else {
          }
        } else {
        }
      }
      setDynamicForm([...latestSnapshot1]);
    }
  }, [instituteStudentForm?.studentFormSetting, location?.student]);

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
      setDisabled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      studentProfilePhoto({
        profile: formData,
        sid: location?.student?._id,
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const onValidation = (formData, studentForm, dynamicDocument) => {
    const errors = {};
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
        obj1 === "studentFatherRationCardColor" ||
        obj1 === "student_blood_group"
      ) {
      } else {
        if (!studentForm[obj1]) errors[obj1] = `${obj1} is required!`;
      }
    }
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
    if (e.target.files[0]) {
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
    }
  };

  const onDateFunction = (val) => {
    if (!location?.student?.studentDOB) {
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
    }
  };

  const onUpdateForm = (e) => {
    e.preventDefault();
    // console.info(
    //   "this is student all detai",
    //   location?.student,
    //   studentForm,
    //   dynamicDocument
    // );
    const validation = onValidation(formData, studentForm, dynamicDocument);
    let flag = false;
    for (let err in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFormErrors(validation);
    } else {
      setDisabled((pre) => !pre);
      if (location?.student?._id) {
        const editProfile = {
          student: {},
          fileArray: [],
        };
        for (let studentObj in dynamicDocument) {
          if (allFileKeyToSend.includes(studentObj)) {
            if (dynamicDocument[studentObj]?.originalName)
              editProfile.fileArray.push(dynamicDocument[studentObj]);
          } else {
            editProfile.student[studentObj] = dynamicDocument[studentObj];
          }
        }
        for (let studentObj in studentForm) {
          // if (allFileKeyToSend.includes(studentObj)) {
          //   if (studentForm[studentObj]?.originalName)
          //     editProfile.fileArray.push(studentForm[studentObj]);
          // } else if (studentObj === "studentProfilePhoto") {
          // } else {
          editProfile.student[studentObj] = studentForm[studentObj];
          // }
        }
        for (let studentObj in formData) {
          // if (allFileKeyToSend.includes(studentObj)) {
          //   if (studentForm[studentObj]?.originalName)
          //     editProfile.fileArray.push(studentForm[studentObj]);
          // } else if (studentObj === "studentProfilePhoto") {
          // } else {
          editProfile.student[studentObj] = formData[studentObj];
          // }
        }
        studentFormEdit({
          sid: location?.student?._id,
          editProfile,
        })
          .then(() => {
            if (location?.type === "READMISSION") {
              setDisabled((pre) => !pre);
              navigate(`/q/${params.username}/student/profile/admission`, {
                state: {
                  sid: location?.student?._id,
                  viewAs: "STUDENT",
                  instituteId: location?.student?.institute?._id,
                },
              });
            } else {
              studentDesignationDataRefetch();
              setDisabled((pre) => !pre);
              navigate(-1);
            }
          })
          .catch({});
      } else setDisabled((pre) => !pre);
    }
    // console.info("this is updated form", student);
  };

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
              // onChange={(e) => setFullName(e.target.value)}
              customStyleContainer={
                instituteStudentForm?.studentFormSetting?.enrollmentPrn
                  ? {
                      width: "56%",
                    }
                  : {
                      width: "86%",
                    }
              }
              errorShow={
                formErrors["studentFirstName"] || formErrors["studentLastName"]
              }
              disabled
            />
            {instituteStudentForm?.studentFormSetting?.enrollmentPrn && (
              <JoinFormInput
                labelText={t("form_prn_enr_student_label")}
                placeholder={t("form_prn_enr_placeholder")}
                name={"prn"}
                value={studentForm?.student_prn_enroll_number}
                type={"text"}
                onChange={(e) =>
                  setStudentForm((prevState) => ({
                    ...prevState,
                    student_prn_enroll_number: e.target.value,
                  }))
                }
                customStyleContainer={{
                  width: "30%",
                }}
                errorShow={formErrors["student_prn_enroll_number"]}
                disabled={location?.student?.student_prn_enroll_number}
              />
            )}
            <div className={style.form_container_profile_image}>
              <label
                htmlFor="profile"
                className={style.form_container_profile_image_label}
              >
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="profile is not uploaded"
                    className={style.form_container_profile_photo}
                  />
                ) : (
                  <img
                    src={
                      studentDesignationData?.student?.studentProfilePhoto
                        ? `${imageShowUrl}/${studentDesignationData?.student?.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="profile is not uploaded"
                    className={style.form_container_profile_photo}
                  />
                )}
                {/* <img
                  className={style.form_container_profile_photo}
                  src={profilePhoto ? profilePhoto : "/images/ins_default_profile.svg"}
                  alt="student avatar"
                /> */}
                <img
                  src="/images/user-pencil-edit-transparent.svg"
                  alt="edit icon"
                  className={style.form_edit_icon}
                />
              </label>
              <input
                type="file"
                name="file"
                id="profile"
                onChange={profileImgChange}
                accept="image/gif, image/jpeg, image/png"
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
              disabled={location?.student?.studentGender}
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
              disabled={location?.student?.studentMotherName}
            />
          </div>
          <BorderBottom
            customStyle={{
              width: "104.5%",
              marginTop: "15px",
              marginLeft: "-24px",
            }}
          />
          {instituteStudentForm?.studentFormSetting?.otherPersonalInfo && (
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
                          disabled={location?.student?.[formField]}
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
                          disabled={location?.student?.[formField]}
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
          {instituteStudentForm?.studentFormSetting?.identityDetails && (
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
                          disabled={location?.student?.[formField]}
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
                          disabled={location?.student?.[formField]}
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
          {instituteStudentForm?.studentFormSetting?.addressInfo && (
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
                          disabled={location?.student?.[formField]}
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
                          disabled={location?.student?.[formField]}
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
          {instituteStudentForm?.studentFormSetting?.parentsInfo && (
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
                          disabled={location?.student?.[formField]}
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
                            formField === "studentParentsPhoneNumber" ? 10 : 30
                          }
                          onChange={onDynamicFieldChange}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                          disabled={location?.student?.[formField]}
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
          {instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
            ?.previousSchoolDocument && (
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
                          disabled={location?.student?.[formField]}
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
                        //   disabled={location?.student?.[formField]}
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
                            // customStyleContainer={{
                            //   width: "49.5%",
                            // }}
                            errorShow={formErrors[formField]}
                            disabled={location?.student?.[formField]}
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
          {instituteStudentForm?.studentFormSetting?.bankDetails && (
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
                          disabled={location?.student?.[formField]}
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
                          disabled={location?.student?.[formField]}
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
            buttonText={t("update")}
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

      {disabled && <QLoader />}
    </>
  );
};

export default EditOwnStudentForm;
