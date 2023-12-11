import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import {
  useConfirmStudentModeByAdmissionAdmin,
  useRejectStudentModeByAdmissionAdmin,
} from "../../../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../AdmissionApplicationRequest.module.css";

const NotConfirmApplicant = ({
  currentApplicant,
  onClose,
  applicationId,
  onRefetchWhenConfirm,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [confirmStudentModeByAdmission] =
    useConfirmStudentModeByAdmissionAdmin();
  const [rejectStudentModeByAdmission] = useRejectStudentModeByAdmissionAdmin();
  const onConfirm = () => {
    if (applicationId && currentApplicant?.student?._id) {
      setDisabled((pre) => !pre);
      confirmStudentModeByAdmission({
        aid: applicationId,
        sid: currentApplicant?.student?._id,
      })
        .then(() => {
          onRefetchWhenConfirm();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  const onReject = () => {
    if (applicationId && currentApplicant?.student?._id) {
      setDisabled((pre) => !pre);
      rejectStudentModeByAdmission({
        aid: applicationId,
        sid: currentApplicant?.student?._id,
      })
        .then(() => {
          onRefetchWhenConfirm();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.not_confirm_container}>
        <h6>{t("admission_status")}</h6>
        <BorderBottom
          customStyle={{
            marginLeft: "-2rem",
            width: "130%",
          }}
        />
        <section className={style.applicant_profile}>
          <img
            alt="Student Request Avatar"
            src={
              currentApplicant?.student?.photoId !== "1"
                ? `${imageShowUrl}/${currentApplicant?.student?.studentProfilePhoto}`
                : "/images/member_tab/class/default_avatar.svg"
            }
          />
          <div className={style.applicant_profile_text}>
            <h6>{`${currentApplicant?.student?.studentFirstName} ${
              currentApplicant?.student?.studentMiddleName
                ? currentApplicant?.student?.studentMiddleName
                : ""
            } ${currentApplicant?.student?.studentLastName}`}</h6>
            <p>
              {t("applied")}{" "}
              {moment(currentApplicant?.select_on).format("DD MMM yyyy")}
            </p>
          </div>
        </section>
        <section className={style.button_group}>
          <button onClick={onConfirm}>{t("confirm")}</button>
          <button onClick={onReject}>{t("reject")}</button>
        </section>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default NotConfirmApplicant;
