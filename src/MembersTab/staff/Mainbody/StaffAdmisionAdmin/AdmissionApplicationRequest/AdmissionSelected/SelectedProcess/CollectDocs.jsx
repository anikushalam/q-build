import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../AdmissionApplicationRequest.module.css";
import { useCollectApplicantDocs } from "../../../../../../../hooks/member_tab/admission-api";

function CollectDocs({
  applicationId,
  currentApplicant,
  onRefetchWhenConfirm,
  onClose,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [collectDocs] = useCollectApplicantDocs();
  const onDocumentCollect = () => {
    if (currentApplicant?.student?._id && applicationId) {
      setDisabled(true);
      collectDocs({
        sid: currentApplicant?.student?._id,
        aid: applicationId,
        // install_type: applicant?.install_type,
        // payment_status: applicant?.payment_status,
        // amount: +applicant?.fee_remain ?? 0,
      })
        .then(() => {
          onRefetchWhenConfirm();
          onClose();
          setDisabled(false);
        })
        .catch({});
    } else {
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.not_confirm_container}>
        <h6>{t("collect_required_document")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <section className={style.admission_collect_docs}>
          <p>{t("collecting_documents_of_student")}</p>
          <h6>
            {`${currentApplicant?.student?.studentFirstName} ${
              currentApplicant?.student?.studentMiddleName
                ? currentApplicant?.student?.studentMiddleName
                : ""
            } ${currentApplicant?.student?.studentLastName}`}
          </h6>
        </section>
        <button onClick={onDocumentCollect} className={style.confirm_btn}>
          {t("confirm")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
}

export default CollectDocs;
