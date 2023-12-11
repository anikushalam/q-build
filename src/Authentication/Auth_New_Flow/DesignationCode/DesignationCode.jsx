import React, { useEffect } from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { NumberInput } from "../InputWithIcon/InputWithIcon";
import ButtonWithAction from "../../../Custom/Button/ButtonWithAction";
import { useState } from "react";
import AccountItem from "../ExistingAccounts/AccountItem";
import { useNavigate } from "react-router-dom";
import { useSearchCodeForJoin } from "../../../hooks/authentication-api";
import { imageShowUrl } from "../../../services/BaseUrl";
import QLoader from "../../../Loader/QLoader";
import { Notfication } from "../../../validation/Snackbar";
import { useTranslation } from "react-i18next";

function DesignationCode({ status, mobileNumber }) {
  const { t } = useTranslation();
  const [showLoader, setShowLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);
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
      joinAs: status === "student" ? "Student" : "Staff",
    },
    skip: refetchStatus,
  });

  useEffect(() => {
    if (searchCodeForJoin?.seen) {
      if (searchCodeForJoin?.classes?.classCode) {
        setShowLoader(false);
      } else if (searchCodeForJoin?.one_ins?.staffJoinCode) {
        setShowLoader(false);
      } else {
        setShowLoader(false);
        setNotificationState({
          msg: t("code_not_valid"),
          run: joinCode ? true : false,
        });
      }
    } else {
      setShowLoader(false);
      setNotificationState({
        msg: t("code_not_valid"),
        run: joinCode ? true : false,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchCodeForJoin?.classes?.classCode,
    searchCodeForJoin?.one_ins,
    searchCodeForJoin?.seen,
    refetchStatus,
  ]);

  // useEffect(() => {
  //   if (!searchCodeForJoin?.seen) {
  //     setShowLoader(false);
  //     setNotificationState({
  //       msg: "Enter code is not valid!",
  //       run: joinCode ? true : false,
  //     });
  //   }
  // }, [refetchStatus, searchCodeForJoin?.seen]);
  useEffect(() => {
    if (joinCode?.length === 6) {
      setShowLoader(true);
      setRefetchStatus((pre) => !pre);
      searchCodeForJoinRefetch();
    }
  }, [joinCode]);
  const onCodeVerify = (e) => {
    setJoinCode(e.target.value);
  };
  // console.info("djgdjhgdjghkmg.hjgf", mobileNumber);
  const onApplyForm = () => {
    setDisabled((pre) => !pre);
    if (searchCodeForJoin?.classes?.classCode) {
      setShowLoader(false);
      navigate("/q/joining", {
        state: {
          joinCode: joinCode,
          formAs: "STUDENT",
          verifyNumber: mobileNumber,
          openAs: "DIRECT",
        },
      });
    } else if (searchCodeForJoin?.one_ins?.staffJoinCode) {
      setShowLoader(false);
      navigate("/q/joining", {
        state: {
          joinCode: joinCode,
          formAs: "STAFF",
          verifyNumber: mobileNumber,
          openAs: "DIRECT",
          instituteId: searchCodeForJoin?.one_ins?._id,
        },
      });
    } else {
    }
  };
  return (
    <>
      {status === "student" && (
        <div className={style.card}>
          <h6 className={style.cardhdark}>{t("existing_student")}</h6>

          <p className={`${style.pusername} ${style.ptoc}`}>
            {t("enter_code_by_ins")}
          </p>
          <div className={style.change_pass_input}>
            <h3 className={style.input_label}>Class Code</h3>
            <NumberInput
              icon="/images/landing-page/class_code.svg"
              placeholder={t("enter_six_digit_code")}
              name="classCode"
              maxlength="6"
              onChange={onCodeVerify}
              value={joinCode}
            />
            <p className={style.ptoc}>{t("after_enter_code")}</p>
          </div>
          {searchCodeForJoin?.one_ins && (
            <>
              <p className={`${style.pusername} ${style.ptoc}`}>
                {t("vode_belong")}
              </p>
              <div className={style.accounts_container} onClick={onApplyForm}>
                <AccountItem
                  name={searchCodeForJoin?.one_ins?.insName || ""}
                  username={
                    `${searchCodeForJoin?.classes?.className} - ${searchCodeForJoin?.classes?.classTitle}` ||
                    ""
                  }
                  profileimg={
                    searchCodeForJoin?.one_ins?.insProfilePhoto
                      ? `${imageShowUrl}/${searchCodeForJoin?.one_ins?.insProfilePhoto}`
                      : "/images/car.jpg"
                  }
                  defaultImg="/images/profileAndCover/classroom-cover.svg"
                  Access={true}
                />
              </div>
            </>
          )}

          <div className={style.btn_containerstaff}>
            <ButtonWithAction
              disabled={disabled}
              buttonText={t("next")}
              customStyleButton={{
                minHeight: "3vw",
                marginTop: "0rem",
              }}
              onAction={onApplyForm}
            />
          </div>
        </div>
      )}

      {status === "staff" && (
        <div className={style.card}>
          <h6 className={style.cardhdark}>{t("existing_staff")}</h6>

          <p className={`${style.pusername} ${style.ptoc}`}>
            {t("enter_code_by_ins")}
          </p>
          <div className={style.change_pass_input}>
            <h3 className={style.input_label}>{t("institute_code")}</h3>
            <NumberInput
              icon="/images/landing-page/class_code.svg"
              placeholder={t("enter_six_digit_ins_code")}
              name="staffCode"
              maxlength="6"
              onChange={onCodeVerify}
              value={joinCode}
            />
            <p className={style.ptoc}>{t("after_enter_code")}</p>
          </div>
          {searchCodeForJoin?.one_ins && (
            <>
              <p>{t("vode_belong")}</p>
              <div className={style.accounts_container} onClick={onApplyForm}>
                <AccountItem
                  name={searchCodeForJoin?.one_ins?.insName || ""}
                  username={searchCodeForJoin?.one_ins?.name || ""}
                  profileimg={
                    searchCodeForJoin?.one_ins?.insProfilePhoto
                      ? `${imageShowUrl}/${searchCodeForJoin?.one_ins?.insProfilePhoto}`
                      : "/images/car.jpg"
                  }
                  defaultImg="/images/profileAndCover/ins_default_profile.svg"
                  Access={true}
                />
              </div>
            </>
          )}
          <div className={style.btn_containerstaff}>
            <ButtonWithAction
              disabled={disabled}
              buttonText={t("next")}
              customStyleButton={{
                minHeight: "2.3rem",
                marginTop: "0",
              }}
              customStyleButtonText={{
                fontSize: "1rem",
              }}
              onAction={onApplyForm}
            />
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

export default DesignationCode;
