import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useConfirmStudentModeByHostel,
  useRejectStudentModeByHostel,
} from "../../../../../../hooks/member_tab/hostel-api";
import moment from "moment";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../../Loader/QLoader";
import style from "../../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";

const MarkConfirm = ({
  currentApplicant,
  onClose,
  applicationId,
  onRefetchWhenConfirm,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [confirmStudentModeByHostel] = useConfirmStudentModeByHostel();
  const [rejectStudentModeByHostel] = useRejectStudentModeByHostel();
  const onConfirm = () => {
    if (applicationId && currentApplicant?.student?._id) {
      setDisabled((pre) => !pre);
      confirmStudentModeByHostel({
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
      rejectStudentModeByHostel({
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
        <h6>{t("hostel_status")}</h6>
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

export default MarkConfirm;
