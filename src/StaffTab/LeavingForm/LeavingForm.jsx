import React, { useEffect, useState } from "react";
// import style from "../../JoiningForm/Student/Form/JoinForm.module.css";
import style from "./LeavingForm.module.css";
import { useTranslation } from "react-i18next";
import Crop from "../../ImageCrop/Crop";
import BorderBottom from "../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import {
  TextInput,
  ReadOnlyInput,
} from "../../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import SelectOptions from "./SelectOptions";
import { useSelector } from "react-redux";
import {
  useGetEditable,
  useStudentLeaving,
} from "../../hooks/institute/institute-staff-student-api";
import { Notfication } from "../../validation/Snackbar";
import CustomSuspense from "../../Custom/SuspenseLoading/CustomSuspense";
import { imageShowUrl, imageShowUrl1 } from "../../services/BaseUrl";
import { months } from "../../constant/constant_value";
// import DisabledButton from "../../Custom/Button/DisabledButton";
import pdfLeavingCertificate from "../../pdf/pdfLeavingCertificate";
import PdfTransferCertificate from "../../pdf/pdfTransferCertificate";
import { Dialog } from "@mui/material";
import { InputDateWithoutIcon } from "../../Custom/Input/InputDateField";
import DownloadToggle from "./DownloadToggle/DownloadToggle";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import JoinFormCalender from "../../JoiningForm/Student/Form/JoinFormCalender";
import converter from "number-to-words";
const CertificateModal = React.lazy(() =>
  import(
    "../StudentTab/MainContent/Certificates/CertificateModal/CertificateModal"
  )
);

