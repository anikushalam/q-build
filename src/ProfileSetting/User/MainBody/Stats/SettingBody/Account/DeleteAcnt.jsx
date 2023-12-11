import React, { useState } from "react";
import style from "./DeleteAcnt.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { UpdateStatus } from "../../../../../../validation/Snackbar";
import { useDeactivateUserAccount } from "../../../../../../hooks/setting-api";
import { useSelector } from "react-redux";

function DeleteAcnt() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const today = new Date();
  today.setDate(today.getDate() + 2);
  const [passwordData, setPasswordData] = useState({
    password: "",
    status: "Deactivated",
    ddate: `${today.getFullYear()}-${
      (today.getMonth() + 1).toString().length === 1
        ? String(today.getMonth() + 1).padStart(2, "0")
        : today.getMonth() + 1
    }-${
      today.getDate().toString().length === 1
        ? String(today.getDate()).padStart(2, "0")
        : today.getDate()
    }`,
  });
  const id = useSelector((state) => state.idChange.id);
  const [message, setMessage] = useState();
  const [run, setRun] = useState(false);

  if (false) {
    setMessage("");
  }

  const [deactivateData] = useDeactivateUserAccount();

  // const DeactivateAccountUpdate = () =>{
  //   deactivateData(passwordData).then((res) =>{
  //     if(res.data.status){
  //       setMessage(res.data.message)
  //       setRun(true)
  //       navigate('/login')
  //     }
  //   })
  // }

  const handleDelete = () => {
    deactivateData({
      id: id,
      passwordData: passwordData,
    }).then((res) => {
      if (res.data.status) {
        setMessage(res.data.message);
        setRun(true);
        navigate("/login");
      }
    });
  };

  return (
    <>
      {message !== "" ? (
        <UpdateStatus msg={message} run={run} setRun={setRun} />
      ) : (
        ""
      )}
      <div className={style.settingBody}>
        <h6>{t("deactive_qvpile")}</h6>
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
          <button
            className={`${style.btn}`}
            type="button"
            onClick={handleDelete}
          >
            {t("delete")}
          </button>
        ) : (
          <button type="button" className={`${style.btn1}`} disabled>
            {t("delete")}
          </button>
        )}
      </div>
    </>
  );
}

export default DeleteAcnt;
