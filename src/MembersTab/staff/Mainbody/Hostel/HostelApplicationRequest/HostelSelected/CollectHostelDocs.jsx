import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useCollectApplicantDocs } from "../../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionApplicationRequest.module.css";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

function CollectHostelDocs({
  onClose,
  applicationId,
  currentApplicant,
  onRefetchWhenConfirm,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [collectDocs] = useCollectApplicantDocs();
  const onDocumentCollect = () => {
    setDisabled(true);
    collectDocs({
      sid: currentApplicant?.student?._id,
      aid: applicationId,
      install_type: currentApplicant?.install_type,
      payment_status: currentApplicant?.payment_status,
      amount: +currentApplicant?.fee_remain ?? 0,
    })
      .then(() => {
        onClose();
        onRefetchWhenConfirm();
        setDisabled(false);
      })
      .catch({});
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

export default CollectHostelDocs;