function LeavingForm({
  student,
  setStudent,
  download,
  setDownload,
  setLeavingForm,
  toggle,
  setToggle,
  instituteId,
  viewAs,
  certificatestatus,
}) {
  const { t } = useTranslation();
  const params = useParams();
  const id = useSelector((state) => state.idChange.id);
  const [open, setOpen] = useState({
    caste: false,
    nationality: false,
    religon: false,
    progress: false,
    behaviour: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [addDisplay, setAddDisplay] = useState(false);
  const [file, setFile] = useState("");
  const [dateInput, setDateInput] = useState();
  const [leavingdateInput, setLeavingDateInput] = useState();
  const [openCrop, setOpenCrop] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [studentLeaving] = useStudentLeaving();
  const { getEditable, getEditableRefetch } = useGetEditable({
    id: instituteId ? instituteId : id,
    skip: viewAs === "DESIGNATION_SIDE" ? !instituteId : !id,
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
    type: "",
  });

  const [leavingData, setLeavingData] = useState({
    number: student?.studentGRNO,
    insName: student?.institute?.insName,
    insAddress: student?.institute?.insAddress,
    insPhoneNumber: student?.institute?.insPhoneNumber,
    insState: student?.institute?.insState,
    insPincode: student?.institute?.insPincode,
    insAffiliated: student?.institute?.insAffiliated,
    leavingDate: student?.l_date
      ? student?.l_date?.split("T")[0]
      : `${new Date().toISOString()?.split("T")[0]?.split("-")[2]}-${
          new Date().toISOString()?.split("T")[0]?.split("-")[1]
        }-${new Date().toISOString()?.split("T")[0]?.split("-")[0]}`,
    studentGRNO: student?.studentGRNO,
    studentCertificateNo: student?.studentCertificateNo,
    studentFirstName: student?.studentFirstName,
    studentLastName: student?.studentLastName,
    studentMiddleName: student?.studentMiddleName,
    studentDOB: student?.studentDOB,
    reason: student?.studentLeavingReason,
    previous: student?.studentPreviousSchool,
    study: student?.studentLeavingStudy,
    behaviour: student?.studentLeavingBehaviour,
    remarks: "",
    bookNO: "",
    uidaiNumber: student?.studentUidaiNumber ? student?.studentUidaiNumber : "",
    caste: student?.studentCast,
    religon: student?.studentReligion,
    identity: "",
    motherName: student?.studentMotherName,
    motherTounge: student?.studentMTongue,
    castCategory: student?.studentCastCategory,
    nationality: student?.studentNationality,
    joiningDate: student?.studentAdmissionDate
      ? `${student?.studentAdmissionDate?.split("T")[0]?.split("-")[2]}-${
          student?.studentAdmissionDate?.split("T")[0]?.split("-")[1]
        }-${student?.studentAdmissionDate?.split("T")[0]?.split("-")[0]}`
      : "",
    birthPlace: student?.studentBirthPlace,
    courseDuration: "",
    studyingIn: `${student?.studentClass?.className} - ${student?.studentClass?.classTitle}`,
    affiliation: getEditable?.detail?.insAffiliated,
  });
  const [formErrors, setFormErrors] = useState({});
  const [focusData, setFocusData] = useState({
    number: false,
    insName: false,
    insAddress: false,
    insPhoneNumber: false,
    insState: false,
    insPincode: false,
    insAffiliated: false,
    leavingDate: false,
    studentGRNO: false,
    studentCertificateNo: false,
    studentFirstName: false,
    studentLastName: false,
    studentMiddleName: false,
    studentDOB: false,

    reason: false,
    previous: false,
    study: false,
    behaviour: false,
    remarks: false,
    bookNO: false,
    uidaiNumber: false,
    caste: false,
    religon: false,
    identity: false,
    motherName: false,
    motherTounge: false,
    castCategory: false,
    nationality: false,
    joiningDate: false,
    birthPlace: false,
    studyingIn: false,
    affiliation: false,
  });

  useEffect(() => {
    setLeavingData((pre) => ({
      ...pre,
      number: student?.studentGRNO,
      insName: student?.institute?.insName,
      insAddress: student?.institute?.insAddress,
      insPhoneNumber: student?.institute?.insPhoneNumber,
      insState: student?.institute?.insState,
      insPincode: student?.institute?.insPincode,
      insAffiliated: student?.institute?.insAffiliated,

      studentGRNO: student?.studentGRNO,
      studentCertificateNo: student?.studentCertificateNo,
      studentFirstName: student?.studentFirstName,
      studentLastName: student?.studentLastName,
      studentMiddleName: student?.studentMiddleName,
      studentDOB: student?.studentDOB,
      reason: student?.studentLeavingReason,
      previous: student?.studentPreviousSchool,
      study: student?.studentLeavingStudy,
      behaviour: student?.studentLeavingBehaviour,
      remarks: "",
      bookNO: "",
      uidaiNumber: student?.studentUidaiNumber
        ? student?.studentUidaiNumber
        : "",
      caste: student?.studentCast,
      religon: student?.studentReligion,
      identity: "",
      motherName: student?.studentMotherName,
      motherTounge: student?.studentMTongue,
      castCategory: student?.studentCastCategory,
      nationality: student?.studentNationality,
      joiningDate: student?.studentAdmissionDate?.split("T")[0],
      birthPlace: student?.studentBirthPlace,

      studyingIn: `${student?.studentClass?.className} - ${student?.studentClass?.classTitle}`,
      affiliation: getEditable?.detail?.insAffiliated,
    }));
  }, [student, getEditable?.detail]);
  useEffect(() => {
    if ((id, instituteId)) getEditableRefetch();
  }, [id, instituteId, getEditableRefetch]);

  useEffect(() => {
    if (dateInput) {
      setLeavingData({ ...leavingData, joiningDate: dateInput });
    }
  }, [dateInput]);

  useEffect(() => {
    if (leavingdateInput) {
      setLeavingData({
        ...leavingData,
        leavingDate: leavingdateInput,
      });
    }
  }, [leavingdateInput]);

  const profileImgChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };

  const onLeavingHandler = () => {
    studentLeaving({
      id: instituteId ? instituteId : id,
      gr: leavingData.number,
      leavingFeedback: leavingData,
    })
      .then((res) => {
        setStudent(res.data.student);
        setDownload(res.data.download);
      })
      .catch({});
  };

  const onGoback = () => {
    setLeavingForm(false);
  };

  // const fig = leavingData?.studentDOB?.split("T")[0]?.split("-");

  const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join(" ");

  const generateLeavingPDF = () => {
    setFormErrors(validateForm(leavingData));
    setIsSubmit(true);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!leavingData.behaviour) {
      errors.behaviour = "Behaviour is required *";
    }
    if (!leavingData.birthPlace) {
      errors.birthPlace = "Birthplace is required *";
    }
    if (!leavingData.castCategory) {
      errors.castCategory = "Caste category is required *";
    }
    if (!leavingData.caste) {
      errors.caste = "Caste is required *";
    }
    if (!leavingData.joiningDate) {
      errors.joiningDate = "Joining date is required *";
    }
    if (!leavingData.motherName) {
      errors.motherName = "Mothername is required *";
    }
    if (!leavingData.motherTounge) {
      errors.motherTounge = "Mother tounge is required *";
    }
    if (!leavingData.nationality) {
      errors.nationality = "Nationality is required *";
    }
    if (!leavingData.previous) {
      errors.previous = "Previous institute is required *";
    }
    if (!leavingData.reason) {
      errors.reason = "Reason is required *";
    }
    if (!leavingData.religon) {
      errors.religon = "Religon is required *";
    }
    if (!leavingData.remarks) {
      errors.remarks = "Remark is required *";
    }
    if (!leavingData.study) {
      errors.study = "Study progress is required *";
    }
    if (!leavingData.studyingIn) {
      errors.studyingIn = "Studying info is required *";
    }
    if (!leavingData.studentDOB) {
      errors.studentDOB = " Bithdate is required *";
    }

    return errors;
  };

  useEffect(() => {
    setLeavingData({
      ...leavingData,
      joiningDate: `${
        student?.studentAdmissionDate?.split("T")[0]?.split("-")[2]
      }-${student?.studentAdmissionDate?.split("T")[0]?.split("-")[1]}-${
        student?.studentAdmissionDate?.split("T")[0]?.split("-")[0]
      }`,
      uidaiNumber: student?.studentUidaiNumber,
    });
  }, []);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      if (
        !getEditable?.detail?.insAffiliated ||
        !getEditable?.detail?.insEditableText_one ||
        !getEditable?.detail?.insEditableText_two ||
        getEditable?.detail?.insAffiliated === "" ||
        getEditable?.detail?.insEditableText_one === "" ||
        getEditable?.detail?.insEditableText_two === ""
      ) {
        setNotificationState({
          msg: `Please enter institute affiliation text`,
          run: true,
          type: "error",
        });
      } else {
        const insLogo = student?.institute?.insProfilePhoto
          ? `${imageShowUrl1}/${student?.institute?.insProfilePhoto}`
          : "/images/certificate/logodemo.jpg";
        const affliatedImg = student?.institute?.affliatedLogo
          ? `${imageShowUrl1}/${student?.institute?.affliatedLogo}`
          : "/images/certificate/logodemo.jpg";
        const editableDataa = getEditable?.detail;
        const firstLCopy = student?.certificateLeavingCopy?.originalCopy;

        const rem = leavingData.remarks;

        if (certificatestatus === "leaving") {
          pdfLeavingCertificate(
            insLogo,
            affliatedImg,
            student,
            rem,
            editableDataa,
            firstLCopy,
            leavingData
          );
          onLeavingHandler();
          window.location.reload();
        } else if (certificatestatus === "transfer") {
          PdfTransferCertificate(
            insLogo,
            affliatedImg,
            student,
            rem,
            editableDataa,
            firstLCopy,
            leavingData
          );
          onLeavingHandler();
          window.location.reload();
        }
      }
    }
  }, [formErrors]);

  return (
    <div className={style.leaving_form_container}>
      <div className={style.goback_container} id="scrollView">
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>
      <div className={style.student_from_container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 className={style.student_from_fill}>
            Fill Certificate Form
            {student?.duplicate_copy === "Original Copy" ? (
              <span>({t("original_not_given")})</span>
            ) : (
              <span>({t("original_given")})</span>
            )}
          </h6>
          <img
            style={{
              height: "1.3rem",
              marginRight: "1rem",
              cursor: "pointer",
            }}
            src="/images/menu-dots-dark-icon.svg"
            alt=""
            onClick={() => setAddDisplay(true)}
          />
        </div>
        <BorderBottom customStyle={{ width: "100%" }} />

        <div className={style.formhead}>
          <div className={style.formheadrowflex}>
            <div className={style.formheadrowflexleft1}>
              {focusData.insName ? (
                <TextInput
                  type="text"
                  placeholder={t("institute_name")}
                  value={leavingData.insName}
                  handleChange={(e) =>
                    setLeavingData({ ...leavingData, insName: e.target.value })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("institute_name")}:   ${
                    student?.institute?.insName
                  }`}
                  handleClick={() =>
                    setFocusData({ ...focusData, insName: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}

              {focusData.insAddress ? (
                <TextInput
                  type="text"
                  placeholder={t("institute_address")}
                  value={leavingData.insAddress}
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      insAddress: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("institute_address")}:   ${
                    student?.institute?.insAddress
                  }`}
                  handleClick={() =>
                    setFocusData({ ...focusData, insAddress: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}

              <div className={style.formheadrowflexleft2}>
                <div className={style.flexItem30}>
                  {focusData.insPhoneNumber ? (
                    <TextInput
                      type="tel"
                      placeholder={t("contact_number")}
                      value={leavingData.insPhoneNumber}
                      handleChange={(e) =>
                        setLeavingData({
                          ...leavingData,
                          insPhoneNumber: e.target.value,
                        })
                      }
                      customStyleInput={{
                        width: "100%",
                        padding: "0.6rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                  ) : (
                    <ReadOnlyInput
                      value={`${t("contact_number")}:   ${
                        student?.institute?.insPhoneNumber
                      }`}
                      handleClick={() =>
                        setFocusData({ ...focusData, insPhoneNumber: true })
                      }
                      customStyleInput={{
                        width: "100%",
                        padding: "0.6rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                  )}
                </div>

                <div className={style.flexItem30}>
                  {focusData.insState ? (
                    <TextInput
                      type="text"
                      placeholder={t("state")}
                      value={leavingData.insState}
                      handleChange={(e) =>
                        setLeavingData({
                          ...leavingData,
                          insState: e.target.value,
                        })
                      }
                      customStyleInput={{
                        width: "100%",
                        padding: "0.6rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                  ) : (
                    <ReadOnlyInput
                      value={`${t("state")}:   ${leavingData.insState}`}
                      handleClick={() =>
                        setFocusData({ ...focusData, insState: true })
                      }
                      customStyleInput={{
                        width: "100%",
                        padding: "0.6rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                  )}
                </div>

                <div className={style.flexItem30}>
                  {focusData.insPincode ? (
                    <TextInput
                      type="text"
                      placeholder={t("pin_code")}
                      value={leavingData.insPincode}
                      handleChange={(e) =>
                        setLeavingData({
                          ...leavingData,
                          insPincode: e.target.value,
                        })
                      }
                      customStyleInput={{
                        width: "100%",
                        padding: "0.6rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                  ) : (
                    <ReadOnlyInput
                      value={`${t("pin_code")}:   ${
                        student?.institute?.insPincode
                      }`}
                      handleClick={() =>
                        setFocusData({ ...focusData, insPincode: true })
                      }
                      customStyleInput={{
                        width: "100%",
                        padding: "0.6rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            {student?.institute?.insProfilePhoto ? (
              <div className={style.profilephotocontainer}>
                <img
                  className={style.profilephotoins}
                  src={
                    student?.institute?.photoId === "0"
                      ? `${imageShowUrl}/${student?.institute?.insProfilePhoto}`
                      : "/images/ins_default_profile.svg"
                  }
                  alt="ChatAvatar"
                />
              </div>
            ) : (
              <div className={style.profilephotocontainer}>
                <label
                  htmlFor="profile"
                  className={style.profilephotocontainerr}
                >
                  <img
                    className={style.profilephotoins}
                    src={
                      profilePhoto
                        ? profilePhoto
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

                <input
                  type="file"
                  id="profile"
                  onChange={profileImgChange}
                  style={{ display: "none" }}
                />
              </div>
            )}
          </div>

          {getEditable?.detail?.insAffiliated &&
            getEditable?.detail?.insAffiliated !== "" &&
            getEditable?.detail?.insEditableText_one &&
            getEditable?.detail?.insEditableText_one !== "" &&
            getEditable?.detail?.insEditableText_two &&
            getEditable?.detail?.insEditableText_two !== "" && (
              <div>
                <ReadOnlyInput
                  value={`${t("aff_body")}  ${
                    getEditable?.detail?.insAffiliated
                  }`}
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />

                <ReadOnlyInput
                  value={`${t("ins_identity1")}  ${
                    getEditable?.detail?.insEditableText_one
                  }`}
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />

                <ReadOnlyInput
                  value={`${t("ins_identity2")}  ${
                    getEditable?.detail?.insEditableText_two
                  }`}
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              </div>
            )}
        </div>

        <div className={style.formbody}>
          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem25}>
              {focusData.studentGRNO ? (
                <TextInput
                  type="text"
                  placeholder={t("gr_no")}
                  value={leavingData.studentGRNO}
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      studentGRNO: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("gr_no")}:   ${leavingData?.studentGRNO}`}
                  handleClick={() =>
                    setFocusData({ ...focusData, studentGRNO: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
            </div>

            <div className={style.flexItem25}>
              <TextInput
                type="tel"
                placeholder={t("enter_book_no")}
                value={leavingData?.bookNO}
                handleChange={(e) =>
                  setLeavingData({ ...leavingData, bookNO: e.target.value })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.flexItem25}>
              {focusData.studentCertificateNo ? (
                <TextInput
                  type="number"
                  placeholder={t("certificate_no")}
                  value={leavingData?.studentCertificateNo}
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      studentCertificateNo: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("certificate_no")}:   ${
                    leavingData?.studentCertificateNo
                  }`}
                  handleClick={() =>
                    setFocusData({ ...focusData, studentCertificateNo: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
            </div>

            <div className={style.flexItem25}>
              {focusData?.uidaiNumber ? (
                <TextInput
                  type="tel"
                  placeholder={t("enter_udice")}
                  value={leavingData?.uidaiNumber}
                  maxLength="10"
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      uidaiNumber: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("udise_no")}:   ${leavingData?.uidaiNumber}`}
                  handleClick={() =>
                    setFocusData({ ...focusData, uidaiNumber: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
            </div>
          </div>

          <div className={style.certidyheading}>
            {certificatestatus === "leaving"
              ? t("leaving_certificates")
              : t("transfer_certificate")}
          </div>

          <ReadOnlyInput
            value={`${t("name")} : ${student?.studentFirstName} ${
              student?.studentMiddleName ? student?.studentMiddleName : ""
            }  ${student?.studentLastName}`}
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
              marginBottom: "0.5rem",
            }}
          />
          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem50}>
              {focusData.motherName ? (
                <TextInput
                  type="text"
                  maxLength="50"
                  placeholder={`${t("mother_name")}:`}
                  value={leavingData?.motherName}
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      motherName: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("mother_name")} : ${leavingData?.motherName} `}
                  handleClick={() =>
                    setFocusData({ ...focusData, motherName: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <p className={style.formError}>{formErrors.motherName}</p>
            </div>

            <div className={style.flexItem50}>
              {focusData?.motherTounge ? (
                <TextInput
                  type="text"
                  maxLength="17"
                  placeholder={`${t("mother_tongue")}:`}
                  value={leavingData?.motherTounge}
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      motherTounge: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("mother_tongue")} : ${
                    leavingData?.motherTounge ? leavingData?.motherTounge : ""
                  } `}
                  handleClick={() =>
                    setFocusData({ ...focusData, motherTounge: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <p className={style.formError}>{formErrors.motherTounge}</p>
            </div>
          </div>

          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem50}>
              {focusData.caste ? (
                <TextInput
                  type="text"
                  maxLength="17"
                  placeholder={`${t("cast")}:`}
                  value={leavingData?.caste}
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      caste: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("cast")} : ${
                    leavingData?.caste ? leavingData?.caste : ""
                  } `}
                  handleClick={() =>
                    setFocusData({ ...focusData, caste: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <p className={style.formError}>{formErrors.caste}</p>
            </div>
            <div className={style.flexItem50}>
              <div className={style.item}>
                <div
                  className={style.inputt}
                  style={{
                    position: "relative",
                  }}
                  onClick={() =>
                    setOpen({
                      ...open,
                      caste: !open.caste,
                      religon: false,
                      nationality: false,
                      progress: false,
                      behaviour: false,
                    })
                  }
                >
                  {!leavingData.castCategory ||
                  leavingData.castCategory === "" ? (
                    <p className={style.selectText}>{t("cast_category")}</p>
                  ) : (
                    <p className={style.selectTextActive}>
                      {leavingData.castCategory}
                    </p>
                  )}
                  {open.caste ? (
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

                  <SelectOptions
                    open={open.caste}
                    onClose={() => setOpen({ ...open, caste: false })}
                    leavingData={leavingData}
                    setleavingData={setLeavingData}
                    status="caste"
                  />
                </div>
              </div>
              <p className={style.formError}>{formErrors.castCategory}</p>
            </div>
          </div>

          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem50}>
              <div className={style.item}>
                <div
                  className={style.inputt}
                  style={{
                    position: "relative",
                  }}
                  onClick={() =>
                    setOpen({
                      ...open,
                      caste: false,
                      religon: false,
                      nationality: !open.nationality,
                      progress: false,
                      behaviour: false,
                    })
                  }
                >
                  {!leavingData.nationality ||
                  leavingData.nationality === "" ? (
                    <p className={style.selectText}>{`${t("nationality")}`}</p>
                  ) : (
                    <p className={style.selectTextActive}>
                      {leavingData.nationality}
                    </p>
                  )}
                  {open.nationality ? (
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

                  <SelectOptions
                    open={open.nationality}
                    onClose={() => setOpen({ ...open, nationality: false })}
                    leavingData={leavingData}
                    setleavingData={setLeavingData}
                    status="nationality"
                  />
                </div>
              </div>
              <p className={style.formError}>{formErrors.nationality}</p>
            </div>
            <div className={style.flexItem50}>
              <div className={style.item}>
                <div
                  className={style.inputt}
                  style={{
                    position: "relative",
                  }}
                  onClick={() =>
                    setOpen({
                      ...open,
                      caste: false,
                      religon: !open.religon,
                      nationality: false,
                      progress: false,
                      behaviour: false,
                    })
                  }
                >
                  {!leavingData.religon || leavingData.religon === "" ? (
                    <p className={style.selectText}>{`${t("religion")}`}</p>
                  ) : (
                    <p className={style.selectTextActive}>
                      {leavingData.religon}
                    </p>
                  )}
                  {open.religon ? (
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

                  <SelectOptions
                    open={open.religon}
                    onClose={() => setOpen({ ...open, religon: false })}
                    leavingData={leavingData}
                    setleavingData={setLeavingData}
                    status="religon"
                  />
                </div>
              </div>
              <p className={style.formError}>{formErrors.religon}</p>
            </div>
          </div>

          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem50}>
              {focusData.birthPlace ? (
                <TextInput
                  placeholder={`${t("birth_place")}:`}
                  value={leavingData.birthPlace}
                  maxLength="50"
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      birthPlace: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("birth_place")} : ${
                    student?.studentBirthPlace ? student?.studentBirthPlace : ""
                  }`}
                  handleClick={() =>
                    setFocusData({ ...focusData, birthPlace: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <p className={style.formError}>{formErrors.birthPlace}</p>
            </div>
            <div className={style.flexItem50}>
              <Link
                to={`/q/${params.username}/student/profile`}
                state={{ sid: student?._id, viewAs: "LEAVING_FORM" }}
              >
                <ReadOnlyInput
                  pointer={true}
                  value={`${t("applicable_remaining_fees")} : ${
                    student?.applicable_fees_pending
                  }`}
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                    color: "#2572CB",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </div>

          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem25}>
              {focusData?.studentDOB ? (
                // <TextInput
                //   placeholder={`${t("dob")}:`}
                //   value={leavingData?.studentDOB}
                //   handleChange={(e) =>
                //     setLeavingData({
                //       ...leavingData,
                //       studentDOB: e.target.value,
                //     })
                //   }
                //   customStyleInput={{
                //     width: "100%",
                //     padding: "0.6rem",
                //   }}
                // />
                <JoinFormCalender
                  labelText={""}
                  placeholder={`${t("dob")}:`}
                  name={"dob"}
                  value={`${t("dob")}: ${
                    leavingData?.studentDOB
                      ? leavingData?.studentDOB
                      : "yyyy-mm-dd"
                  }`}
                  onDateFunction={(value) => {
                    let splitDate = value?.split("/");
                    let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
                    setLeavingData({
                      ...leavingData,
                      studentDOB: dob,
                    });
                  }}
                  customStyleContainer={{
                    position: "relative",
                    // marginTop: "0.5rem",
                    height: "38px",
                  }}
                  customStyleInput={{
                    height: "38px",
                  }}
                  datePickerPosition={{
                    top: "-15rem",
                    left: "30%",
                  }}
                  customStyleCaledarIcon={{
                    bottom: "7px",
                  }}
                  customStyleLabel={{
                    marginTop: "7px",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("dob")} :  ${
                    student?.studentDOB?.split("T")[0]?.split("-")[2] ?? "dd"
                  }-${
                    student?.studentDOB?.split("T")[0]?.split("-")[1] ?? "mm"
                  }-${
                    student?.studentDOB?.split("T")[0]?.split("-")[0] ?? "yyyy"
                  }`}
                  handleClick={() =>
                    setFocusData({ ...focusData, studentDOB: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <p className={style.formError}>{formErrors.studentDOB}</p>
            </div>

            <div className={style.flexItem75}>
              <ReadOnlyInput
                value={
                  leavingData?.studentDOB
                    ? `${t("in_words")} : ${toPascalCase(
                        converter.toWords(
                          leavingData?.studentDOB
                            ?.split("T")[0]
                            ?.split("-")?.[2]
                        )
                      )}  ${
                        months[
                          leavingData?.studentDOB
                            ?.split("T")[0]
                            ?.split("-")?.[1] - 1
                        ]
                      } ${toPascalCase(
                        converter.toWords(
                          leavingData?.studentDOB
                            ?.split("T")[0]
                            ?.split("-")?.[0]
                        )
                      )}`
                    : `${t("in_words")}:`
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                  marginBottom: "0.5rem",
                }}
              />
            </div>
          </div>

          {focusData?.previous ? (
            <TextInput
              placeholder={`${t("prev_school_college")}:`}
              value={leavingData.previous}
              maxLength="50"
              handleChange={(e) =>
                setLeavingData({ ...leavingData, previous: e.target.value })
              }
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
                marginBottom: "0.5rem",
              }}
            />
          ) : (
            <ReadOnlyInput
              value={`${t("prev_school")} : ${
                leavingData.previous ? leavingData.previous : ""
              }`}
              handleClick={() => setFocusData({ ...focusData, previous: true })}
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
                marginBottom: "0.5rem",
              }}
            />
          )}
          <p className={style.formError}>{formErrors.previous}</p>

          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem50}>
              {focusData?.joiningDate ? (
                <InputDateWithoutIcon
                  customStyleInput={{
                    width: "100%",
                    height: "2.2rem",
                    padding: "1rem 0.5rem",
                  }}
                  datePickerPosition={{
                    top: "-17rem",
                    left: "1rem",
                    borderRadius: "0.375rem",
                    paddingBottom: "0",
                  }}
                  dateItemStyle={{
                    padding: "0.25rem",
                  }}
                  iconStyle={{
                    position: "absolute",
                    right: "0.9rem",
                    top: "0.5rem",
                    height: "1rem",
                  }}
                  range={false}
                  placeholder={t("joining_date")}
                  dateInput={dateInput}
                  setDateInput={setDateInput}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("joining_date")} : ${leavingData?.joiningDate}`}
                  handleClick={() =>
                    setFocusData({ ...focusData, joiningDate: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <p className={style.formError}>{formErrors.joiningDate}</p>
            </div>
            <div className={style.flexItem50}>
              {focusData?.studyingIn ? (
                <TextInput
                  placeholder={`${t("was_studying_in")}:`}
                  value={leavingData.studyingIn}
                  handleChange={(e) =>
                    setLeavingData({
                      ...leavingData,
                      studyingIn: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              ) : (
                <ReadOnlyInput
                  value={`${t("was_studying_in")} : ${
                    student?.studentClass?.className
                  } - ${student?.studentClass?.classTitle}`}
                  handleClick={() =>
                    setFocusData({ ...focusData, studyingIn: true })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <p className={style.formError}>{formErrors.studyingIn}</p>
            </div>
          </div>

          <div className={style.formheadrowflexleft2}>
            <div className={style.flexItem50}>
              <div className={style.item}>
                <div
                  className={style.inputt}
                  style={{
                    position: "relative",
                  }}
                  onClick={() =>
                    setOpen({
                      ...open,
                      caste: false,
                      religon: false,
                      nationality: false,
                      progress: !open.progress,
                      behaviour: false,
                    })
                  }
                >
                  {!leavingData.study || leavingData.study === "" ? (
                    <p className={style.selectText}>{t("study_progress")}</p>
                  ) : (
                    <p className={style.selectTextActive}>
                      {leavingData.study}
                    </p>
                  )}
                  {open.progress ? (
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

                  <SelectOptions
                    open={open.progress}
                    onClose={() => setOpen({ ...open, progress: false })}
                    leavingData={leavingData}
                    setleavingData={setLeavingData}
                    status="progress"
                  />
                </div>
              </div>
              <p className={style.formError}>{formErrors.study}</p>
            </div>
            <div className={style.flexItem50}>
              <div className={style.item}>
                <div
                  className={style.inputt}
                  style={{
                    position: "relative",
                  }}
                  onClick={() =>
                    setOpen({
                      ...open,
                      caste: false,
                      religon: false,
                      nationality: false,
                      progress: false,
                      behaviour: !open.behaviour,
                    })
                  }
                >
                  {!leavingData.behaviour || leavingData.behaviour === "" ? (
                    <p className={style.selectText}>{t("behaviour")}</p>
                  ) : (
                    <p className={style.selectTextActive}>
                      {leavingData.behaviour}
                    </p>
                  )}
                  {open.behaviour ? (
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

                  <SelectOptions
                    open={open.behaviour}
                    onClose={() => setOpen({ ...open, behaviour: false })}
                    leavingData={leavingData}
                    setleavingData={setLeavingData}
                    status="behaviour"
                  />
                </div>
              </div>
              <p className={style.formError}>{formErrors.behaviour}</p>
            </div>
          </div>

          {focusData.reason ? (
            <TextInput
              maxLength="50"
              placeholder={`${t("reason_for_leaving")}:`}
              value={leavingData.reason}
              handleChange={(e) =>
                setLeavingData({ ...leavingData, reason: e.target.value })
              }
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
                marginBottom: "0.5rem",
              }}
            />
          ) : (
            <ReadOnlyInput
              value={`${t("reason_for_leaving")} : ${
                student?.studentLeavingReason
                  ? student?.studentLeavingReason
                  : ""
              }`}
              handleClick={() => setFocusData({ ...focusData, reason: true })}
              customStyleInput={{
                width: "100%",
                padding: "0.6rem",
                marginBottom: "0.5rem",
              }}
            />
          )}
          <p className={style.formError}>{formErrors.reason}</p>

          <TextInput
            maxLength="50"
            placeholder={`${t("remarks")}:`}
            value={leavingData.remarks}
            handleChange={(e) =>
              setLeavingData({ ...leavingData, remarks: e.target.value })
            }
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
              marginBottom: "0.5rem",
            }}
          />
          <p className={style.formError}>{formErrors.remarks}</p>
        </div>

        <div className={style.buttoncontainer}>
          <div className={style.buttonInner}>
            {student?.certificateLeavingCopy?.originalCopy ? (
              <div
                className={style.button_main}
                style={{
                  marginTop: "1.5vw",
                  width: "100%",
                  cursor: "pointer",
                  backgroundColor: "#4CAF50",
                }}
                onClick={() => setIsOpen(true)}
              >
                <span>{t("original_copy")}</span>
              </div>
            ) : (
              <div
                className={style.button_main}
                style={{
                  marginTop: "1.5vw",
                  width: "100%",
                  cursor: "pointer",
                  backgroundColor: "rgb(228, 72, 121)",
                }}
                onClick={() => setIsOpen(true)}
              >
                <span>{t("duplicate_copy")}</span>
              </div>
            )}
          </div>
          <div className={style.buttonInner}>
            <div
              className={style.button_main}
              style={{
                marginTop: "1.5vw",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={generateLeavingPDF}
            >
              <span>{t("download_certificate")}</span>
            </div>
          </div>
        </div>
      </div>

      {addDisplay && (
        <CustomSuspense>
          <CertificateModal
            hideModal={(w) => {
              setAddDisplay(w);
              getEditableRefetch();
            }}
            addDisplay={addDisplay}
            editableData={getEditable?.detail}
          />
        </CustomSuspense>
      )}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />

      {isOpen && (
        <DownloadToggle
          toggle={toggle}
          setStudent={setStudent}
          setToggle={setToggle}
          open={isOpen}
          hideModal={(w) => setIsOpen(w)}
          insId={student?.institute?._id}
        />
      )}

      {openCrop && (
        <Dialog open={openCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setOpenCrop={setOpenCrop}
            setProfilePhoto={setProfilePhoto}
          />
        </Dialog>
      )}
    </div>
  );
}

export default LeavingForm;

// student?.studentPreviousSchool
