import BorderBottom from "@/Ui/Border/BorderBottom";
import CreateButton from "@/Ui/Button/CreateButton";
import FormInput from "@/Ui/Input/FormInput";
import Modal from "@/Ui/Modal/Modal";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../../FinanaceManager/FeesStructure/FeesStructure.module.css";
import { assestsUserFinanceUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import QvipleLoader from "@/Loader/QvipleLoader";
import { useLocation } from "react-router-dom";
import {
  useFinanceAllotScholarship,
  useFinanceAllotScholarshipNewAddFees,
} from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";

const CollectAsScholarship = ({ onClose, installment, admission }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  let myDate = new Date();
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");

  const [financeAllotScholarship] = useFinanceAllotScholarship();
  const [financeAllotScholarshipNewAddFees] =
    useFinanceAllotScholarshipNewAddFees();
  const [payment, setPayment] = useState({
    amount: "",
    mode: "Online",
    fee_payment_mode: "Government/Scholarship",
    fee_payment_amount: "",
    transaction_date: myDate.toISOString()?.substring(0, 10),
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
  });

  const onInputChage = (e) => {
    setPayment((prev) => ({
      ...prev,
      amount: +e.target.value,
      fee_payment_amount: +e.target.value,
    }));
  };

  const onAllot = () => {
    if (!payment.fee_payment_amount) {
      setErrorField({
        fee_payment_amount: "* required",
      });
    } else {
      if (getQuery?.state?.exceedAmount >= payData.amount) {
        setDisabled((pre) => !pre);
        if (
          installment?.studentId !== "" &&
          installment?.install?.appId !== "" &&
          getQuery?.state?.scid !== ""
        ) {
          setDisabled(true);
          if (installment?.is_already_made) {
            financeAllotScholarshipNewAddFees({
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
                  setDisabled((pre) => !pre);
                  onClose();
                }
              })
              .catch({});
          } else {
            financeAllotScholarship({
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
                  setDisabled((pre) => !pre);
                  onClose();
                }
              })
              .catch({});
          }
        }
      }
    }
  };

  // console.info("installment", installment, admission);
  return (
    <>
      <Modal>
        <div className={style.modal_container}>
          <UserMemberContentWrapper>
            <div className={style.modal_container_outer_header}>
              <div className={style.modal_container_header}>
                <h6>
                  {t("allot_scholer_to_student")}

                  {`${installment?.student?.studentFirstName ?? ""} ${
                    installment?.student?.studentMiddleName ?? ""
                  } ${installment?.student?.studentLastName ?? ""}`}
                </h6>
              </div>
              <img
                src={`${assestsUserFinanceUrl}/close.svg`}
                alt="close icon"
                onClick={onClose}
              />
            </div>
          </UserMemberContentWrapper>
          <BorderBottom />
          <UserMemberContentWrapper
            customStyle={{
              paddingTop: "0",
            }}
          >
            <FormInput
              label={t("enter_amount")}
              placeholder={t("enter_amount_placeholder")}
              name={"fee_payment_amount"}
              value={payment.fee_payment_amount}
              type={"tel"}
              onChange={onInputChage}
              errorShow={errorField["fee_payment_amount"]}
            />

            <CreateButton label="allot" onAction={onAllot} />
          </UserMemberContentWrapper>
        </div>
      </Modal>
      {disabled && <QvipleLoader />}
    </>
  );
};

export default CollectAsScholarship;
