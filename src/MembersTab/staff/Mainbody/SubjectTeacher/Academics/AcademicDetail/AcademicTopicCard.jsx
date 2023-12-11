import React, { useEffect, useState } from "react";
import style from "../Academics.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AcademicTopicEdit from "./AcademicTopicEdit";
import AcademicTopicMenu from "./AcademicTopicMenu";

const AcademicTopicCard = ({
  topic,
  isLast,
  isView,
  onGrabChapterId,
  topicId,
  onRefetch,
  isSubType,
  topicCurrentStatus,
}) => {
  const { t } = useTranslation();
  const [topicMenu, setTopicMenu] = useState("");
  const [topicStatus, setTopicStatus] = useState("");
  useEffect(() => {
    if (topicId?.length) {
      let status = "";
      for (let i = 0; i < topicId?.length; i++) {
        if (topicId[i]?.topicId === topic?._id) {
          status = topicId[i]?.current_status;
          break;
        }
      }
      setTopicStatus(status);
    } else {
      setTopicStatus("");
    }
  }, [topicId]);

  return (
    <>
      {isView === "SUBJECT_TEACHER" &&
      isSubType !== "SUBJECT_TEACHER_INSTITUTE" ? (
        <div className={style.topic_card_container}>
          <div className={style.topic_card_each}>
            <h5>{topic?.topic_name ?? ""}</h5>
            <p>
              {t("scheduled_on")}{" "}
              {moment(topic?.topic_last_date).format("Do MMMM, yyyy")}
            </p>
          </div>
          <div
            className={style.topic_card_each}
            style={{
              alignItems: "flex-end",
            }}
          >
            {topic?.topic_current_status?.toLowerCase() === "ongoing" ? (
              <>
                <p
                  className={
                    topicStatus === "Ongoing"
                      ? `${style.topic_ongoing} ${style.topic_ongoing_active}`
                      : style.topic_ongoing
                  }
                  onClick={() => onGrabChapterId(topic, "Ongoing")}
                  style={{
                    color:
                      topicStatus === "Ongoing"
                        ? "#ffffff"
                        : "rgba(255, 77, 0, 0.8)",
                  }}
                >
                  {topic?.topic_current_status ?? ""}
                </p>
                {isView === "SUBJECT_TEACHER" ? (
                  <p
                    // onClick={onUpdateStatus}
                    className={
                      topicStatus === "Completed"
                        ? `${style.topic_completed} ${style.topic_completed_active}`
                        : style.topic_completed
                    }
                    onClick={() => onGrabChapterId(topic, "Completed")}
                  >
                    Completed
                  </p>
                ) : null}
              </>
            ) : (
              <>
                {topic?.topic_completion_status?.toLowerCase() ===
                "early completed" ? (
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#002BBE",
                    }}
                  >
                    {topic?.topic_completion_status ?? ""}
                  </p>
                ) : topic?.topic_completion_status?.toLowerCase() ===
                  "delayed completed" ? (
                  <p
                    style={{
                      fontSize: "14px",
                      color: " rgba(255, 77, 0, 0.80)",
                    }}
                  >
                    {topic?.topic_completion_status ?? ""}
                  </p>
                ) : (
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(0, 128, 0, 0.80)",
                    }}
                  >
                    {topic?.topic_completion_status ?? ""}
                  </p>
                )}
                {/* <img src="/images/member_tab/subject/subject-edit-icon.svg" alt="edit icon" /> */}
                <p
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  {moment(topic?.topic_completion_date).format("Do MMMM, yyyy")}
                </p>
              </>
            )}
          </div>
        </div>
      ) : isView === "SAVE_RECORD" ? (
        <div className={style.topic_card_container}>
          <div className={style.topic_card_each}>
            <h5>{topic?.topic_name ?? ""}</h5>
            <p>
              {t("scheduled_on")}{" "}
              {moment(topic?.topic_last_date).format("Do MMMM, yyyy")}
            </p>
          </div>
          <div
            className={style.topic_card_each}
            style={{
              alignItems: "flex-end",
            }}
          >
            {topicStatus === "Completed" ? (
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(0, 128, 0, 0.80)",
                }}
              >
                Completed
              </p>
            ) : (
              <p
                style={{
                  color: "rgba(255, 77, 0, 0.80)",
                  fontSize: "14px",
                }}
              >
                {topic?.topic_current_status ?? ""}
              </p>
            )}
          </div>
        </div>
      ) : isView === "DAILY" ? (
        <div className={style.topic_card_container}>
          <div className={style.topic_card_each}>
            <h5>{topic?.topic_name ?? ""}</h5>
            <p>
              {t("scheduled_on")}{" "}
              {moment(topic?.topic_last_date).format("Do MMMM, yyyy")}
            </p>
          </div>
          <div
            className={style.topic_card_each}
            style={{
              alignItems: "flex-end",
            }}
          >
            {topicCurrentStatus === "Completed" ? (
              topic?.topic_completion_status === "Delayed Completed" ? (
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255, 77, 0, 0.80)",
                  }}
                >
                  {topic?.topic_completion_status}
                </p>
              ) : topic?.topic_completion_status === "Timely Completed" ? (
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(0, 128, 0, 0.80)",
                  }}
                >
                  {topic?.topic_completion_status}
                </p>
              ) : (
                <p
                  style={{
                    fontSize: "14px",
                    color: "#002BBE",
                  }}
                >
                  {topic?.topic_completion_status}
                </p>
              )
            ) : (
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 77, 0, 0.80)",
                }}
              >
                {topicCurrentStatus}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className={style.topic_card_container}>
          <div className={style.topic_card_each}>
            <h5>{topic?.topic_name ?? ""}</h5>
            <p>
              {t("scheduled_on")}{" "}
              {moment(topic?.topic_last_date).format("Do MMMM, yyyy")}
            </p>
          </div>
          <div
            className={style.topic_card_each}
            style={{
              alignItems: "flex-end",
              flexDirection:
                isView === "INSTITUTE" || isView === "ADMINISTRATOR"
                  ? "row"
                  : "column",
              gap:
                isView === "INSTITUTE" || isView === "ADMINISTRATOR"
                  ? "1rem"
                  : "0",
            }}
          >
            {isView === "INSTITUTE" ||
            isSubType === "SUBJECT_TEACHER_INSTITUTE" ||
            isView === "ADMINISTRATOR" ? (
              <>
                <img
                  src="/images/member_tab/subject/subject-edit-icon.svg"
                  alt="edit icon"
                  onClick={() => setTopicMenu(topic)}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </>
            ) : (
              <div>
                {topic?.topic_current_status?.toLowerCase() === "ongoing" ? (
                  <>
                    <p
                      style={{
                        color: "rgba(255, 77, 0, 0.80)",
                        fontSize: "14px",
                      }}
                    >
                      {topic?.topic_current_status ?? ""}
                    </p>
                    {/* <p
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        marginTop: "0.4rem",
                      }}
                      // onClick={onUpdateStatus}
                    >
                      Completed
                    </p> */}
                  </>
                ) : (
                  <>
                    {topic?.topic_completion_status?.toLowerCase() ===
                    "early completed" ? (
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#002BBE",
                        }}
                      >
                        {topic?.topic_completion_status ?? ""}
                      </p>
                    ) : topic?.topic_completion_status?.toLowerCase() ===
                      "delayed completed" ? (
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(255, 77, 0, 0.80)",
                        }}
                      >
                        {topic?.topic_completion_status ?? ""}
                      </p>
                    ) : (
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 128, 0, 0.80)",
                        }}
                      >
                        {topic?.topic_completion_status ?? ""}
                      </p>
                    )}
                    <p
                      style={{
                        marginTop: "0.5rem",
                      }}
                    >
                      {moment(topic?.topic_completion_date).format(
                        "Do MMMM, yyyy"
                      )}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {!isLast && (
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
      )}
      {topicMenu && (
        <AcademicTopicMenu
          topicMenu={topicMenu}
          onClose={() => setTopicMenu("")}
          onRefetch={onRefetch}
        />
      )}

      {/* {disabled && <QLoader />} */}
    </>
  );
};

export default AcademicTopicCard;
