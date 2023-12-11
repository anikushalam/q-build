import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import style from "./Notification/Notification.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useInstitutePaymentToggle } from "../../../../../hooks/setting-api";
import { Notfication } from "../../../../../validation/Snackbar";
import FormToggle from "../../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import { useOneInstituteProfile } from "../../../../../hooks/dashboard/dashboard-api";
const InstitutePaymetToggle = () => {
  const { t } = useTranslation();
  const author = useSelector((state) => state.authChange);
  const [msg, setMsg] = useState("");
  const [run, setRun] = useState(false);
  const [state, setState] = useState({
    razor: false,
    paytm: false,
  });

  const [institutePaymentToggle] = useInstitutePaymentToggle();
  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: author?.id,
        type: "ID",
      },
      skip: !author?.id,
    });
  useEffect(() => {
    if (author?.id) oneInstituteProfileRefetch();
  }, [author?.id, oneInstituteProfileRefetch]);

  useEffect(() => {
    if (oneInstituteProfile?.institute?.merchant_options) {
      setState({
        razor: oneInstituteProfile?.institute?.merchant_options?.razor_pay,
        paytm: oneInstituteProfile?.institute?.merchant_options?.paytm,
      });
    }
  }, [oneInstituteProfile?.institute?.merchant_options]);

  const onSubmitFormHandler = (field, value) => {
    if (author?.id) {
      const updatedObj = { ...state };
      for (let obj in updatedObj) {
        if (obj === field) {
          updatedObj[obj] = value;
        }
      }
      institutePaymentToggle({
        id: author?.id,
        formSetting: updatedObj,
      })
        .then(() => {
          setMsg("Add joining details updated");
          setRun(true);
        })
        .catch({});
      setState((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  return (
    <>
      <div
        className={style.notification}
        style={{
          minHeight: "fit-content",
          padding: "1rem",
          height: "30rem",
        }}
      >
        <h5>{t("payment_setting")}</h5>

        <FormToggle
          labelHeading={t("turn_on_paytm")}
          labelDescription=""
          defaultLabel={false}
          checkedToggle={state.paytm}
          onToggleHandler={(e) =>
            onSubmitFormHandler("paytm", e.target.checked)
          }
        />
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <FormToggle
          labelHeading={t("turn_on_razor")}
          labelDescription=""
          defaultLabel={false}
          checkedToggle={state.razor}
          onToggleHandler={(e) =>
            onSubmitFormHandler("razor", e.target.checked)
          }
        />
      </div>
      <Notfication
        run={run}
        setRun={setRun}
        msg={msg}
        postiton="bottom"
        type="success"
      />
    </>
  );
};

export default InstitutePaymetToggle;
