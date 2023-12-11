import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useOneInstituteProfile } from "../../../../../hooks/dashboard/dashboard-api";
import { useStudentBonafide } from "../../../../../hooks/institute/institute-staff-student-api";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { useTranslation } from "react-i18next";
import style from "../CertificateDetail.module.css";
import QLoader from "../../../../../Loader/QLoader";
import { studentModifyBonafideData } from "../../../../../pdf/function/pdf-convertor-function";
const BonaFide = ({ instituteId, viewAs }) => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const [disabled, setDisabled] = useState(false);
  const [disabled1, setDisabled1] = useState(false);
  const [student, setStudent] = useState("");
  const [grData, setGrData] = useState({
    number: "",
    reason: "",
    message: "",
  });
  const [authority, setAuthority] = useState("");
  const [studentBonafide] = useStudentBonafide();
  const [letterHead, setLetterHead] = useState(false);

  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: instituteId ? instituteId : id,
        type: "ID",
      },
      skip: viewAs === "DESIGNATION_SIDE" ? !instituteId : !id,
    });
  useEffect(() => {
    if ((id, instituteId)) oneInstituteProfileRefetch();
  }, [id, instituteId, oneInstituteProfileRefetch]);

  const onBonafideHandler = () => {
    setDisabled((pre) => !pre);
    studentBonafide({
      gr: grData.number,
      id: instituteId ? instituteId : id,
      bonafideReason: {
        reason: grData.reason,
        student_bona_message: grData.message,
      },
    })
      .then((res) => {
        setStudent(res?.data?.student);
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const generateBonaPDF = (studentData) => {
    const { institute, studentInfo } = studentModifyBonafideData(
      oneInstituteProfile?.institute,
      studentData,
      {
        reason: grData.reason,
        message: grData.message,
        authority,
        uniqueGr: grData.number,
        letterHead,
      }
    );

    // console.info("studentInfo", studentInfo);
    const workerInstance = new Worker(
      new URL(
        "../../../../../pdf/worker/main.certificate.pdf.worker.js",
        import.meta.url
      )
    );
    workerInstance.postMessage({
      printCertificateType: "BONAFIDE",
      studentInfo: studentInfo,
      institute: institute,
    });

    workerInstance.onmessage = (message) => {
      if (message) {
        window.open(URL.createObjectURL(message.data), "_blank");

        // window.open(message.data, "_blank");
        setDisabled1(false);
      }
    };
  };
  const onLetterHead = () => {
    setLetterHead((pre) => !pre);
  };
  return (
    <>
      <div className={style.complaintDetails}>
        <div className={style.detailsHeader}>{t("bonafide")}</div>
        <div className={style.detailsBody}>
          <div className={style.gr}>
            <input
              type="tel"
              placeholder={t("enter_gr")}
              onChange={(e) => setGrData({ ...grData, number: e.target.value })}
              required
            />
          </div>

          <div className={style.gr}>
            <input
              type="text"
              maxLength="75"
              placeholder={t("enter_reason")}
              onChange={(e) => setGrData({ ...grData, reason: e.target.value })}
              required
            />
          </div>
          <div className={style.gr}>
            <input
              type="text"
              maxLength="75"
              placeholder={t("bonafide_message_optional")}
              onChange={(e) =>
                setGrData({ ...grData, message: e.target.value })
              }
            />
          </div>
          <div className={style.gr}>
            <input
              type="text"
              maxLength="75"
              placeholder={t("competent_authority")}
              onChange={(e) => setAuthority(e.target.value)}
            />
          </div>

          {grData.number !== "" && grData.reason !== "" && (
            <button
              type="submit"
              disabled={disabled}
              className={style.getBtn}
              onClick={onBonafideHandler}
            >
              <p>{t("submit")}</p>
              {disabled && <LoaderButton />}
            </button>
          )}

          {student?.studentFirstName && (
            <div className={style.details}>
              <p>
                {t("name")} : {student?.studentFirstName}{" "}
                {student?.studentMiddleName ? student?.studentMiddleName : ""}{" "}
                {student?.studentLastName}{" "}
              </p>
              <p>
                {" "}
                {t("dob")}: {student?.studentDOB}
              </p>
              <p>
                {t("batch")} :{" "}
                {student?.batches?.batchName
                  ? student?.batches?.batchName
                  : "N/A"}
              </p>
              <p>
                {" "}
                {t("Class")}: {student?.studentClass?.className}
              </p>
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
              {student?.studentFirstName ? (
                <div
                  className={style.downloadbtn}
                  onClick={() => {
                    setDisabled1(true);
                    generateBonaPDF(student);
                  }}
                >
                  {t("download_certificate")}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
      {disabled1 && <QLoader />}
    </>
  );
};

export default BonaFide;
