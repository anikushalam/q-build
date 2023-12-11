import React, { useEffect, useState } from "react";
import style from "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionSiteInfo/AdmissionSiteInfo.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useSelector } from "react-redux";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import JoinFormSelect from "../../../../../JoiningForm/Student/Form/JoinFormSelect";
import { useAssignSearchStaff } from "../../../../../Post/Institute/Components/search-api";
import {
  stakeType,
  stakeTypeValue,
} from "../../../../../constant/constant_value";
import { Dialog } from "@mui/material";
import Crop from "../../../../../ImageCrop/Crop";
import {
  useAcademicSiteInfo,
  useGetAcademicSiteInfo,
  useUpdateAcademicSiteInfo,
} from "../../../../../hooks/setting-api";
import JoinFormFilee from "../../../../../JoiningForm/Student/Form/JoinFormFilee";

function AcademicSiteInfo({ aid, viewAs, instituteId }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const id = useSelector((state) => state.idChange?.id);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [documentUrl, setDocumentUrl] = useState([]);
  const [feildName, setFeildName] = useState("");
  //  -----------------------------
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  //  -----------------------------
  const [fieldName, setFieldName] = useState("");
  const [otherField, setOtherField] = useState({
    academic_about: "",
    academic_head: "",
    academic_photo: "",
    academic_rules: [],
    academic_mechanism: [],
    academic_student_feedback: [],
    academic_ict_faculty: [],
    academic_peer: [],
    academic_development_courses: [],
    academic_results: [],
    academic_toppers: [],
    academic_student_survey: [],
    academic_annual_report: [],
    academic_action_plan: [],
    academic_calendar: [],
    academic_suggestion: [],
  });
  const academicFiles = [
    { fileheading: "dean_academic_rules", filename: "academic_rules" },
    { fileheading: "academic_mechanism", filename: "academic_mechanism" },
    {
      fileheading: "academic_student_feedback",
      filename: "academic_student_feedback",
    },
    { fileheading: "academic_ict_faculty", filename: "academic_ict_faculty" },
    { fileheading: "academic_peer", filename: "academic_peer" },
    {
      fileheading: "academic_development_courses",
      filename: "academic_development_courses",
    },
    { fileheading: "academic_results", filename: "academic_results" },
    { fileheading: "academic_toppers", filename: "academic_toppers" },
    {
      fileheading: "academic_student_survey",
      filename: "academic_student_survey",
    },
    {
      fileheading: "academic_annual_report",
      filename: "academic_annual_report",
    },
    { fileheading: "academic_action_plan", filename: "academic_action_plan" },
  ];
  const [academiCalendar, setAcademiCalendar] = useState([]);
  const [academicSiteInfoo] = useAcademicSiteInfo();
  const [updateAcademicSiteInfoo] = useUpdateAcademicSiteInfo();

  const [suggestion, setSuggestion] = useState([
    {
      name: "",
      email: "",
      subject: "",
      compliant: "",
      stake_type: "",
      phone_number: "",
    },
  ]);

  const { assignSearchStaff, assignSearchStaffRefetch } = useAssignSearchStaff({
    skip: viewAs === "ADMISSION_ADMIN" ? !instituteId : !id,
    search: {
      search: "",
      page: 1,
      id: viewAs === "ADMISSION_ADMIN" ? instituteId : id,
      limit: 500,
    },
  });
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(id, {
      skip: viewAs === "INSTITUTE" ? true : !id,
    });
  const { getAcademicSiteInfo, getAcademicSiteInfoRefetch } =
    useGetAcademicSiteInfo({
      aid: aid,
      skip: !aid,
    });

  useEffect(() => {
    if (aid) getAcademicSiteInfoRefetch();
  }, [aid, getAcademicSiteInfoRefetch]);
  useEffect(() => {
    if (id) profileDataRefetch();
  }, [id, profileDataRefetch]);

  useEffect(() => {
    if (getAcademicSiteInfo?.academic) {
      setOtherField({
        academic_about: getAcademicSiteInfo?.academic?.academic_about ?? "",
        academic_head: getAcademicSiteInfo?.academic?.academic_head ?? "",
        academic_photo: getAcademicSiteInfo?.academic?.academic_photo ?? "",
        academic_rules: getAcademicSiteInfo?.academic?.academic_rules,
        academic_mechanism: getAcademicSiteInfo?.academic?.academic_mechanism,
        academic_student_feedback:
          getAcademicSiteInfo?.academic?.academic_student_feedback,
        academic_ict_faculty:
          getAcademicSiteInfo?.academic?.academic_ict_faculty,
        academic_peer: getAcademicSiteInfo?.academic?.academic_peer,
        academic_development_courses:
          getAcademicSiteInfo?.academic?.academic_peer,
        academic_results: getAcademicSiteInfo?.academic?.academic_results,
        academic_toppers: getAcademicSiteInfo?.academic?.academic_toppers,
        academic_student_survey:
          getAcademicSiteInfo?.academic?.academic_student_survey,
        academic_annual_report:
          getAcademicSiteInfo?.academic?.academic_annual_report,
        academic_action_plan:
          getAcademicSiteInfo?.academic?.academic_action_plan,
      });
      if (getAcademicSiteInfo?.academic?.academic_calendar?.length) {
        let cont = [];
        for (let cal of getAcademicSiteInfo?.academic?.academic_calendar) {
          let obj = {
            calendar_name: cal?.calendar_name,
            calendar: cal?.calendar,
          };
          cont.push(obj);
        }
        setAcademiCalendar(cont);
      }
    }
  }, [getAcademicSiteInfo?.admission_site]);

  useEffect(() => {
    setOtherField((prevState) => ({
      ...prevState,
      [fieldName]: academiCalendar,
    }));
  }, [academiCalendar, fieldName]);

  useEffect(() => {
    setOtherField((prev) => ({
      ...prev,
      academic_suggestion: suggestion,
    }));
  }, [suggestion]);

  const onBack = () => {
    navigate(-1);
  };

  const onUploadFile = (blb, name, index, arr) => {
    console.info(blb);
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", blb);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        let obj = {
          documentType: "",
          documentName: "",
          documentSize: "",
          documentKey: "",
        };
        obj.documentType = blb.type;
        obj.documentName = blb.name;
        obj.documentSize = blb.size;
        obj.documentKey = res.data?.imageKey;

        arr.push(obj.documentKey);

        const inputarr = [...academiCalendar];
        for (let inp = 0; inp < inputarr?.length; inp++) {
          if (inp === index) {
            inputarr[inp][name] = obj.documentKey;
          }
        }
        setAcademiCalendar(inputarr);

        // if (name === "calendar" || name === "file") {
        //   const inputarr = [...academiCalendar];
        //   for (let inp = 0; inp < inputarr?.length; inp++) {
        //     if (inp === index) {
        //       inputarr[inp][name] = obj.documentKey;
        //     }
        //   }
        //   setAcademiCalendar(inputarr);
        // } else {
        //   setOtherField((prevState) => ({
        //     ...prevState,
        //     [name]: arr,
        //   }));
        // }

        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onBookPdf = (e, index) => {
    const arr = [];
    if (e.target.files?.length) {
      for (let file in e.target.files) {
        if (typeof e.target.files[file] === "object") {
          onUploadFile(e.target.files[file], e.target.name, index, arr);
        }
      }
    }
  };

  const onFileUpload = (e) => {
    if (e.target.files[0]) {
      const image = URL.createObjectURL(e.target.files[0]);
      setFile(e.target.files[0]);
      setProfilePhoto(image);
      setPhotoURL(image);
      setOpenCrop(true);
    }
  };

  const onNormalInputChange = (e, index) => {
    if (
      e.target.name === "academic_about" ||
      e.target.name === "academic_head"
    ) {
      setOtherField((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      const inputarr = [...academiCalendar];
      for (let inp = 0; inp < inputarr?.length; inp++) {
        if (inp === index) {
          inputarr[inp][e.target.name] = e.target.value;
        }
      }
      setAcademiCalendar(inputarr);
    }
  };

  const onSuggestionInputChange = (e, index) => {
    setSuggestion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    const inputarr = [...suggestion];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp][e.target.name] = e.target.value;
      }
    }
    setSuggestion(inputarr);
  };

  const onUpload = (file) => {
    if (file) {
      setDisabled((pre) => !pre);

      const formData = new FormData();
      formData.append("file", file);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            setOtherField((prev) => ({
              ...prev,
              academic_photo: res.data?.imageKey,
            }));
          }
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  useEffect(() => {
    if (upload) {
      onUpload(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const onAddMember = (fieldName) => {
    setFieldName(fieldName);
    setAcademiCalendar([
      ...otherField[fieldName],
      { calendar_name: "", calendar: [], name: "", file: [] },
    ]);
  };

  const onUpdate = () => {
    setDisabled((pre) => !pre);

    if (aid) {
      updateAcademicSiteInfoo({
        aid: aid,
        updateSiteInfo: {
          otherField,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      academicSiteInfoo({
        id: id,
        updateSiteInfo: {
          otherField,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.bgContainer}>
        <div className={style.container}>
          <div className={style.containerhead}>
            <h6>{t("academics_")}</h6>
            <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
          </div>

          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "1rem",
            }}
          />

          <div className={style.containercontent}>
            <div className={style.container_inner_content}>
              <h6 style={{ marginTop: "1.5rem" }}>{t("dean_academics")}</h6>
              <JoinFormTextArea
                labelText={t("about_dean_academics")}
                placeholder={t("about_dean_academics_placeholder")}
                name={"academic_about"}
                value={otherField.academic_about}
                type={"text"}
                onChange={onNormalInputChange}
                customStyleContainer={{
                  width: "100%",
                }}
              />

              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormSelect
                  selectLabel={t("select_dean_academic")}
                  selectedValue={t("select_dean_placeholder")}
                  value={otherField.academic_head}
                  name={"academic_head"}
                  onChange={onNormalInputChange}
                  options={assignSearchStaff?.staff}
                  openAs="academicSiteInfo"
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />

                <JoinFormFileEdit
                  labelText={t("academic_photo")}
                  name={"academic_photo"}
                  value={otherField.academic_photo}
                  onChange={onFileUpload}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
              </div>

              <h6 style={{ marginTop: "1.5rem" }}>{t("academic_calendar")}</h6>
              <div className={style.add_contact_person}>
                {otherField?.academic_calendar?.map((calendar, index) => (
                  <div
                    className={style.show_field}
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    <JoinFormTextArea
                      labelText={t("calendar_name")}
                      placeholder={t("calendar_name_placeholder")}
                      name={"calendar_name"}
                      value={calendar.calendar_name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "48%",
                      }}
                    />

                    <JoinFormFilee
                      acceptType="application/pdf"
                      labelText={t("calendar_file")}
                      index={index}
                      multiple={false}
                      onChange={(e) => onBookPdf(e, index)}
                      errorShow={false}
                      customStyleContainer={{
                        width: "48%",
                      }}
                      name={"calendar"}
                      labelname={`academic_calendar_${index}`}
                      value={
                        Object.keys(calendar?.calendar).length > 0
                          ? {
                              originalName: calendar?.calendar?.documentName,
                              key: calendar?.calendar?.documentKey,
                              isPdf: true,
                            }
                          : ""
                      }
                    />

                    {/* <JoinFormFileEdit
                    acceptType="application/pdf"
                    labelText={t("calendar_file")}
                    name={"calendar"}
                    value={
                      Object.keys(calendar?.calendar).length > 0
                        ? {
                            originalName: calendar?.calendar?.documentName,
                            key: calendar?.calendar?.documentKey,
                            isPdf: true,
                          }
                        : ""
                    }
                    // multiple={true}
                    onChange={(e) => onBookPdf(e, index)}
                    customStyleContainer={{
                      width: "48%",
                    }}
                    errorShow={false}
                  /> */}
                  </div>
                ))}
              </div>
              <button
                className={style.add_contact_person_btn}
                title="Add Calendar"
                onClick={() => onAddMember("academic_calendar")}
              >
                {t("add_calendar")}
              </button>

              {academicFiles?.map((file, index) => (
                <>
                  <h6 style={{ marginTop: "1.5rem" }}>
                    {t(`${file?.fileheading}`)}
                  </h6>
                  <div className={style.add_contact_person}>
                    {otherField[`${file?.filename}`].map((calendar, index) => (
                      <div
                        className={style.show_field}
                        style={{
                          alignItems: "flex-start",
                        }}
                      >
                        <JoinFormTextArea
                          labelText={t("file_name")}
                          placeholder={t("enter_file_name")}
                          name={"name"}
                          value={calendar.name}
                          type={"text"}
                          onChange={(e) => onNormalInputChange(e, index)}
                          customStyleContainer={{
                            width: "48%",
                          }}
                        />

                        <JoinFormFilee
                          acceptType="application/pdf"
                          labelText={t("file")}
                          index={index}
                          multiple={false}
                          onChange={(e) => onBookPdf(e, index)}
                          errorShow={false}
                          customStyleContainer={{
                            width: "48%",
                          }}
                          name={"file"}
                          labelname={`${file?.filename}_${index}`}
                          value={
                            Object.keys(calendar?.file).length > 0
                              ? {
                                  originalName: calendar?.file?.documentName,
                                  key: calendar?.file?.documentKey,
                                  isPdf: true,
                                }
                              : ""
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className={style.add_contact_person_btn}
                    title="Add Rules"
                    onClick={() => onAddMember(`${file?.filename}`)}
                  >
                    {t("add_file")}
                  </button>
                </>
              ))}

              {/* <h6 style={{ marginTop: "1.5rem" }}>
                {t("dean_academic_rules")}
              </h6>
              <div className={style.add_contact_person}>
                {otherField?.academic_rules.map((calendar, index) => (
                  <div
                    className={style.show_field}
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    <JoinFormTextArea
                      labelText={t("file_name")}
                      placeholder={t("enter_file_name")}
                      name={"name"}
                      value={calendar.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "48%",
                      }}
                    />

                    <JoinFormFilee
                      acceptType="application/pdf"
                      labelText={t("file")}
                      index={index}
                      multiple={false}
                      onChange={(e) => onBookPdf(e, index)}
                      errorShow={false}
                      customStyleContainer={{
                        width: "48%",
                      }}
                      name={"file"}
                      labelname={`academic_rules_${index}`}
                      value={
                        Object.keys(calendar?.file).length > 0
                          ? {
                              originalName: calendar?.file?.documentName,
                              key: calendar?.file?.documentKey,
                              isPdf: true,
                            }
                          : ""
                      }
                    />
                  </div>
                ))}
              </div>
              <button
                className={style.add_contact_person_btn}
                title="Add Rules"
                onClick={() => onAddMember("academic_rules")}
              >
                {t("add_file")}
              </button> */}

              {/* <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("dean_academic_rules")}
                  name={"academic_rules"}
                  value={
                    Object.keys(otherField.academic_rules).length > 0
                      ? {
                          originalName: otherField.academic_rules?.documentName,
                          key: otherField.academic_rules?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div> */}

              {/* <h6 style={{ marginTop: "1.5rem" }}>{t("academic_mechanism")}</h6>

              <div className={style.add_contact_person}>
                {otherField?.academic_mechanism.map((calendar, index) => (
                  <div
                    className={style.show_field}
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    <JoinFormTextArea
                      labelText={t("file_name")}
                      placeholder={t("enter_file_name")}
                      name={"name"}
                      value={calendar.name}
                      type={"text"}
                      onChange={(e) => onNormalInputChange(e, index)}
                      customStyleContainer={{
                        width: "48%",
                      }}
                    />

                    <JoinFormFilee
                      acceptType="application/pdf"
                      labelText={t("file")}
                      index={index}
                      multiple={false}
                      onChange={(e) => onBookPdf(e, index)}
                      errorShow={false}
                      customStyleContainer={{
                        width: "48%",
                      }}
                      name={"file"}
                      labelname={`academic_mechanism_${index}`}
                      value={
                        Object.keys(calendar?.file).length > 0
                          ? {
                              originalName: calendar?.file?.documentName,
                              key: calendar?.file?.documentKey,
                              isPdf: true,
                            }
                          : ""
                      }
                    />
                  </div>
                ))}
              </div>
              <button
                className={style.add_contact_person_btn}
                title="Add Rules"
                onClick={() => onAddMember("academic_mechanism")}
              >
                {t("add_file")}
              </button> */}

              {/* <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_mechanism")}
                  name={"academic_mechanism"}
                  value={
                    Object.keys(otherField.academic_mechanism).length > 0
                      ? {
                          originalName:
                            otherField.academic_mechanism?.documentName,
                          key: otherField.academic_mechanism?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div> */}

              {/* <h6 style={{ marginTop: "1.5rem" }}>
                {t("academic_student_feedback")}
              </h6>

              <div className={style.add_contact_person}>
                {otherField?.academic_student_feedback.map(
                  (calendar, index) => (
                    <div
                      className={style.show_field}
                      style={{
                        alignItems: "flex-start",
                      }}
                    >
                      <JoinFormTextArea
                        labelText={t("file_name")}
                        placeholder={t("enter_file_name")}
                        name={"name"}
                        value={calendar.name}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "48%",
                        }}
                      />

                      <JoinFormFilee
                        acceptType="application/pdf"
                        labelText={t("file")}
                        index={index}
                        multiple={false}
                        onChange={(e) => onBookPdf(e, index)}
                        errorShow={false}
                        customStyleContainer={{
                          width: "48%",
                        }}
                        name={"file"}
                        labelname={`academic_student_feedback_${index}`}
                        value={
                          Object.keys(calendar?.file).length > 0
                            ? {
                                originalName: calendar?.file?.documentName,
                                key: calendar?.file?.documentKey,
                                isPdf: true,
                              }
                            : ""
                        }
                      />
                    </div>
                  )
                )}
              </div>
              <button
                className={style.add_contact_person_btn}
                title="Add Rules"
                onClick={() => onAddMember("academic_student_feedback")}
              >
                {t("add_file")}
              </button> */}
              {/* <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_student_feedback")}
                  name={"academic_student_feedback"}
                  value={
                    Object.keys(otherField.academic_student_feedback).length > 0
                      ? {
                          originalName:
                            otherField.academic_student_feedback?.documentName,
                          key: otherField.academic_student_feedback
                            ?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div> */}

              {/* <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_ict_faculty")}
                  name={"academic_ict_faculty"}
                  value={
                    Object.keys(otherField.academic_ict_faculty).length > 0
                      ? {
                          originalName:
                            otherField.academic_ict_faculty?.documentName,
                          key: otherField.academic_ict_faculty?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div>

              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_peer")}
                  name={"academic_peer"}
                  value={
                    Object.keys(otherField.academic_peer).length > 0
                      ? {
                          originalName: otherField.academic_peer?.documentName,
                          key: otherField.academic_peer?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div>
              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_development_courses")}
                  name={"academic_development_courses"}
                  value={
                    Object.keys(otherField.academic_development_courses)
                      .length > 0
                      ? {
                          originalName:
                            otherField.academic_development_courses
                              ?.documentName,
                          key: otherField.academic_development_courses
                            ?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div>
              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_results")}
                  name={"academic_results"}
                  value={
                    Object.keys(otherField.academic_results).length > 0
                      ? {
                          originalName:
                            otherField.academic_results?.documentName,
                          key: otherField.academic_results?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div>

              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_toppers")}
                  name={"academic_toppers"}
                  value={
                    Object.keys(otherField.academic_toppers).length > 0
                      ? {
                          originalName:
                            otherField.academic_toppers?.documentName,
                          key: otherField.academic_toppers?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div>

              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_student_survey")}
                  name={"academic_student_survey"}
                  value={
                    Object.keys(otherField.academic_student_survey).length > 0
                      ? {
                          originalName:
                            otherField.academic_student_survey?.documentName,
                          key: otherField.academic_student_survey?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div>

              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_annual_report")}
                  name={"academic_annual_report"}
                  value={
                    Object.keys(otherField.academic_annual_report).length > 0
                      ? {
                          originalName:
                            otherField.academic_annual_report?.documentName,
                          key: otherField.academic_annual_report?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div>

              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormFileEdit
                  acceptType="application/pdf"
                  labelText={t("academic_action_plan")}
                  name={"academic_action_plan"}
                  value={
                    Object.keys(otherField.academic_action_plan).length > 0
                      ? {
                          originalName:
                            otherField.academic_action_plan?.documentName,
                          key: otherField.academic_action_plan?.documentKey,
                          isPdf: true,
                        }
                      : ""
                  }
                  onChange={onBookPdf}
                  multiple={true}
                  customStyleContainer={{
                    width: "96%",
                  }}
                  errorShow={false}
                />
              </div> */}

              <h6 style={{ marginTop: "1.5rem" }}>
                {t("suggestion_feedback")}
              </h6>

              {suggestion.map((sug, index) => (
                <>
                  <div
                    className={style.show_field}
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    <JoinFormInput
                      labelText={t("name")}
                      placeholder={t("enter_name")}
                      name={"name"}
                      value={sug?.name}
                      type={"text"}
                      onChange={(e) => onSuggestionInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormSelect
                      selectLabel={t("type_of_stake")}
                      selectedValue={t("type_of_stake")}
                      value={sug.stake_type}
                      name={"stake_type"}
                      onChange={(e) => onSuggestionInputChange(e, index)}
                      options={stakeType}
                      optionsValue={stakeTypeValue}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div
                    className={style.show_field}
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    <JoinFormInput
                      labelText={t("email")}
                      placeholder={t("email_id_details")}
                      name={"email"}
                      value={sug?.email}
                      type={"email"}
                      onChange={(e) => onSuggestionInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />

                    <JoinFormInput
                      labelText={t("mobile_bumber")}
                      placeholder={t("enter_mobile_number")}
                      name={"phone_number"}
                      value={sug?.phone_number}
                      type={"text"}
                      onChange={(e) => onSuggestionInputChange(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>

                  <div
                    className={style.show_field}
                    style={{
                      alignItems: "flex-start",
                    }}
                  >
                    <JoinFormTextArea
                      labelText={t("complaint")}
                      placeholder={t("enter_complaint")}
                      name={"compliant"}
                      value={sug.compliant}
                      type={"text"}
                      onChange={(e) => onSuggestionInputChange(e, index)}
                      customStyleContainer={{
                        width: "100%",
                      }}
                    />
                  </div>
                </>
              ))}
            </div>
            <button className={style.update_btn} onClick={onUpdate}>
              {aid ? t("update") : t("add")}
            </button>
          </div>
        </div>
      </div>
      {disabled && <QLoader />}
      <Dialog open={openCrop}>
        <Crop
          setPhotoURL={setPhotoURL}
          photoURL={photoURL}
          setFile={setFile}
          setOpenCrop={setOpenCrop}
          setUpload={setUpload}
          setProfilePhoto={setProfilePhoto}
          first={1}
          second={1}
        />
      </Dialog>
    </>
  );
}

export default AcademicSiteInfo;
