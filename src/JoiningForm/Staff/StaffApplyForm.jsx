import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  staffBanksInfo,
  staffAddressInfo,
  staffIdentityDetails,
  staffOtherPersonalInfo,
  applyFormLabelOtherPersonalInfo,
  applyFormLabelIdentityDetails,
  applyFormLabelAddressInfo,
  applyFormLabelBanksInfo,
  applyFormLabelPreviousSchoolAndDocument,
  chooseGenderKey,
  chooseGenderValue,
} from "../../constant/constant_value";
import Crop from "../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import { useInstituteStaffForm } from "../../Department/Institute/Components/DepartmentApi/depart-api";
import style from "../Student/Form/JoinForm.module.css";
import JoinFormInput from "../Student/Form/JoinFormInput";
import JoinFormSelect from "../Student/Form/JoinFormSelect";
import JoinFormTextArea from "../Student/Form/JoinFormTextArea";
import JoinFormFile from "../Student/Form/JoinFormFile";
import JoinFormToggle from "../Student/Form/JoinFormToggle";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
import { Notfication } from "../../validation/Snackbar";
import FormCheckbox from "../../StaffTab/components/DividerTab/MainContent/StaffForm/FormCheckbox";
import StaffDetails from "./StaffDetails";
import { useFileUpload } from "../../hooks/authentication-api";
import QLoader from "../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import { withCurrentDate } from "../../Functions/timeComparison/timeComparison";
import JoinFormCalender from "../Student/Form/JoinFormCalender";
import JoinFormExistingSelect from "../Student/Form/JoinFormExistingSelect";
import { useGetAccountWithNumber } from "../../hooks/member_tab/admission-api";

// import JoinFormCalender from "../Student/Form/JoinFormCalender";

