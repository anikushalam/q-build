import React, { useCallback, useEffect, useState } from "react";
import style from "./Recovery.module.css";
import { useTranslation } from "react-i18next";
import {
  Notfication,
  UpdateStatus,
} from "../../../../../../validation/Snackbar";
import { useSelector } from "react-redux";
import { useOneInstituteDashboard } from "../../../../../../hooks/dashboard/dashboard-api";
import {
  useAddRecoveryMail,
  useAddRecoveryPhoneNumber,
} from "../../../../../../hooks/setting-api";
import { debounce } from "lodash";
import { useUserSignup } from "../../../../../../Authentication/Signup/UserSignUp/components/use-user-signup";
import { useExitsingUsernameEdit } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";

function Recovery({ switchh }) {
  const { t } = useTranslation();
  const author = useSelector((state) => state.authChange);
  const [emailData, setEmailData] = useState({ recoveryMail: "" });
  const [phoneData, setPhoneData] = useState({ insPhoneNumber: "" });
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });

  const [message, setMessage] = useState();
  const [run, setRun] = useState(false);
  const [addRecoveryMail] = useAddRecoveryMail();
  const [addRecoveryPhoneNumber] = useAddRecoveryPhoneNumber();

  const { validInput, verifyUsername } = useUserSignup();
  const [exitsingUsernameEdit] = useExitsingUsernameEdit();

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: author?.id,
      skip: !author?.id,
    });
  useEffect(() => {
    if (author?.id) oneInstituteDashboardRefetch();
  }, [author?.id, oneInstituteDashboardRefetch]);

  useEffect(() => {
    if (oneInstituteDashboard?.institute?.name)
      setUsername(oneInstituteDashboard?.institute?.name);
  }, [oneInstituteDashboard?.institute?.name]);
  const RecoveryMailUpdate = () => {
    addRecoveryMail({
      id: author?.id,
      mail: emailData,
    }).then((res) => {
      if (res.data.status) {
        oneInstituteDashboardRefetch();
        setMessage(res.data.message);
        setRun(true);
        setEmailData({ recoveryMail: "" });
      }
    });
  };

  const RecoveryPhoneUpdate = () => {
    addRecoveryPhoneNumber({
      id: author?.id,
      phone: phoneData,
    }).then((res) => {
      if (res.data.status) {
        oneInstituteDashboardRefetch();
        setMessage(res.data.message);
        setRun(true);
        setPhoneData({ insPhoneNumber: "" });
      }
    });
  };

  const debouncUsernameSearch = useCallback(
    debounce((val) => verifyUsername(val), 500),
    []
  );
  const searchHandler = (val) => {
    debouncUsernameSearch(val);
    setUsername(val);
  };

  const onUsernameEidt = () => {
    if (username === oneInstituteDashboard?.institute?.name) {
    } else {
      if (["valid", ""]?.includes(validInput?.username)) {
        setDisabled((pre) => !pre);
        exitsingUsernameEdit({
          o_name: oneInstituteDashboard?.institute?.name,
          n_name: username,
        })
          .then((res) => {
            if (!res.data.flag) {
              setNotificationState({
                msg: res.data.message,
                run: true,
              });
            } else {
              oneInstituteDashboardRefetch();
            }
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  // console.info(oneInstituteDashboard);

  return (
    <>
      {message !== "" ? (
        <UpdateStatus run={run} setRun={setRun} msg={message} />
      ) : (
        ""
      )}
      <div className={style.recovery}>
        <h6>
          {t("add_recovery_email")} (
          {oneInstituteDashboard?.institute?.recoveryMail})
        </h6>
        <input
          type="email"
          name="recoveryMail"
          value={emailData.recoveryMail}
          onChange={(e) =>
            setEmailData({ ...emailData, recoveryMail: e.target.value })
          }
          placeholder={t("add_recovery_details")}
        />

        {emailData.recoveryMail !== "" ? (
          <button
            className={`${style.btn}`}
            type="button"
            onClick={RecoveryMailUpdate}
          >
            {t("update")}
          </button>
        ) : (
          <button type="button" className={`${style.btn}`} disabled>
            {t("update")}
          </button>
        )}

        <div style={{ width: "100%", marginTop: "4vw" }}>
          <h6>
            {t("add_recovery_phone_no")} (
            {oneInstituteDashboard?.institute?.insPhoneNumber})
          </h6>
          <input
            type="tel"
            name="insPhoneNumber"
            value={phoneData.insPhoneNumber}
            maxLength="10"
            minLength="10"
            onChange={(e) =>
              setPhoneData({ ...phoneData, insPhoneNumber: e.target.value })
            }
            placeholder={t("add_recovery_phone_no")}
          />
          {phoneData.insPhoneNumber !== "" ? (
            <button
              className={`${style.btn}`}
              type="button"
              onClick={RecoveryPhoneUpdate}
            >
              {t("update")}
            </button>
          ) : (
            <button type="button" className={`${style.btn}`} disabled>
              {t("update")}
            </button>
          )}
        </div>

        <div style={{ width: "100%", marginTop: "4vw" }}>
          <h6>
            {t("edit_username")}
            {!["valid", ""]?.includes(validInput?.username) && (
              <span className={style.errorspan}>
                {` `} {t("username_is_already_exits")}
              </span>
            )}
          </h6>
          <input
            type="text"
            name="username"
            value={username}
            maxLength="10"
            minLength="10"
            onChange={(e) => searchHandler(e.target.value)}
            placeholder={t("type_username")}
          />
          {username !== "" ? (
            <button
              className={`${style.btn}`}
              type="button"
              onClick={onUsernameEidt}
            >
              {t("update")}
            </button>
          ) : (
            <button type="button" className={`${style.btn}`} disabled>
              {t("update")}
            </button>
          )}
        </div>
        {/* <div className={style.dltbtn} onClick={switchh}>
        {t("Deactive Account")}
      </div> */}
      </div>
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default Recovery;
