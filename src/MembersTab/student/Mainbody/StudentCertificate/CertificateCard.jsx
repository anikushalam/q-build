import React, { useState } from "react";
import style from "../../../../InstituteHostel/InstituteHostel.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { pdfShowUrlNext } from "../../../../services/BaseUrl";
import BonafideReason from "../../../staff/Mainbody/CertificateAuthority/BonafideReason";
import { useNavigate, useParams } from "react-router-dom";
import QLoader from "../../../../Loader/QLoader";
import { useStudentLeaving } from "../../../../hooks/institute/institute-staff-student-api";
const CertificateCard = ({ certificate, isViewBy, instituteId, onRefetch }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const [bonafide, setBonafide] = useState(false);
  const [studentLeaving] = useStudentLeaving();

  const onIssued = () => {
    if (isViewBy === "ISSUED") {
      if (certificate?.certificate_type === "Leaving") {
        setDisabled((pre) => !pre);
        studentLeaving({
          id: instituteId,
          gr: certificate?.student?.studentGRNO,
          leavingFeedback: {
            number: certificate?.student?.studentGRNO,
            reason: "",
            study: "",
            behaviour: "",
            remarks: "",
            udise: "",
          },
        })
          .then((res) => {
            setDisabled((pre) => !pre);
            navigate(`/q/${params.username}/student/certificate/form`, {
              state: {
                student: res.data.student,
                download: res.data.download,
                instituteId: instituteId,
                is_leaving: "leaving",
                isViewBy: "REQUEST_TAB",
                certificateId: certificate?._id,
              },
            });
          })
          .catch({});
      } else if (certificate?.certificate_type === "Transfer") {
        setDisabled((pre) => !pre);
        studentLeaving({
          id: instituteId,
          gr: certificate?.student?.studentGRNO,
          leavingFeedback: {
            number: certificate?.student?.studentGRNO,
            reason: "",
            study: "",
            behaviour: "",
            remarks: "",
            udise: "",
          },
        })
          .then((res) => {
            setDisabled((pre) => !pre);

            navigate(`/q/${params.username}/student/certificate/form`, {
              state: {
                student: res.data.student,
                download: res.data.download,
                instituteId: instituteId,
                is_leaving: "transfer",
                isViewBy: "REQUEST_TAB",
                certificateId: certificate?._id,
              },
            });
          })
          .catch({});
      } else if (certificate?.certificate_type === "Migration") {
      } else {
        setBonafide(true);
      }
    }
  };
  return (
    <>
      <div
        className={style.hostel_warden_card}
        style={{
          paddingBlock: "1rem",
        }}
      >
        <img
          alt="not found"
          src="/images/member_tab/student/student-certificate-icon.svg"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.student_cerfificate_container}>
          <div className={style.warden_card_text}>
            <h6>
              {t("certificate_type")} {" : "}
              {certificate?.certificate_type ?? ""}
            </h6>
            <p>
              {t("reason")} {" : "} {certificate?.query_content ?? ""}
            </p>
            {certificate?.certificate_type === "Bonafide" ? null : (
              <p>
                {t("certificate_copy")} {" : "}
                {certificate?.is_original
                  ? t("original_copy")
                  : t("dublicate_copy")}
              </p>
            )}

            <p>
              {t("raised_on")} {" : "}
              {moment(certificate?.created_at).format("DD-MM-yyyy")}
            </p>
          </div>
          {isViewBy === "ISSUED" ? (
            <div className={style.student_issued_btn} onClick={onIssued}>
              {t("issue_certificate")}
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <div
                className={style.warden_card_text}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                {isViewBy === "ALREADY_ISSUED" ? null : (
                  <p>
                    {t("status")} {" : "}
                    {certificate?.certificate_status ?? ""}
                  </p>
                )}
                {certificate?.certificate_issued_date ? (
                  <p>
                    {t("issued_on")} {" : "}
                    {moment(certificate?.certificate_issued_date).format(
                      "DD-MM-yyyy"
                    )}
                  </p>
                ) : null}
              </div>
              {certificate?.certificate_attach && (
                <a
                  href={`${pdfShowUrlNext}/${certificate?.certificate_attach}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <img
                    src="/images/member_tab/student/student-certificate-download-icon.svg"
                    alt="receipt icon"
                    style={{
                      height: "1.5rem",
                    }}
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {bonafide && (
        <BonafideReason
          onClose={() => setBonafide(false)}
          instituteId={instituteId}
          isViewBy="REQUEST_TAB"
          commingReason={certificate?.query_content}
          certificateId={certificate?._id}
          onRefetch={onRefetch}
          uniqueGr={certificate?.student?.studentGRNO ?? ""}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default CertificateCard;
