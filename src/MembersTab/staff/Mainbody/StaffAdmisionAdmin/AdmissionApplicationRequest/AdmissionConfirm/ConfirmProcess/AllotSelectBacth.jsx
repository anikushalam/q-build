import React, { useEffect, useState } from "react";
import { useAdmissionBatchList } from "../../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../AdmissionApplicationRequest.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";

const AllotSelectBacth = ({
  applicationId,
  onAllotApplicantClasses,
  onClose,
}) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { admissionBatchList, admissionBatchListRefetch } =
    useAdmissionBatchList({
      aid: applicationId,
      skip: !applicationId,
    });

  useEffect(() => {
    if (applicationId) {
      setShowingDataLoading(true);
      admissionBatchListRefetch();
    }
  }, [applicationId, admissionBatchListRefetch]);
  const onSelectBatch = (val) => {
    onAllotApplicantClasses(val);
  };
  useEffect(() => {
    if (admissionBatchList?.batch) {
      setShowingDataLoading(false);
    }
  }, [admissionBatchList?.batch]);

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.admission_modal}>
        <h6 className={style.admission_modal_heading}>{t("select_batch")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
            margin: "0.7rem 0",
          }}
        />
        {admissionBatchList?.batch?.map((bat) => (
          <div
            className={style.admission_confirm_batch_card}
            onClick={() => onSelectBatch(bat?._id)}
            key={bat?._id}
          >
            <img src={"/images/allot-class-icon.svg"} alt="Class Avatar" />
            <div
              className={style.admission_collect_docs}
              style={{
                marginTop: "0",
              }}
            >
              <h6>{bat?.batchName}</h6>
            </div>
          </div>
        ))}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default AllotSelectBacth;
