import React, { useState } from "react";
import style from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffProfile.module.css";
import { useTranslation } from "react-i18next";
import BonafideReason from "../../CertificateAuthority/BonafideReason";
import { useStudentLeaving } from "../../../../../hooks/institute/institute-staff-student-api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import QLoader from "../../../../../Loader/QLoader";
import SendFilterStudentMessage from "../../FinanceManager/AllStudent/SendFilterStudentMessage";

const StudentCertificateButton = ({ instituteId, uniqueGr }) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const getQuery = useLocation();
  const onActive = (value) => {
    setActiveStep(value);
  };
  const [studentLeaving] = useStudentLeaving();

  const onLeavingCertificate = (is_leaving) => {
    if (instituteId && uniqueGr) {
      setDisabled((pre) => !pre);
      studentLeaving({
        id: instituteId,
        gr: uniqueGr,
        leavingFeedback: {
          number: uniqueGr,
          reason: "",
          study: "",
          behaviour: "",
          remarks: "",
          udise: "",
        },
      })
        .then((res) => {
          setDisabled((pre) => !pre);
          if (is_leaving === "LEAVING") {
            navigate(`/q/${params.username}/student/certificate/form`, {
              state: {
                student: res.data.student,
                download: res.data.download,
                instituteId: instituteId,
                is_leaving: "leaving",
              },
            });
          } else {
            navigate(`/q/${params.username}/student/certificate/form`, {
              state: {
                student: res.data.student,
                download: res.data.download,
                instituteId: instituteId,
                is_leaving: "transfer",
              },
            });
          }
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.certificate_btn_container}>
        <button
          className={style.certificate_btn}
          onClick={() => onActive("BONAFIDE")}
        >
          {t("bonafide")}
        </button>
        <button
          className={style.certificate_btn}
          onClick={() => onLeavingCertificate("LEAVING")}
        >
          {t("leaving")}
        </button>
        <button
          className={style.certificate_btn}
          onClick={() => onLeavingCertificate("TRANSFER")}
        >
          {t("transfer_certificate")}
        </button>
        <button
          className={style.certificate_btn}
          onClick={() => onActive("STUDENT_MESSAGE")}
        >
          {t("student_message")}
        </button>
      </div>
      {activeStep === "BONAFIDE" && (
        <BonafideReason
          onClose={() => onActive("")}
          uniqueGr={uniqueGr}
          instituteId={instituteId}
        />
      )}
      {activeStep === "STUDENT_MESSAGE" && (
        <SendFilterStudentMessage
          onClose={() => onActive("")}
          isStudentProfile
          viewAs="CERTIFICATE_AUTHORITY"
          headId={getQuery.state?.headId}
          messageId={getQuery.state?.messageId}
          sendStudentList={getQuery.state?.sid}
          instituteId={instituteId}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default StudentCertificateButton;
