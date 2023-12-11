import React, { useEffect, useState } from "react";
import { useOneInstituteProfile } from "../../../../../../hooks/dashboard/dashboard-api";
import { useOneStudentProfile } from "../../../../../../hooks/institute/institute-staff-student-api";
import { useUploadStudentFormPdf } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
const CustomGenerateStudentHostelFormPdf = ({
  instituteId,
  studentId,
  applicationName,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [uploadStudentFormPdf] = useUploadStudentFormPdf();

  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: instituteId,
        type: "ID",
      },
      skip: !instituteId,
    });
  const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
    sid: studentId,
    skip: !studentId,
  });
  useEffect(() => {
    if (instituteId) oneInstituteProfileRefetch();
  }, [instituteId, oneInstituteProfileRefetch]);

  useEffect(() => {
    if (studentId) oneStudentProfileRefetch();
  }, [studentId, oneStudentProfileRefetch]);
  // ====================== to generate pdf ====================
  const onPdfCusotmGenerate = async (
    data,
    imageKey,
    sid,
    pdfUndertaking = null,
    isAdmission = false
  ) => {
    const workerInstance = new Worker(
      new URL(
        "../../../../../../pdf/worker/main.form.pdf.worker.js",
        import.meta.url
      )
    );

    const { institute, studentInfo } = studentModifyFormData(
      oneInstituteProfile?.institute,
      data,
      {
        imageKey,
        isAdmission,
        applicationName: applicationName,
      }
    );

    workerInstance.postMessage({
      printFormType: "STUDENT_HOSTEL_FORM",
      studentInfo: studentInfo,
      institute: institute,
      pdfUndertaking: pdfUndertaking,
    });

    workerInstance.onmessage = (message) => {
      if (message && sid) {
        window.open(URL.createObjectURL(message.data), "_blank");
        const formData = new FormData();
        formData.append("file", message.data);
        uploadStudentFormPdf({
          sid: sid,
          pdf_file: formData,
        })
          .then(() => {
            setDisabled(false);
          })
          .catch({});
      }
    };
  };

  const onGenerate = () => {
    if (
      oneInstituteProfile?.institute?.insName &&
      oneStudentProfile?.student?.studentFirstName
    ) {
      setDisabled(true);
      onPdfCusotmGenerate(
        oneStudentProfile?.student,
        oneStudentProfile?.student?.studentProfilePhoto,
        oneStudentProfile?.student?._id,
        "UG",
        false
      );
    }
  };

  return (
    <>
      <div onClick={onGenerate}>Generate</div>
      {disabled && <QLoader />}
    </>
  );
};

export default CustomGenerateStudentHostelFormPdf;
