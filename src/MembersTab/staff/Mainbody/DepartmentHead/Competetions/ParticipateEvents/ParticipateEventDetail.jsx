import React from "react";
import style from "./ParticipateEvents.module.css";
import { useTranslation } from "react-i18next";
import { useParticipateEventDetails } from "../../../../../../hooks/member_tab/department-api";
import ParticipateStudents from "./ParticipateStudents";
import moment from "moment";
import { useState } from "react";
import UpdateResult from "./UpdateResult";

function ParticipateEventDetail({ pid }) {
  const { t } = useTranslation();
  const [updateResult, setUpdateResult] = useState(false);
  const [refetchStudents, setRefetchStudents] = useState(false);

  const { participativeEventDetails, participativeEventDetailsRefetch } =
    useParticipateEventDetails({
      pid: pid,
      skip: !pid,
    });

  return (
    <div className={style.elections_container}>
      {updateResult ? (
        <UpdateResult
          pid={pid}
          setUpdateResult={setUpdateResult}
          refetchStudents={refetchStudents}
          setRefetchStudents={setRefetchStudents}
          participativeEventDetailsRefetch={participativeEventDetailsRefetch}
          did={participativeEventDetails?.part?.department?.[0]?._id}
        />
      ) : (
        <div className={style.peventleft}>
          <div className={style.peventCardtop}>
            <div className={style.imgcontainer}>
              <img
                src="/images/participativeEvent/participate-icon.svg"
                alt=""
              />
            </div>
            <div className={style.issuedBookItemMidright}>
              <h6>{participativeEventDetails?.part?.event_name}</h6>
              <p>
                {moment(participativeEventDetails?.part?.event_date).format(
                  "Do MMM YYYY"
                )}
              </p>
            </div>
          </div>
          <div className={style.peventleftbody}>
            <div className={style.viewRow}>
              <p className={style.viewRowp}>{t("about_event")}</p>
              <h6 className={style.viewRowh6}>
                {participativeEventDetails?.part?.event_about}
              </h6>
            </div>

            <div className={style.viewRow}>
              <p className={style.viewRowp}>{t("selected_class")}</p>
              {/* <div className={style.classRow}> */}
              {participativeEventDetails?.part?.event_classes?.map(
                (classs, index) => {
                  if (
                    participativeEventDetails?.part?.event_classes?.length ===
                    index + 1
                  ) {
                    return (
                      <h6 className={style.viewRowh6}>
                        {t("std")} {classs?.className}-{t("class")}{" "}
                        {classs?.classTitle}
                      </h6>
                    );
                  } else {
                    return (
                      <h6 className={style.viewRowh6}>
                        {t("std")} {classs?.className}-{t("class")}{" "}
                        {classs?.classTitle},
                      </h6>
                    );
                  }
                }
              )}
              {/* </div> */}
            </div>

            <div className={style.viewRowContainer}>
              <div className={style.viewRow} style={{ width: "50%" }}>
                <p className={style.viewRowp}>
                  {t("last_date_to_application")}
                </p>
                <h6 className={style.viewRowh6}>
                  {" "}
                  {moment(participativeEventDetails?.part?.event_date).format(
                    "Do MMM YYYY"
                  )}
                </h6>
              </div>
              <div className={style.viewRow} style={{ width: "50%" }}>
                <p className={style.viewRowp}>{t("checklist")}</p>
                <h6 className={style.viewRowh6}>
                  {participativeEventDetails?.part?.event_checklist_critiria}
                </h6>
              </div>
            </div>

            <div className={style.viewRowContainer}>
              <div className={style.viewRow} style={{ width: "50%" }}>
                <p className={style.viewRowp}>{t("fees")}</p>
                <h6 className={style.viewRowh6}>
                  {participativeEventDetails?.part?.event_fee
                    ? `Rs. ${participativeEventDetails?.part?.event_fee} /-`
                    : `Rs. 0 /-`}
                </h6>
              </div>

              <div className={style.viewRow} style={{ width: "50%" }}>
                <p className={style.viewRowp}>{t("rank")}</p>
                <h6 className={style.viewRowh6}>
                  {participativeEventDetails?.part?.event_ranking_critiria}
                </h6>
              </div>
            </div>
            {participativeEventDetails?.part?.result_notification ===
            "Declared" ? (
              <div className={`${style.updateResult} ${style.resultDeclared}`}>
                {t("result_declared")}
              </div>
            ) : participativeEventDetails?.part?.event_ranking_critiria ===
              "Yes" ? (
              <div className={style.updateResult} onClick={setUpdateResult}>
                {t("update_result")}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
      <div
        className={`${style.peventright} ${style.itemsContainer} ${style.peventrightCard}`}
      >
        <ParticipateStudents pid={pid} refetchStudents={refetchStudents} />
      </div>
    </div>
  );
}

export default ParticipateEventDetail;
