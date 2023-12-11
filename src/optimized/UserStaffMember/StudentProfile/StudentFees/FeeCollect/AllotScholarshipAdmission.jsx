import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useAdmissionGovernmentGrantFinance } from "../../../../../../hooks/member_tab/finance-api";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { Notfication } from "../../../../../../validation/Snackbar";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../AdmissionScholarship.module.css";
import { useGovernmentCollectNewAddFeesByAdmission } from "../../../../../../hooks/member_tab/admission-api";

const AllotScholarshipAdmission = ({
  onClose,
  installment,
  onAdmissionFeesRefetch,
  onFeesRefetch,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [admissionGovernmentGrantFinance] =
    useAdmissionGovernmentGrantFinance();
  const [governmentCollectNewAddFeesByAdmission] =
    useGovernmentCollectNewAddFeesByAdmission();
  let myDate = new Date();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  // console.info("thism,snfmda", installment);
  const [payData, setPayData] = useState({
    amount: "",
    mode: "Online",
    fee_payment_mode: "Government/Scholarship",
    fee_payment_amount: "",
    transaction_date: myDate.toISOString()?.substring(0, 10),
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
  });
  const onAllot = () => {
    if (getQuery?.state?.exceedAmount >= payData.amount) {
      setDisabled((pre) => !pre);
      if (
        installment?.studentId !== "" &&
        installment?.install?.appId !== "" &&
        getQuery?.state?.scid !== ""
      ) {
        setDisabled(true);
        if (installment?.is_already_made) {
          governmentCollectNewAddFeesByAdmission({
            sid: installment?.studentId,
            appId: installment?.install?.appId,
            governmentData: {
              ...payData,
              type: installment?.install?.installmentValue,
              scid: getQuery?.state?.scid,
              remain_1: installment?.install?._id,
              rid: installment?.rid,
            },
          })
            .then((res) => {
              if (res.data.paid) {
                onAdmissionFeesRefetch();
                onFeesRefetch();
                setDisabled((pre) => !pre);
                onClose();
              }
            })
            .catch({});
        } else {
          admissionGovernmentGrantFinance({
            sid: installment?.studentId,
            appId: installment?.install?.appId,
            governmentData: {
              ...payData,
              type: installment?.install?.installmentValue,
              scid: getQuery?.state?.scid,
            },
          })
            .then((res) => {
              if (res.data.paid) {
                onAdmissionFeesRefetch();
                onFeesRefetch();
                setDisabled((pre) => !pre);
                onClose();
              }
            })
            .catch({});
        }
      }
    } else {
      setNotificationState({
        msg: `You cannot enter amount greater than unused amout Rs. ${getQuery?.state?.exceedAmount}`,
        run: true,
      });
    }
  };

  const onInputChage = (e) => {
    setPayData((prev) => ({
      ...prev,
      amount: +e.target.value,
      fee_payment_amount: +e.target.value,
    }));
  };
  //   console.info(",mbsfhdbsf installment", installment);
  return (
    <PopupWrapper onClose={onClose}>
      <section className={style.allot_container}>
        <h6>
          {t("allot_scholer_to_student")}

          {`${installment?.student?.studentFirstName ?? ""} ${
            installment?.student?.studentMiddleName ?? ""
          } ${installment?.student?.studentLastName ?? ""}`}
        </h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <JoinFormInput
          labelText={t("enter_amount")}
          type="number"
          placeholder={t("enter_amount_placeholder")}
          onChange={onInputChage}
          value={payData.amount}
        />
        <button
          className={style.applicable_to_btn}
          style={{
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
          onClick={onAllot}
        >
          {t("allot")}
        </button>
      </section>
      {disabled && <QLoader />}
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </PopupWrapper>
  );
};

export default AllotScholarshipAdmission;
