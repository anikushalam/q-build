import React from "react";
import { useState } from "react";
import style from "./AdmissionEnquiry.module.css";
import { useTranslation } from "react-i18next";
import Enquiries from "./Enquiries/Enquiries";
import Reviewed from "./Reviewed/Reviewed";
import EnquiryDetail from "./EnquiryDetail";
import ReviewDetail from "./ReviewDetail";
import NewEnquiryModal from "./NewEnquiry/NewEnquiryModal";

function AdmissionEnquiry({ admissionId, instituteId }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [reftechWhenMark, setReftechWhenMark] = useState(false);
  const [reviewedId, setReviewedId] = useState("");
  const [enquiryId, setEnquiryId] = useState("");

  return (
    <>
      {enquiryId === "" && reviewedId === "" && (
        <div className={style.admisionApplication}>
          <div className={style.admisionApplicationTop}>
            <div className={style.admisionApplicationTopLeft}>
              {index === 0 ? (
                <h6 className={style.active} onClick={() => setIndex(0)}>
                  {t("enquiries")}
                </h6>
              ) : (
                <h6 onClick={() => setIndex(0)}>{t("enquiries")}</h6>
              )}
              {index === 1 ? (
                <h6 className={style.active} onClick={() => setIndex(1)}>
                  {t("reviewed")}
                </h6>
              ) : (
                <h6 onClick={() => setIndex(1)}>{t("reviewed")}</h6>
              )}
            </div>
          </div>

          <div className={style.applicationBody}>
            <div className={style.searchContainerr}>
              <div className={style.searchContainer}>
                <img alt="" src="/images/search-dept-icon.svg" />
                <input type="text" placeholder={t("search-label")} required />
              </div>
              <div className={style.newBtn} onClick={() => setModal(true)}>
                {t("add_new_enquiry")}
              </div>
            </div>

            {index === 0 && (
              <Enquiries
                setEnquiryId={setEnquiryId}
                admissionId={admissionId}
                reftechWhenMark={reftechWhenMark}
                setReftechWhenMark={setReftechWhenMark}
              />
            )}
            {index === 1 && (
              <Reviewed
                admissionId={admissionId}
                setReviewedId={setReviewedId}
              />
            )}
          </div>
        </div>
      )}

      {enquiryId && (
        <EnquiryDetail
          enquiryId={enquiryId}
          setEnquiryId={setEnquiryId}
          setReftechWhenMark={setReftechWhenMark}
        />
      )}
      {reviewedId && (
        <ReviewDetail setReviewedId={setReviewedId} reviewedId={reviewedId} />
      )}

      {modal && (
        <NewEnquiryModal
          open={modal}
          onClose={() => setModal(false)}
          instituteId={instituteId}
          setReftechWhenMark={setReftechWhenMark}
        />
      )}
    </>
  );
}

export default AdmissionEnquiry;
