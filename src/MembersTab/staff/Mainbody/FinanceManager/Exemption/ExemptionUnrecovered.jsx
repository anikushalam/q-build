import React, { useEffect, useState } from "react";
import style from "./ExemptionUnrecovered.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useGetAllExemption } from "../../../../../hooks/member_tab/finance-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import moment from "moment";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useSelector } from "react-redux";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const ExemptionUnrecovered = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const financeId = useSelector((state) => state.financeChange.fid);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [exemptionList, setExemptionList] = useState([]);

  const { getAllExemption, getAllExemptionRefetch } = useGetAllExemption({
    data: {
      fid: financeId,
      page: page,
      limit: 10,
    },
    skip: !financeId,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (financeId) {
      setShowingDataLoading(true);
      getAllExemptionRefetch();
    }
  }, [financeId, page, getAllExemptionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllExemption?.all_exempt) {
      setExemptionList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getAllExemption?.all_exempt]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getAllExemption?.all_exempt?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getAllExemption?.all_exempt?.length === 10) setState(true);
    else setState(false);
  }, [getAllExemption?.all_exempt]);
  return (
    <div className={style.exemption}>
      <div className={style.exemption_header}>
        <img
          src="/images/left-back-icon.svg"
          alt="back arrow"
          className={style.back_icon}
          onClick={() => navigate(-1)}
        />
        <h6 className={style.exemption_header_title}>
          {t("exemption_unrecovered")}
        </h6>
      </div>
      <p className={style.all_time_data}>{t("all_time_data")}</p>
      <h6 className={style.total_amount}>
        {t("total_amount")} {t("rs")} {getAllExemption?.all_exempt_count ?? 0}
      </h6>
      {exemptionList?.map((exemption, index) =>
        exemptionList?.length === index + 1 ? (
          <section
            key={exemption?._id}
            ref={ref}
            className={style.exemption_card}
          >
            <img
              src={
                exemption?.student?.studentProfilePhoto
                  ? `${imageShowUrl}/${exemption?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="student avatar"
            />
            <div className={style.exemption_card_text}>
              <div className={style.exemption_card_name}>
                <h6>{`${exemption?.student?.studentFirstName} ${
                  exemption?.student?.studentMiddleName
                    ? exemption?.student?.studentMiddleName
                    : ""
                } ${exemption?.student?.studentLastName}`}</h6>
                <h6>
                  {t("rs")} {exemption?.fee_payment_amount ?? 0}
                </h6>
              </div>
              <div className={style.exemption_card_amount}>
                <p>{t("admission_fees_paid")}</p>
                <p>{exemption?.student?.admissionPaidFeeCount ?? 0}</p>
              </div>
              <div className={style.exemption_card_batch}>
                <p>{`(${exemption?.student?.batches?.batchName ?? ""})`}</p>
                <p>
                  {moment(exemption?.fee_transaction_date).format(
                    "DD MMM yyyy"
                  )}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section key={exemption?._id} className={style.exemption_card}>
            <img
              src={
                exemption?.student?.studentProfilePhoto
                  ? `${imageShowUrl}/${exemption?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="student avatar"
            />
            <div className={style.exemption_card_text}>
              <div className={style.exemption_card_name}>
                <h6>{`${exemption?.student?.studentFirstName} ${
                  exemption?.student?.studentMiddleName
                    ? exemption?.student?.studentMiddleName
                    : ""
                } ${exemption?.student?.studentLastName}`}</h6>
                <h6>
                  {t("rs")} {exemption?.fee_payment_amount ?? 0}
                </h6>
              </div>
              <div className={style.exemption_card_amount}>
                <p>{t("admission_fees_paid")}</p>
                <p>{exemption?.student?.admissionPaidFeeCount ?? 0}</p>
              </div>
              <div className={style.exemption_card_batch}>
                <p>{`(${exemption?.student?.batches?.batchName ?? ""})`}</p>
                <p>
                  {moment(exemption?.fee_transaction_date).format(
                    "DD MMM yyyy"
                  )}
                </p>
              </div>
            </div>
          </section>
        )
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default ExemptionUnrecovered;