const StaffApplyForm = ({ preview, setPreview, location, onApplyForm }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const [fullName, setFullName] = useState("");
  const [staffForm, setStaffForm] = useState({});
  const [staffPhoneNumberAdd, setStaffPhoneNumberAdd] = useState("");
  const [dynamicForm, setDynamicForm] = useState([]);
  const [formData, setFormData] = useState({
    staffFirstName: "",
    staffMiddleName: "",
    staffLastName: "",
    staffDOB: "",
    staffGender: "",
    staffMotherName: "",
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
  const [selectedUser, setSelectedUser] = useState("");

  // console.info("losfsdfs", location);
  const { instituteStaffForm, instituteStaffFormRefetch } =
    useInstituteStaffForm({
      id:
        location?.openAs === "INSTITUTE_SIDE"
          ? ids?.id
          : location?.openAs === "DIRECT"
          ? location?.instituteId
          : ids.searchProfile?.id,
      skip:
        location?.openAs === "INSTITUTE_SIDE"
          ? !ids?.id
          : location?.openAs === "DIRECT"
          ? !location?.instituteId
          : !ids.searchProfile?.id,
    });
  const [oneFileUpload] = useFileUpload();
  // console.info("sjfshdfsdf", location);
  useEffect(() => {
    if (ids.searchProfile?.id || ids?.id || location?.openAs)
      instituteStaffFormRefetch();
  }, [
    ids.searchProfile?.id,
    ids?.id,
    location?.openAs,
    instituteStaffFormRefetch,
  ]);

  useEffect(() => {
    if (instituteStaffForm?.staffFormSetting) {
      const latestSnapshot1 = [];
      for (let obj in instituteStaffForm.staffFormSetting) {
        if (obj === "previousSchoolAndDocument") {
          let compareValue =
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument;
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
                  staffPreviousSchool: "",
                  previousSchoolDocument: "",
                }));
                fileField.push("previousSchoolDocument", "staffPreviousSchool");
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
        } else if (instituteStaffForm.staffFormSetting[obj]) {
          if (obj === "otherPersonalInfo") {
            setStaffForm((prev) => ({
              ...prev,
              ...staffOtherPersonalInfo?.withValue,
            }));
            latestSnapshot1.push(...staffOtherPersonalInfo?.keys);
          } else if (obj === "identityDetails") {
            setStaffForm((prev) => ({
              ...prev,
              ...staffIdentityDetails?.withValue,
            }));
            latestSnapshot1.push(...staffIdentityDetails?.keys);
          } else if (obj === "addressInfo") {
            setStaffForm((prev) => ({
              ...prev,
              ...staffAddressInfo?.withValue,
            }));
            latestSnapshot1.push(...staffAddressInfo?.keys);
          } else if (obj === "bankDetails") {
            setStaffForm((prev) => ({
              ...prev,
              ...staffBanksInfo?.withValue,
            }));
            latestSnapshot1.push(...staffBanksInfo?.keys);
          } else {
          }
        } else {
        }
      }
      setDynamicForm([...latestSnapshot1]);
    }
  }, [instituteStaffForm?.staffFormSetting]);

  useEffect(() => {
    if (fullName) {
      const splitName = fullName.split(" ");
      if (splitName.length >= 3)
        setFormData((s) => ({
          ...s,
          staffFirstName: splitName[0],
          staffMiddleName: splitName[1],
          staffLastName: splitName.slice(2).toString().replaceAll(",", " "),
        }));
      else
        setFormData((s) => ({
          ...s,
          staffFirstName: splitName[0],
          staffMiddleName: "",
          staffLastName: splitName[1] === undefined ? "" : splitName[1],
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
  // console.info("this is file ->", file);
  useEffect(() => {
    if (upload) {
      onFileUpload({ target: { name: "file", files: [file] } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  // for get all attach account
  const { getAccountWithNumber, getAccountWithNumberRefetch } =
    useGetAccountWithNumber({
      phoneKey: staffPhoneNumberAdd,
      skip: staffPhoneNumberAdd?.length !== 10,
    });

  const onInstituteValidation = (formData, staffPhoneNumberAdd) => {
    const errors = {};
    if (!file) {
      setNotificationState({
        msg: "Please Select Image",
        run: true,
      });
      errors["file"] = `profile image is required!`;
    }
    if (!staffPhoneNumberAdd) {
      errors["staffPhoneNumberAdd"] = "* required";
    }
    for (let obj in formData) {
      if (obj === "staffMiddleName" || obj === "staffMotherName") {
      } else {
        if (!formData[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onValidation = (formData, staffForm, dynamicDocument) => {
    const errors = {};
    if (!file) {
      errors["file"] = `profile image is required!`;
      setNotificationState({
        msg: t("form_select_image_label"),
        run: true,
      });
    }
    if (
      staffForm["staffBankAccount"] &&
      staffForm["staffBankAccount"] !== staffForm["staffBankReAccount"]
    ) {
      errors["staffBankReAccount"] = `${t(
        "form_account_dose_not_match_label"
      )}`;
    }
    for (let obj in formData) {
      if (obj === "staffMiddleName") {
      } else {
        if (!formData[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    for (let obj1 in staffForm) {
      if (!staffForm[obj1]) {
        // applyFormLabel?.map((applyMessage) => {
        //   if (applyMessage?.lists?.includes(obj1))
        errors[obj1] = `${obj1} is required!`;
        // return "";
        // });
      }
    }
    for (let obj1 in dynamicDocument) {
      if (obj1 === "previousSchoolDocument") {
      } else if (obj1 === "staffPreviousSchool") {
        if (!dynamicDocument["previousSchoolDocument"]) {
          if (!dynamicDocument[obj1]) {
            errors[obj1] = `${obj1} is required!`;
          }
        }
      } else {
        if (!dynamicDocument[obj1]) {
          // applyFormLabel?.map((applyMessage) => {
          //   if (applyMessage?.lists?.includes(obj1))
          errors[obj1] = `${obj1} is required!`;
          //   return "";
          // });
        }
      }
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
    setStaffForm((prevState) => ({
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
    } else if (e.target.name === "staffPreviousSchool") {
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
      setStaffForm((prevState) => ({
        ...prevState,
        asSameAddress: e.target.checked,
        staffAddress: prevState.staffCurrentAddress,
        staffPincode: prevState.staffCurrentPincode,
      }));
    } else {
      setStaffForm((prevState) => ({
        ...prevState,
        asSameAddress: e.target.checked,
        staffAddress: "",
        staffPincode: "",
      }));
    }
  };

  // const onDateSelect = (val) => {
  //   console.info("this is date", val);
  //   setFormData((prev) => ({
  //     ...prev,
  //     staffDOB: val,
  //   }));
  // };

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
          setStaffForm((prevState) => ({
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
  // console.info("this is file of one file", dynamicDocument, staffForm, file);
  const onFormPreview = (e) => {
    e.preventDefault();
    const validation =
      location?.openAs === "INSTITUTE_SIDE"
        ? onInstituteValidation(formData, staffPhoneNumberAdd)
        : onValidation(formData, staffForm, dynamicDocument);
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
        staffDOB: dob,
      }));
    } else {
      setNotificationState({
        msg: `You cannot select upcoming date ${val}`,
        run: true,
      });
    }
  };

  // for exsiting account
  const onGetAllAccount = (e) => {
    setStaffPhoneNumberAdd(e.target.value);
    if (
      e.target.value?.length === 10 &&
      location?.openAs === "INSTITUTE_SIDE"
    ) {
      getAccountWithNumberRefetch();
    }
  };
  const onSelectedUser = (e) => {
    // console.info("this is valur", e.target.value);
    setSelectedUser(e.target.value);
  };

  // console.info("this is eeor", formErrors);
  const onApplyStaffForm = () => {
    // const validation = onValidation(formData, staffForm);

    onApplyForm({
      staffPhoneNumberAdd,
      file,
      formData,
      staffForm,
      dynamicDocument,
      selectedUser,
    });
  };

  // console.info("this is gender", formData.staffGender);
  return (
    <>
      {!preview ? (
        <form onSubmit={onFormPreview}>
          <div className={style.form_container}>
            {location?.openAs === "INSTITUTE_SIDE" && (
              <>
                <div className={style.form_other_field}>
                  <JoinFormInput
                    labelText={t("form_mobile_no_label")}
                    placeholder={t("form_staff_mobile_number_placeholder")}
                    name={"mobileNumber"}
                    value={staffPhoneNumberAdd}
                    type={"text"}
                    onChange={onGetAllAccount}
                    customStyleContainer={{
                      width: "49.5%",
                    }}
                    errorShow={formErrors["staffPhoneNumberAdd"]}
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
                customStyleContainer={{
                  width: "86%",
                }}
                errorShow={
                  formErrors["staffFirstName"] || formErrors["staffLastName"]
                }
              />
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
                  name="file"
                  onChange={profileImgChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div className={style.form_profile_info}>
              <JoinFormSelect
                selectLabel={t("form_gender_label")}
                selectedValue={t("form_gender_placeholder")}
                value={formData.staffGender}
                name={"staffGender"}
                onChange={onProfileInfo}
                options={chooseGenderKey}
                optionsValue={chooseGenderValue}
                errorShow={formErrors["staffGender"]}
              />
              <JoinFormCalender
                labelText={t("form_date_of_birth_label")}
                placeholder={t("form_date_of_birth_placeholder")}
                name={"staffDOB"}
                value={formData.staffDOB}
                onDateFunction={onDateFunction}
                errorShow={formErrors["staffDOB"]}
                customStyleContainer={{ position: "relative" }}
              />
              {/* <JoinFormInput
                labelText={t("form_date_of_birth_label")}
                placeholder={t("form_date_of_birth_placeholder")}
                name={"staffDOB"}
                value={formData.staffDOB}
                type={"date"}
                onChange={onProfileInfo}
                errorShow={formErrors["staffDOB"]}
              /> */}
              <JoinFormInput
                labelText={t("form_mother_name_label")}
                placeholder={t("form_mother_name_placeholder")}
                name={"staffMotherName"}
                value={formData.staffMotherName}
                type={"text"}
                onChange={onProfileInfo}
                errorShow={formErrors["staffMotherName"]}
              />
            </div>
            <BorderBottom
              customStyle={{
                width: "104.5%",
                marginTop: "15px",
                marginLeft: "-24px",
              }}
            />

            {instituteStaffForm?.staffFormSetting?.otherPersonalInfo && (
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
                            value={staffForm[formField]}
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
                            value={staffForm[formField]}
                            type={
                              [
                                "staffPhoneNumber",
                                "staffAadharNumber",
                              ].includes(formField)
                                ? "tel"
                                : "text"
                            }
                            inputLength={
                              formField === "staffPhoneNumber" ? 10 : 12
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
            {instituteStaffForm?.staffFormSetting?.identityDetails && (
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
                            value={staffForm[formField]}
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
                            value={staffForm[formField]}
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
            {instituteStaffForm?.staffFormSetting?.addressInfo && (
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
                            value={staffForm[formField]}
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
                            checkedValue={staffForm.asSameAddress}
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
                            value={staffForm[formField]}
                            onChange={onDynamicFieldChange}
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
            {instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
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
                          />
                        ) : exitingLabel?.checkbox ? (
                          <JoinFormToggle
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            name={formField}
                            value={dynamicDocument[formField]}
                            onChange={onDynamicDocumentFieldChange}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                          />
                        ) : (
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
                                width: "49.5%",
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
            {instituteStaffForm?.staffFormSetting?.bankDetails && (
              <>
                <h4>{t("form_staff_bank_details_label")}:</h4>
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
                            value={staffForm[formField]}
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
                            value={staffForm[formField]}
                            type={
                              [
                                "staffBankAccount",
                                "staffBankReAccount",
                              ].includes(formField)
                                ? "tel"
                                : "text"
                            }
                            reAccount={
                              formField === "staffBankReAccount"
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
                setUpload={setUpload}
                first={1}
                second={1}
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
        <StaffDetails
          staffForm={staffForm}
          dynamicForm={dynamicForm}
          formData={formData}
          dynamicFormDocument={dynamicFormDocument}
          dynamicDocument={dynamicDocument}
          fileUrl={photoURL}
          formSetting={instituteStaffForm?.staffFormSetting}
          onApplyStaffForm={onApplyStaffForm}
          location={location}
          staffPhoneNumberAdd={staffPhoneNumberAdd}
          showingExistingUser={getAccountWithNumber?.all_account}
          selectedUser={selectedUser}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default StaffApplyForm;
