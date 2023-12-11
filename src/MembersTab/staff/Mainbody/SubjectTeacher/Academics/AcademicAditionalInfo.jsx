import React from "react";
import style from "./Academics.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { imageShowUrl, pdfShowUrlNext } from "../../../../../services/BaseUrl";
import { imageExtensionVerify } from "../../../../../utils/image_extenstion";

const AcademicAditionalInfo = ({
  isView,
  updateDescription,
  upadateImage,
  createdAt,
  subject,
}) => {
  const { t } = useTranslation();
  return (
    <div className={style.aditional_info_container}>
      {isView === "STUDENT" ? (
        <div className={style.aditional_info_dates}>
          <h5>{subject?.subjectName ?? ""}</h5>
          <h6>{`${subject?.subjectTeacherName?.staffFirstName ?? ""} ${
            subject?.subjectTeacherName?.staffMiddleName ?? ""
          } ${subject?.subjectTeacherName?.staffLastName ?? ""}`}</h6>
        </div>
      ) : null}
      {updateDescription || upadateImage?.length > 0 ? (
        <>
          <h6>{t("additional_info")}</h6>
          <p>{updateDescription}</p>
          {upadateImage?.length > 0 ? (
            <div className={style.aditional_info_images}>
              {upadateImage?.map((doc) =>
                imageExtensionVerify(doc?.documentKey) ? (
                  <a
                    title="view File"
                    href={`${pdfShowUrlNext}/${doc?.documentKey}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <img
                      src={`${imageShowUrl}/${doc?.documentKey}`}
                      alt="files"
                      key={doc?.documentKey}
                    />
                  </a>
                ) : null
              )}
            </div>
          ) : null}
        </>
      ) : null}

      <div className={style.aditional_info_dates}>
        <p>{moment(createdAt).format("DD MMM yyyy")}</p>
        <p>{moment(createdAt).format("LT")}</p>
      </div>
    </div>
  );
};

export default AcademicAditionalInfo;
