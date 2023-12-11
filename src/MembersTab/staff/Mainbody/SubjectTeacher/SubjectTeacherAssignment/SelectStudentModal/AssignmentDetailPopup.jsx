import React, { useEffect } from "react";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../../FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import { imageExtensionVerify } from "../../../../../../utils/image_extenstion";
import { pdfShowUrlNext } from "../../../../../../services/BaseUrl";
import assStyle from "../../../../../student/Mainbody/StudentClass/Assignment/Assignment.module.css";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import { useSubjectOneAssignment } from "../../../../../../hooks/member_tab/subject-api";

const AssignmentDetailPopup = ({ onClose, aid }) => {
  const { t } = useTranslation();
  const { subjectOneAssignment, subjectOneAssignmentRefetch } =
    useSubjectOneAssignment({
      aid: aid,
      skip: !aid,
    });

  useEffect(() => {
    if (aid) {
      subjectOneAssignmentRefetch();
    }
  }, [aid, subjectOneAssignmentRefetch]);

  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "35rem",
          minHeight: "30rem",
          maxHeight: "35rem",
          overflowX: "hidden",
        }}
      >
        <div className={style.add_category_modal_title}>
          <section
            className={style.add_category_modal_title_left}
            style={{
              position: "relative",
              width: "100%",
            }}
          >
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onClose}
              alt=""
            />

            <h6>{t("assignment")}</h6>
          </section>
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <JoinFormInputView
          labelText={`${t("ass_name")}: `}
          value={subjectOneAssignment?.one_assignment?.assignmentName ?? ""}
          customStyleContainer={{
            width: "100%",
          }}
        />
        <JoinFormInputView
          labelText={`${t("due_date_of_assignement")}: `}
          value={moment(subjectOneAssignment?.one_assignment?.dueDate).format(
            "DD-MM-yyyy"
          )}
          customStyleContainer={{
            width: "100%",
          }}
        />

        <p className={style.assignment_description}>Description :</p>
        <h6
          style={{
            whiteSpace: "break-spaces",
          }}
          className={style.assignment_description_head}
        >
          {subjectOneAssignment?.one_assignment?.descritpion ?? ""}
        </h6>
        <p
          className={style.assignment_description}
          style={{
            marginTop: "0.6rem",
          }}
        >
          {t("total_student")}{" "}
          {subjectOneAssignment?.one_assignment?.totalCount ?? ""}
        </p>

        {subjectOneAssignment?.one_assignment?.files?.length > 0 ? (
          <div className={assStyle.files}>
            <p className={assStyle.typeFile}>{t("file_image")}</p>
            {subjectOneAssignment?.one_assignment?.files?.map((file, index) => {
              if (
                file?.documentType === "application/octet-stream" ||
                file?.documentType === "image/jpeg" ||
                file?.documentType === "image/png" ||
                imageExtensionVerify(file?.documentKey)
              ) {
                return (
                  <a
                    href={`${pdfShowUrlNext}/${file?.documentKey}`}
                    target="_blank"
                  >
                    <div className={assStyle.img} key={index}>
                      <img src="/images/members/img-icon.svg" alt="" />
                      <p>{file?.documentName}</p>
                    </div>
                  </a>
                );
              } else {
                return (
                  <a
                    href={`${pdfShowUrlNext}/${file?.documentKey}`}
                    target="_blank"
                  >
                    <div className={assStyle.img} key={index}>
                      <img src="/images/admin/pdf-icon.svg" alt="" />
                      <p>{file?.documentName}</p>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </PopupWrapper>
  );
};

export default AssignmentDetailPopup;
