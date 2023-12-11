import React, { useCallback, useEffect, useState } from "react";
import style from "./Recovery.module.css";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import {
  usePostUserRecoveryMailMutation,
  usePostUserRecoveryPhoneNumberMutation,
  usePatchUserRestrictAgeMutation,
  useGetUsserAgeRestrictionQuery,
} from "../../../../../../services/qvipleAPI";
import {
  Notfication,
  UpdateStatus,
} from "../../../../../../validation/Snackbar";
import { useUserSignup } from "../../../../../../Authentication/Signup/UserSignUp/components/use-user-signup";
import { useExitsingUsernameEdit } from "../../../../../../hooks/authentication-api";
import { debounce } from "lodash";
import QLoader from "../../../../../../Loader/QLoader";

function Recovery({ switchh, dashboardData, dashboardFetch }) {
  const { t } = useTranslation();
  // const author = useSelector((state) => state.authChange);
  // const { data: dashboardData, refetch: dashboardFetch } =
  //   useGetSingleInsDataQuery(author?.id);
  const [emailData, setEmailData] = useState({ recoveryMail: "" });
  const [phoneData, setPhoneData] = useState({ userPhoneNumber: "" });

  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });

  const [message, setMessage] = useState();
  const [run, setRun] = useState(false);
  const [recoveryMailData] = usePostUserRecoveryMailMutation();
  const [recoveryPhoneData] = usePostUserRecoveryPhoneNumberMutation();
  const [restrictAge] = usePatchUserRestrictAgeMutation();
  const { data: ageRestrictData } = useGetUsserAgeRestrictionQuery();

  const { validInput, verifyUsername } = useUserSignup();
  const [exitsingUsernameEdit] = useExitsingUsernameEdit();

  const [ageStatus, setAgeStatus] = useState(
    ageRestrictData?.status === "No" ? false : true
  );

  useEffect(() => {
    if (dashboardData?.user?.username)
      setUsername(dashboardData?.user?.username);
  }, [dashboardData?.user?.username]);

  const RecoveryMailUpdate = () => {
    setDisabled((pre) => !pre);

    recoveryMailData(emailData).then((res) => {
      if (res.data.message) {
        dashboardFetch();
        setMessage(res.data.message);
        setRun(true);
        setEmailData({ recoveryMail: "" });
        setDisabled((pre) => !pre);
      }
    });
  };

  const RecoveryPhoneUpdate = () => {
    setDisabled((pre) => !pre);

    recoveryPhoneData(phoneData).then((res) => {
      if (res.data.message) {
        dashboardFetch();
        setMessage(res.data.message);
        setRun(true);
        setPhoneData({ insPhoneNumber: "" });
        setDisabled((pre) => !pre);
      }
    });
  };

  const handleChange = () => {
    setDisabled((pre) => !pre);

    restrictAge().then((res) => {
      if (res.data.restrict) {
        setAgeStatus(!ageStatus);
        setDisabled((pre) => !pre);
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
    if (username === dashboardData?.user?.username) {
    } else {
      if (["valid", ""]?.includes(validInput?.username)) {
        setDisabled((pre) => !pre);
        exitsingUsernameEdit({
          o_name: dashboardData?.user?.username,
          n_name: username,
        })
          .then((res) => {
            if (!res.data.flag) {
              setNotificationState({
                msg: res.data.message,
                run: true,
              });
            } else {
              dashboardFetch();
            }
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };

  // console.info("thismadd dklks", dashboardData);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      {message !== "" ? (
        <UpdateStatus run={run} setRun={setRun} msg={message} />
      ) : (
        ""
      )}
      <div className={style.recovery}>
        <div className={style.recoveryInner}>
          <h6>{t("restriction_controller")}</h6>
          <div className={style.control}>
            <h6 className={style.age}>{t("age_over_13")}</h6>
            <Switch {...label} checked={ageStatus} onChange={handleChange} />
          </div>
          {/* <div className={style.control}>
            <h6>Concentration Mode </h6>
            <Switch {...label} />
          </div> */}
        </div>

        <h6>
          {t("add_recovery_email")} ({dashboardData?.user?.recoveryMail || ""})
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
            {t("add_recovery_phone_no")} ({dashboardData?.user?.userPhoneNumber}
            )
          </h6>
          <input
            type="tel"
            name="insPhoneNumber"
            value={phoneData.userPhoneNumber}
            maxLength="10"
            minLength="10"
            onChange={(e) =>
              setPhoneData({ ...phoneData, userPhoneNumber: e.target.value })
            }
            placeholder={t("enter_recovery_phone")}
          />
          {phoneData.userPhoneNumber !== "" ? (
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

        <div className={style.dltbtn} onClick={switchh}>
          {t("deactivate")}
        </div>
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
