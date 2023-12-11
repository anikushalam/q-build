import React, { useEffect, useState } from "react";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import JoinFormTextArea from "../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../Loader/QLoader";
import { useStudentBonafide } from "../../../../hooks/institute/institute-staff-student-api";
import style from "../FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import { useOneInstituteProfile } from "../../../../hooks/dashboard/dashboard-api";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import { studentModifyBonafideData } from "../../../../pdf/function/pdf-convertor-function";
import { useFileUpload } from "../../../../hooks/authentication-api";
import { useCertificateAuthorityAction } from "../../../../hooks/member_tab/department-api";

const BonafideReason = ({
  onClose,
  uniqueGr,
  instituteId,
  isViewBy,
  commingReason,
  certificateId,
  onRefetch,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [authority, setAuthority] = useState("");
  const [letterHead, setLetterHead] = useState(false);
  const [studentBonafide] = useStudentBonafide();
  const [oneFileUpload] = useFileUpload();
  const [certificateAuthorityAction] = useCertificateAuthorityAction();

  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: instituteId,
        type: "ID",
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (instituteId) oneInstituteProfileRefetch();
  }, [instituteId, oneInstituteProfileRefetch]);
  useEffect(() => {
    if (isViewBy === "REQUEST_TAB") {
      setReason(commingReason ? commingReason : "");
    }
  }, [commingReason, isViewBy]);

  const onInputChange = (e) => {
    if (e.target.value?.length <= 75) {
      setReason(e.target.value);
    }
  };
  const onInputChangeMessage = (e) => {
    if (e.target.value?.length <= 75) {
      setMessage(e.target.value);
    }
  };

  const onInputChangeAuthority = (e) => {
    if (e.target.value?.length <= 75) {
      setAuthority(e.target.value);
    }
  };

  const generateBonaPDF = (studentData) => {
    const { institute, studentInfo } = studentModifyBonafideData(
      oneInstituteProfile?.institute,
      studentData,
      {
        reason,
        message,
        authority,
        uniqueGr,
        letterHead,
      }
    );
    // console.info("studentInfo", studentInfo);
    const workerInstance = new Worker(
      new URL(
        "../../../../pdf/worker/main.certificate.pdf.worker.js",
        import.meta.url
      )
    );
    workerInstance.postMessage({
      printCertificateType: "BONAFIDE",
      studentInfo: studentInfo,
      institute: institute,
    });

    workerInstance.onmessage = (message) => {
      if (message && studentData?._id) {
        // window.open(message.data, "_blank");
        if (isViewBy === "REQUEST_TAB") {
          const formData = new FormData();
          formData.append("file", message.data);
          oneFileUpload({
            fileUpload: formData,
          })
            .then((res) => {
              certificateAuthorityAction({
                cid: certificateId,
                attach: res.data?.imageKey,
                status: "Issued",
              })
                .then(() => {
                  onRefetch();
                  setDisabled((pre) => !pre);
                  window.open(URL.createObjectURL(message.data), "_blank");
                })
                .catch({});
            })
            .catch({});
        } else {
          window.open(URL.createObjectURL(message.data), "_blank");

          setDisabled((pre) => !pre);
        }
        onClose();
      }
    };
  };
  const onAction = () => {
    if (uniqueGr && reason && instituteId) {
      // if (reason && instituteId) {
      setDisabled((pre) => !pre);
      studentBonafide({
        gr: uniqueGr,
        id: instituteId,
        bonafideReason: {
          reason: reason,
          student_bona_message: message,
        },
      })
        .then((res) => {
          if (res?.data?.student) {
            generateBonaPDF(res?.data?.student);
          }
        })
        .catch({});
    } else {
      if (!reason) setFilled(true);
    }
  };
  const onCloseModal = () => {
    if (disabled) {
    } else {
      onClose();
    }
  };

  const onLetterHead = () => {
    setLetterHead((pre) => !pre);
  };
  return (
    <>
      <PopupWrapper onClose={onCloseModal}>
        <div
          className={style.add_category_modal}
          style={{
            width: "30rem",
            minHeight: "10rem",
            height: "fit-content",
          }}
        >
          <section
            className={style.fee_middle_section_container}
            style={{ marginBottom: "1.2rem" }}
          >
            <h6
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {t("bonafide")}
            </h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.7rem",
              }}
            />
            <JoinFormTextArea
              labelText={t("enter_reason")}
              placeholder={t("enter_reason")}
              name={"reason"}
              value={reason}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled}
            />
            <JoinFormTextArea
              labelText={t("bonafide_message_optional")}
              placeholder={t("bonafide_message_optional_placeholder")}
              name={"message"}
              value={message}
              type={"text"}
              onChange={onInputChangeMessage}
            />
            <JoinFormInput
              labelText={t("competent_authority")}
              placeholder={t("competent_authority_lable")}
              name={"authority"}
              value={authority}
              type={"text"}
              onChange={onInputChangeAuthority}
            />

            <section className={style.letter_head_container}>
              {letterHead ? (
                <img
                  src="/images/checkbox-icon.svg"
                  alt="icon"
                  onClick={onLetterHead}
                />
              ) : (
                <img
                  src="/images/box-icon.svg"
                  alt="icon"
                  onClick={onLetterHead}
                />
              )}

              <h6>{t("printing_on_letter_head")}</h6>
            </section>

            <button
              onClick={onAction}
              className={style.fee_middle_confirm_button}
              style={{
                marginTop: "4rem",
              }}
            >
              {t("confirm")}
            </button>
          </section>
        </div>
        {disabled && <QLoader />}
      </PopupWrapper>
    </>
  );
};

export default BonafideReason;
