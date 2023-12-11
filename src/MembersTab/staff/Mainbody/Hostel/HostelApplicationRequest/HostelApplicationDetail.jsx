import React, { useEffect, useState } from "react";
import style from "../../StaffAdmisionAdmin/AdmisionApplication/ApplicationDetail.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useCompleteHostelApplication } from "../../../../../hooks/member_tab/hostel-api";
import { Notfication } from "../../../../../validation/Snackbar";
import QLoader from "../../../../../Loader/QLoader";
import { useGetDailyCollectionByAdmission } from "../../../../../hooks/member_tab/admission-api";
import AdmissionApplicationCalender from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/OngoingApplication/AdmissionApplicationCalender";
function HostelApplicationDetail({
  viewDetail,
  hideModal,
  applicationDetail,
  completeApplication,
  carryParentState,
  applicationDetailApplicablePending,
  pageOpenAs,
}) {
  const { t } = useTranslation();
  const getTodayDate = new Date();
  const navigate = useNavigate();
  const params = useParams();
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });

  const [isViewAll, setIsViewAll] = useState(false);
  const [validDate, setValidDate] = useState(
    getTodayDate.toISOString()?.substring(0, 10)
  );

  const [completeHostelApplication] = useCompleteHostelApplication();

  const {
    getDailyCollectionByAdmission,
    getDailyCollectionByAdmissionRefetch,
  } = useGetDailyCollectionByAdmission({
    data: {
      appId: applicationDetail?._id,
      valid_date: validDate,
    },
    skip: !applicationDetail?._id,
  });
  useEffect(() => {
    if (applicationDetail?._id) {
      getDailyCollectionByAdmissionRefetch();
    }
  }, [applicationDetail?._id, getDailyCollectionByAdmissionRefetch, validDate]);

  const onCompletApplication = () => {
    setDisabled((pre) => !pre);
    if (applicationDetail?._id) {
      completeHostelApplication({
        aid: applicationDetail?._id,
      })
        .then((res) => {
          if (res?.data?.complete_status) {
            setDisabled((pre) => !pre);
            hideModal(false);
            if (pageOpenAs === "INSTITUTE") {
              navigate(`/q/${params.username}/hostel`, {
                state: {
                  ...carryParentState,
                },
              });
            } else {
              navigate(`/q/${params.username}/member/hostel`, {
                state: {
                  ...carryParentState,
                },
              });
            }
          } else {
            setNotificationState({ msg: res?.data.message, run: true });
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    } else {
      setDisabled((pre) => !pre);
    }
  };
  return (
    <Dialog open={viewDetail} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <div></div>
          <h6
            style={{
              cursor: "pointer",
            }}
            onClick={() => setIsViewAll((pre) => !pre)}
          >
            {applicationDetail?.applicationName}
          </h6>
          <img
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
            alt=""
          />
        </div>
        <div className={style.content}>
          <div
            style={{
              padding: "1rem",
            }}
          >
            <AdmissionApplicationCalender setValidDate={setValidDate} />
          </div>
          {completeApplication && !isViewAll && (
            <>
              <div className={style.content2}>
                <div className={style.appinforow}>
                  <h6>{t("total_received_application")}</h6>
                  <h6>
                    {getDailyCollectionByAdmission?.day_wise?.request_count ??
                      0}
                  </h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_selected_application")}</h6>
                  <h6>
                    {getDailyCollectionByAdmission?.day_wise?.select_count ?? 0}
                  </h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_confirmed_application")}</h6>
                  <h6>
                    {getDailyCollectionByAdmission?.day_wise?.confirm_count ??
                      0}
                  </h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_alloted_application")}</h6>
                  <h6>
                    {" "}
                    {getDailyCollectionByAdmission?.day_wise?.allot_count ?? 0}
                  </h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_cancelled_application")}</h6>
                  <h6>
                    {" "}
                    {getDailyCollectionByAdmission?.day_wise?.cancel_count ?? 0}
                  </h6>
                </div>
              </div>
              <div className={style.content3}>
                <div className={style.appinforow1}>
                  <h6>{t("total_fees_received")}</h6>
                  <h6>
                    Rs. {getDailyCollectionByAdmission?.day_wise?.paid ?? 0}
                  </h6>
                </div>

                <div className={`${style.appinforow2} ${style.appinforowred}`}>
                  <h6>{t("total_fees_pending")}</h6>
                  <h6>
                    Rs. {getDailyCollectionByAdmission?.day_wise?.remain ?? 0}
                  </h6>
                </div>
                <div className={`${style.appinforow2} ${style.appinforowred}`}>
                  <h6>{t("total_applicable_fees_pending")}</h6>
                  <h6>
                    Rs.{" "}
                    {getDailyCollectionByAdmission?.day_wise
                      ?.applicable_pending ?? 0}
                  </h6>
                </div>
                <div className={style.completeApplicationcontainer}>
                  <div
                    className={style.completeApplication}
                    onClick={onCompletApplication}
                  >
                    {t("complete_application")}
                  </div>
                </div>
              </div>
            </>
          )}
          {completeApplication && isViewAll && (
            <>
              <div className={style.content2}>
                <div className={style.appinforow}>
                  <h6>{t("total_received_application")}</h6>
                  <h6>{applicationDetail?.receievedCount}</h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_selected_application")}</h6>
                  <h6>{applicationDetail?.selectCount}</h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_confirmed_application")}</h6>
                  <h6>{applicationDetail?.confirmCount}</h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_alloted_application")}</h6>
                  <h6>{applicationDetail?.allotCount}</h6>
                </div>
                <div className={style.appinforow}>
                  <h6>{t("total_cancelled_application")}</h6>
                  <h6>{applicationDetail?.cancelCount}</h6>
                </div>
              </div>
              <div className={style.content3}>
                <div className={style.appinforow1}>
                  <h6>{t("total_fees_received")}</h6>
                  <h6>Rs. {applicationDetail?.collectedFeeCount}</h6>
                </div>

                <div className={`${style.appinforow2} ${style.appinforowred}`}>
                  <h6>{t("total_fees_pending")}</h6>
                  <h6>Rs. {applicationDetail?.remainingFee}</h6>
                </div>
                <div className={`${style.appinforow2} ${style.appinforowred}`}>
                  <h6>{t("total_applicable_fees_pending")}</h6>
                  <h6>Rs. {applicationDetailApplicablePending ?? 0}</h6>
                </div>
                <div className={style.completeApplicationcontainer}>
                  <div
                    className={style.completeApplication}
                    onClick={onCompletApplication}
                  >
                    {t("complete_application")}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {disabled && <QLoader />}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </Dialog>
  );
}

export default HostelApplicationDetail;
