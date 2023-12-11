import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "../../../../JoiningForm/Student/Form/JoinForm.module.css";
import {
  casteCategoryKey,
  casteCategoryValue,
  months,
  nationalityKey,
  nationalityValue,
  religionKey,
  religionValue,
} from "../../../../constant/constant_value";
import JoinFormSelect from "../../../../JoiningForm/Student/Form/JoinFormSelect";
import { withCurrentDate } from "../../../../Functions/timeComparison/timeComparison";
import JoinFormCalender from "../../../../JoiningForm/Student/Form/JoinFormCalender";
import moment from "moment";
import DownloadToggle from "../../../../StaffTab/LeavingForm/DownloadToggle/DownloadToggle";
import { studentModifyLeavingData } from "../../../../pdf/function/pdf-convertor-function";
import QLoader from "../../../../Loader/QLoader";
import { useFileUpload } from "../../../../hooks/authentication-api";
import { useCertificateAuthorityAction } from "../../../../hooks/member_tab/department-api";
import converter from "number-to-words";
const leavingState = {
  insName: "",
  insPhoneNumber: "",
  insAddress: "",
  insEmail: "",
  insAffiliated: "",
  insEditableText_one: "",
  insEditableText_two: "",
  affiliatedImage: "",
  insProfilePhoto: "",

  studentGRNO: "",
  studentCertificateNo: "",
  bookNo: "",
  studentUidaiNumber: "",

  name: "",
  studentMotherName: "",
  studentMTongue: "",
  studentCast: "",
  studentCastCategory: "",
  studentNationality: "",
  studentReligion: "",
  studentBirthPlace: "",
  studentDOB: "",
  studentPreviousSchool: "",
  studentLeavingBehaviour: "",
  studentLeavingStudy: "",
  studentLeavingReason: "",
  studentRemark: "",

  instituteJoinDate: "",
  instituteLeavingDate: "",
  courseDuration: "",
  studentClassName: "",
  authority: "",
};
const toPascalCase = (str) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join(" ");

