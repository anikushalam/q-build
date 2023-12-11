import React, { useState } from "react";
import style from "./DeleteAcnt.module.css";
import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router";
// import { usePostDeactivateAccountMutation } from "../../../../../../services/qvipleAPI";
import { UpdateStatus } from "../../../../../../validation/Snackbar";

function DeleteAcnt() {
  // const navigate = useNavigate();
  const { t } = useTranslation();
  const [passwordData, setPasswordData] = useState({
    password: "",
  });
  const [message, setMessage] = useState();
  const [run, setRun] = useState(false);

  if (false) {
    setMessage("");
  }

  // const [deactivateData] = usePostDeactivateAccountMutation();

  // const DeactivateAccountUpdate = () => {
  //   deactivateData(passwordData).then((res) => {
  //     if (res.data.status) {
  //       setMessage(res.data.message);
  //       setRun(true);
  //       navigate("/login");
  //     }
  //   });
  // };

  return (
    <>
      {message !== "" ? (
        <UpdateStatus msg={message} run={run} setRun={setRun} />
      ) : (
        ""
      )}
      <div className={style.settingBody}>
        <h6>{t("deactivate_acount")}</h6>
        <p>{t("deactive_qvpile_details")}</p>

        <div className={style.inputContainer}>
          <label>{t("password")}</label>
          <input
            type="password"
            value={passwordData.password}
            onChange={(e) =>
              setPasswordData({ ...passwordData, password: e.target.value })
            }
          />
        </div>

        {passwordData.password !== "" ? (
          <button className={`${style.btn}`} type="button">
            {t("update")}
          </button>
        ) : (
          <button type="button" className={`${style.btn}`} disabled>
            {t("update")}
          </button>
        )}
      </div>
    </>
  );
}

export default DeleteAcnt;
