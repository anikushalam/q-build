import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Notfication } from "../validation/Snackbar";
import style from "./JoiningForm.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSearchCodeForJoin } from "../hooks/authentication-api";
import QLoader from "../Loader/QLoader";

function JoiningCode({ join, applicantUserName }) {
  const { t } = useTranslation();
  const [showLoader, setShowLoader] = useState(false);
  const [refetchStatus, setRefetchStatus] = useState(true);
  const [joinCode, setJoinCode] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const navigate = useNavigate();
  const { searchCodeForJoin, searchCodeForJoinRefetch } = useSearchCodeForJoin({
    data: {
      code: joinCode,
      joinAs: join,
    },
    skip: refetchStatus,
  });

  const handleJoin = () => {
    if (joinCode) {
      setShowLoader(true);
      setRefetchStatus((pre) => !pre);
      searchCodeForJoinRefetch();
    }
  };

  useEffect(() => {
    if (searchCodeForJoin?.seen) {
      if (searchCodeForJoin?.classes?.classCode) {
        setShowLoader(false);
        navigate("/q/joining", {
          state: {
            joinCode: joinCode,
            formAs: "STUDENT",
            urlUsername: applicantUserName,
          },
        });
      } else if (searchCodeForJoin?.one_ins?.staffJoinCode) {
        setShowLoader(false);
        navigate("/q/joining", {
          state: {
            joinCode: joinCode,
            formAs: "STAFF",
            urlUsername: applicantUserName,
          },
        });
      } else {
        setShowLoader(false);
        setNotificationState({
          msg: "Enter code is not valid!",
          run: joinCode ? true : false,
        });
      }
    } else {
      setShowLoader(false);
      setNotificationState({
        msg: "Enter code is not valid!",
        run: joinCode ? true : false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchCodeForJoin?.classes?.classCode,
    searchCodeForJoin?.one_ins,
    searchCodeForJoin?.seen,
  ]);

  const handleAsStudentJoin = () => {
    if (joinCode) {
      setShowLoader(true);
      setRefetchStatus((pre) => !pre);
      searchCodeForJoinRefetch();
    }
  };
  // console.info("ths iFAHWJGHWA NNBQ H ", searchCodeForJoin);
  return (
    <>
      {join === "Student" && (
        <div className={style.applications}>
          <div className={style.top}>{t("existing_student")}</div>
          <div className={style.content2}>
            <h6>{t("enter_code")}</h6>

            <input
              type="text"
              pattern="[a-zA-Z0-9]+"
              maxlength="6"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
            />
            {joinCode.length !== 6 ? (
              <button type="submit" className={style.disabledBtn}>
                {t("fill_the_form")}
              </button>
            ) : (
              <button
                type="submit"
                className={style.fillbtn}
                onClick={handleAsStudentJoin}
              >
                {t("fill_the_form")}
              </button>
            )}

            <h6 className={style.tips}>{t("get_registration_code")}</h6>
            <ol>
              <li>
                <p className={style.tip}>{t("registration_step_1")}</p>
              </li>
              <li>
                <p className={style.tip}>{t("registration_step_2")}</p>
              </li>
              <li>
                <p className={style.tip}>{t("registration_step_3")}</p>
              </li>
            </ol>
          </div>
        </div>
      )}

      {join === "Staff" && (
        <div className={style.applications}>
          <div className={style.top}>{t("existing_student")}</div>
          <div className={style.content2}>
            <h6>{t("enter_code")}</h6>

            <input
              type="text"
              pattern="[a-zA-Z0-9]+"
              maxlength="6"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value)}
            />

            {joinCode.length !== 6 ? (
              <button type="submit" className={style.disabledBtn}>
                {t("fill_the_form")}
              </button>
            ) : (
              <button
                type="submit"
                className={style.fillbtn}
                onClick={handleJoin}
              >
                <span> {t("fill_the_form")}</span>
              </button>
            )}
          </div>
        </div>
      )}
      {showLoader && <QLoader />}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </>
  );
}

export default JoiningCode;