const StudentLeavingCertificateForm = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOrigin, setIsOrigin] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [certificateAuthorityAction] = useCertificateAuthorityAction();
  const [letterHead, setLetterHead] = useState(false);

  const [state, setState] = useState(leavingState);

  useEffect(() => {
    if (getQuery.state?.student) {
      setState((prev) => ({
        ...prev,
        insName: getQuery.state?.student?.institute?.insName ?? "",
        insPhoneNumber:
          getQuery.state?.student?.institute?.insPhoneNumber ?? "",
        insAddress: getQuery.state?.student?.institute?.insAddress ?? "",
        insEmail: getQuery.state?.student?.institute?.insEmail ?? "",
        insAffiliated: getQuery.state?.student?.institute?.insAffiliated ?? "",
        insEditableText_one:
          getQuery.state?.student?.institute?.insEditableText_one ?? "",
        insEditableText_two:
          getQuery.state?.student?.institute?.insEditableText_two ?? "",
        affiliatedImage:
          getQuery.state?.student?.institute?.affliatedLogo ?? "",
        insProfilePhoto:
          getQuery.state?.student?.institute?.insProfilePhoto ?? "",
        studentGRNO: getQuery.state?.student?.studentGRNO ?? "",
        bookNo: getQuery.state?.student?.bookNo ?? "",
        studentCertificateNo:
          getQuery.state?.student?.studentCertificateNo ?? "",
        studentUidaiNumber: getQuery.state?.student?.studentUidaiNumber ?? "",

        name: `${getQuery.state?.student?.studentFirstName ?? ""} ${
          getQuery.state?.student?.studentMiddleName ?? ""
        } ${getQuery.state?.student?.studentLastName}`,
        studentMotherName: getQuery.state?.student?.studentMotherName ?? "",
        studentMTongue: getQuery.state?.student?.studentMTongue ?? "",
        studentCast: getQuery.state?.student?.studentCast ?? "",
        studentCastCategory: getQuery.state?.student?.studentCastCategory ?? "",
        studentNationality: getQuery.state?.student?.studentNationality ?? "",
        studentReligion: getQuery.state?.student?.studentReligion ?? "",
        studentBirthPlace: getQuery.state?.student?.studentBirthPlace ?? "",
        studentDOB: getQuery.state?.student?.studentDOB ?? "",
        studentPreviousSchool:
          getQuery.state?.student?.studentPreviousSchool ?? "",
        studentLeavingBehaviour:
          getQuery.state?.student?.studentLeavingBehaviour ?? "",
        studentLeavingStudy: getQuery.state?.student?.studentLeavingStudy ?? "",
        studentLeavingReason:
          getQuery.state?.student?.studentLeavingReason ?? "",

        instituteJoinDate: moment(
          getQuery.state?.student?.studentAdmissionDate
        ).format("yyyy-mm-DD"),
        // instituteLeavingDate: moment().format("yyyy-mm-DD"),
        courseDuration: "",
        studentClassName:
          `${getQuery.state?.student?.studentClass?.className ?? ""} - ${
            getQuery.state?.student?.studentClass?.classTitle ?? ""
          }` ?? "",
        authority: "",
      }));
      setIsOrigin(
        getQuery.state?.student?.certificateLeavingCopy?.originalCopy
      );
    }
  }, [getQuery.state?.student]);

  const onToggleMenu = () => {
    setOpenMenu((pre) => !pre);
  };

  const onInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onDateFunction = (val) => {
    const dobCorrect = withCurrentDate(val);
    if (dobCorrect) {
      let splitDate = val?.split("/");
      let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      setState((prevState) => ({
        ...prevState,
        studentDOB: dob,
      }));
    } else {
      // setNotificationState({
      //   msg: `You cannot select upcoming date ${val}`,
      //   run: true,
      // });
    }
  };
  const onJoinDateFunction = (val) => {
    if (val) {
      let splitDate = val?.split("/");
      let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      setState((prevState) => ({
        ...prevState,
        instituteJoinDate: dob,
      }));
    }
  };

  // console.info("getQuery.state", getQuery.state);
  const generateLeavingPDF = () => {
    setDisabled((pre) => !pre);

    const { institute, studentInfo } = studentModifyLeavingData(state, {
      isOriginal: isOrigin,
      is_leaving: getQuery.state?.is_leaving,
      letterHead,
    });
    // console.info("studentInfo", studentInfo);
    const workerInstance = new Worker(
      new URL(
        "../../../../pdf/worker/main.certificate.pdf.worker.js",
        import.meta.url
      )
    );
    workerInstance.postMessage({
      printCertificateType: "LEAVING",
      studentInfo: studentInfo,
      institute: institute,
    });

    workerInstance.onmessage = (message) => {
      if (message) {
        if (getQuery.state?.isViewBy === "REQUEST_TAB") {
          const formData = new FormData();
          formData.append("file", message.data);
          oneFileUpload({
            fileUpload: formData,
          })
            .then((res) => {
              certificateAuthorityAction({
                cid: getQuery.state?.certificateId,
                attach: res.data?.imageKey,
                status: "Issued",
              })
                .then(() => {
                  setDisabled((pre) => !pre);
                  navigate(-1);
                  window.open(URL.createObjectURL(message.data), "_blank");
                })
                .catch({});
            })
            .catch({});
        } else {
          window.open(URL.createObjectURL(message.data), "_blank");

          // window.open(message.data, "_blank");
          setDisabled((pre) => !pre);
        }
      }
    };
  };

  const onLetterHead = () => {
    setLetterHead((pre) => !pre);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h6 className={style.student_from_fill}>
          {t("fill_certificate_form")}
          {getQuery.state?.student?.duplicate_copy === "Original Copy" ? (
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
          onClick={onToggleMenu}
        />
      </div>
      <BorderBottom customStyle={{ width: "100%" }} />
      <div
        className={style.form_profile_info}
        style={{
          paddingInline: "1rem",
        }}
      >
        <div
          style={{
            width: "88%",
          }}
        >
          <JoinFormInput
            labelText={t("institute_name")}
            placeholder={t("institute_name")}
            name={"insName"}
            value={state.insName}
            type={"text"}
            onChange={onInputChange}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
          <JoinFormInput
            labelText={t("institute_address")}
            placeholder={t("institute_address")}
            name={"insAddress"}
            value={state.insAddress}
            type={"text"}
            onChange={onInputChange}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
          <div className={style.form_profile_info}>
            <JoinFormInput
              labelText={t("contact_number")}
              placeholder={t("contact_number")}
              name={"insPhoneNumber"}
              value={state.insPhoneNumber}
              type={"tel"}
              onChange={onInputChange}
              customStyleLabel={{
                marginTop: "7px",
                marginBottom: "4px",
              }}
              customStyleInput={{
                outline: "none",
              }}
            />
            <JoinFormInput
              labelText={t("email")}
              placeholder={t("email")}
              name={"insEmail"}
              value={state.insEmail}
              type={"text"}
              onChange={onInputChange}
              customStyleLabel={{
                marginTop: "7px",
                marginBottom: "4px",
              }}
              customStyleInput={{
                outline: "none",
              }}
            />
          </div>
        </div>
        <div className={style.profilephotocontainer}>
          <img
            className={style.profilephotoins}
            src={
              state.affiliatedImage
                ? `${imageShowUrl}/${state.affiliatedImage}`
                : "/images/ins_default_profile.svg"
            }
            alt="ChatAvatar"
          />
        </div>
      </div>
      <div
        style={{
          paddingInline: "1rem",
        }}
      >
        <JoinFormInput
          labelText={t("aff_body")}
          placeholder={t("aff_body")}
          name={"insAffiliated"}
          value={state.insAffiliated}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />

        <JoinFormInput
          labelText={t("ins_identity1")}
          placeholder={t("ins_identity1")}
          name={"insEditableText_one"}
          value={state.insEditableText_one}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <JoinFormInput
          labelText={t("ins_identity2")}
          placeholder={t("ins_identity2")}
          name={"insEditableText_two"}
          value={state.insEditableText_two}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
      </div>

      <BorderBottom customStyle={{ width: "100%", marginTop: "0.7rem" }} />
      <div
        className={style.form_profile_info}
        style={{
          paddingInline: "1rem",
        }}
      >
        <JoinFormInput
          labelText={t("gr_no")}
          placeholder={t("gr_no")}
          name={"studentGRNO"}
          value={state.studentGRNO}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <JoinFormInput
          labelText={t("enter_book_no")}
          placeholder={t("enter_book_no")}
          name={"bookNo"}
          value={state.bookNo}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <JoinFormInput
          labelText={t("certificate_no")}
          placeholder={t("certificate_no")}
          name={"studentCertificateNo"}
          value={state.studentCertificateNo}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <JoinFormInput
          labelText={t("enter_udice")}
          placeholder={t("enter_udice")}
          name={"studentUidaiNumber"}
          value={state.studentUidaiNumber}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
      </div>

      <div className={style.certidyheading}>
        {getQuery.state?.is_leaving === "leaving"
          ? t("leaving_certificates")
          : t("transfer_certificate")}
      </div>

      <div
        style={{
          paddingInline: "1rem",
        }}
      >
        <JoinFormInput
          labelText={t("name")}
          placeholder={t("name")}
          name={"name"}
          value={state.name}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <div className={style.form_profile_info}>
          <JoinFormInput
            labelText={t("mother_name")}
            placeholder={t("mother_name")}
            name={"studentMotherName"}
            value={state.studentMotherName}
            type={"text"}
            onChange={onInputChange}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
          <JoinFormInput
            labelText={t("mother_tongue")}
            placeholder={t("mother_tongue")}
            name={"studentMTongue"}
            value={state.studentMTongue}
            type={"text"}
            onChange={onInputChange}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
        </div>
        <div className={style.form_profile_info}>
          <JoinFormInput
            labelText={t("cast")}
            placeholder={t("cast")}
            name={"studentCast"}
            value={state.studentCast}
            type={"text"}
            onChange={onInputChange}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
          <JoinFormSelect
            selectLabel={t("cast_category")}
            selectedValue={t("cast_category")}
            value={state.studentCastCategory}
            name={"studentCastCategory"}
            onChange={onInputChange}
            options={casteCategoryKey}
            optionsValue={casteCategoryValue}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
        </div>
        <div className={style.form_profile_info}>
          <JoinFormSelect
            selectLabel={t("nationality")}
            selectedValue={t("nationality")}
            value={state.studentNationality}
            name={"studentNationality"}
            onChange={onInputChange}
            options={nationalityKey}
            optionsValue={nationalityValue}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />

          <JoinFormSelect
            selectLabel={t("religion")}
            selectedValue={t("religion")}
            value={state.studentReligion}
            name={"studentReligion"}
            onChange={onInputChange}
            options={religionKey}
            optionsValue={religionValue}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
        </div>
        <div className={style.form_profile_info}>
          <JoinFormInput
            labelText={t("birth_place")}
            placeholder={t("birth_place")}
            name={"studentBirthPlace"}
            value={state.studentBirthPlace}
            type={"text"}
            onChange={onInputChange}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
          <Link
            to={`/q/${params.username}/student/profile`}
            state={{
              sid: getQuery?.state?.student?._id,
              viewAs: "LEAVING_FORM",
            }}
          >
            <JoinFormInput
              labelText={t("applicable_remaining_fees")}
              name={"studentMotherName"}
              value={`${t("applicable_remaining_fees")} : ${
                getQuery.state?.student?.applicable_fees_pending
              }`}
              type={"text"}
              onChange={() => {}}
              customStyleLabel={{
                marginTop: "7px",
                marginBottom: "4px",
              }}
              customStyleInput={{
                outline: "none",
                color: "#2572CB",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
        <div className={style.form_profile_info}>
          <JoinFormCalender
            labelText={t("dob")}
            placeholder={t("dob")}
            name={"studentDOB"}
            value={state.studentDOB}
            onDateFunction={onDateFunction}
            customStyleContainer={{ position: "relative" }}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />

          <JoinFormInput
            labelText={t("in_words")}
            placeholder={t("in_words")}
            name={"studentDOBWork"}
            value={
              state.studentDOB
                ? `${toPascalCase(
                    converter.toWords(
                      state?.studentDOB?.split("T")[0]?.split("-")?.[2]
                    )
                  )}  ${
                    months[
                      state?.studentDOB?.split("T")[0]?.split("-")?.[1] - 1
                    ]
                  } ${toPascalCase(
                    converter.toWords(
                      state?.studentDOB?.split("T")[0]?.split("-")?.[0]
                    )
                  )}`
                : ""
            }
            type={"text"}
            onChange={() => {}}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
        </div>
        <JoinFormInput
          labelText={t("prev_school_college")}
          placeholder={t("prev_school_college")}
          name={"studentPreviousSchool"}
          value={state.studentPreviousSchool}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />

        <div className={style.form_profile_info}>
          <JoinFormCalender
            labelText={t("joining_date")}
            placeholder={t("joining_date")}
            name={"instituteJoinDate"}
            value={state.instituteJoinDate}
            onDateFunction={onJoinDateFunction}
            customStyleContainer={{ position: "relative" }}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
          <JoinFormInput
            labelText={t("was_studying_in")}
            placeholder={t("was_studying_in")}
            name={"studentClassName"}
            value={state.studentClassName}
            type={"text"}
            onChange={onInputChange}
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
        </div>
        <div className={style.form_profile_info}>
          <JoinFormSelect
            selectLabel={t("study_progress")}
            selectedValue={t("study_progress")}
            value={state.studentLeavingStudy}
            name={"studentLeavingStudy"}
            onChange={onInputChange}
            options={["Beginner", "Intermediate", "Advanced"]}
            isNotTranslation
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
          <JoinFormSelect
            selectLabel={t("behaviour")}
            selectedValue={t("behaviour")}
            value={state.studentLeavingBehaviour}
            name={"studentLeavingBehaviour"}
            onChange={onInputChange}
            options={["Excellent", "Very Good", "Good", "Bad", "Very Bad"]}
            isNotTranslation
            customStyleLabel={{
              marginTop: "7px",
              marginBottom: "4px",
            }}
            customStyleInput={{
              outline: "none",
            }}
          />
        </div>
        <JoinFormInput
          labelText={t("reason_for_leaving")}
          placeholder={t("reason_for_leaving")}
          name={"studentLeavingReason"}
          value={state.studentLeavingReason}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <JoinFormInput
          labelText={t("remarks")}
          placeholder={t("remarks")}
          name={"studentRemark"}
          value={state.studentRemark}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <JoinFormInput
          labelText={t("competent_authority")}
          placeholder={t("competent_authority_lable")}
          name={"authority"}
          value={state.authority}
          type={"text"}
          onChange={onInputChange}
          customStyleLabel={{
            marginTop: "7px",
            marginBottom: "4px",
          }}
          customStyleInput={{
            outline: "none",
          }}
        />
        <section className={style.letter_head_container}>
          {letterHead ? (
            <img
              src="/images/checkbox-icon.svg"
              alt="icon"
              onClick={onLetterHead}
            />
          ) : (
            <img src="/images/box-icon.svg" alt="icon" onClick={onLetterHead} />
          )}

          <h6>{t("printing_on_letter_head")}</h6>
        </section>
      </div>

      <div className={style.buttoncontainer}>
        <div className={style.buttonInner}>
          {isOrigin ? (
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
      {isOpen && (
        <DownloadToggle
          open={isOpen}
          hideModal={(w) => setIsOpen(w)}
          insId={getQuery.state?.student?.institute?._id}
          setIsOrigin={setIsOrigin}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default StudentLeavingCertificateForm;
