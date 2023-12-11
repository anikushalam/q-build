import React, { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetBankByFinance,
  useGetOneBankByFinance,
  usePaymentModeUpdateFinance,
} from "../../../../../hooks/member_tab/finance-api";
import JoinFormInputView from "../../../../../JoiningForm/Student/Form/JoinFormInputView";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import FormToggle from "../../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import { Notfication } from "../../../../../validation/Snackbar";
import style from "./BankDetails.module.css";
import BankMenu from "./BankMenu";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";

const containerStyle = { width: "100%", marginTop: "0", marginBottom: "0" };
const labelStyle = {
  fontWeight: "400",
  fontSize: "12px",
  color: "rgba(18, 18, 18, 0.8)",
};

const BankDetailInfo = ({ fid, getAllBankByFinanceRefetch }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [openBankMenu, setOpenBankMenu] = useState("");
  const [diabledInfo, setDiabledInfo] = useState(false);
  const [paymentModeUpdateFinance] = usePaymentModeUpdateFinance();
  const [paymentMode, setPaymentMode] = useState({
    cash: false,
    cheque: false,
    demand_draft: false,
    net_banking: false,
    upi_transfer: false,
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [index, setIndex] = useState(0);

  const tabList = [
    {
      name: t("bank_info"),
      id: 0,
    },
    {
      name: t("fund"),
      id: 1,
    },
  ];
  const { getOneBankByFinance, getOneBankByFinanceRefetch } =
    useGetOneBankByFinance({
      bid: getQuery.state.bankId,
      skip: !getQuery.state.bankId,
    });

  const { getBankByFinance, getBankByFinanceRefetch } = useGetBankByFinance({
    data: {
      fid: fid,
      flow: "",
      filter_by: "",
    },
    skip: !fid,
  });
  useEffect(() => {
    if (fid) getBankByFinanceRefetch();
  }, [fid, getBankByFinanceRefetch]);
  useEffect(() => {
    if (getQuery.state.bankId) getOneBankByFinanceRefetch();
  }, [getQuery.state.bankId, getOneBankByFinanceRefetch]);
  //
  useEffect(() => {
    if (getBankByFinance?.bank_query) {
      setPaymentMode({
        cash: getBankByFinance?.bank_query?.cash ?? false,
        cheque: getBankByFinance?.bank_query?.cheque ?? false,
        demand_draft: getBankByFinance?.bank_query?.demand_draft ?? false,
        net_banking: getBankByFinance?.bank_query?.net_banking ?? false,
        upi_transfer: getBankByFinance?.bank_query?.upi_transfer ?? false,
      });
    }
  }, [getBankByFinance?.bank_query]);

  const onSubmitFormHandler = (field, value) => {
    const updatedObj = { ...paymentMode };
    for (let obj in updatedObj) {
      if (obj === field) {
        updatedObj[obj] = value;
      }
    }
    paymentModeUpdateFinance({
      fid: fid,
      paymentModeUpdate: { payment_modes_type: updatedObj },
    })
      .then(() => {
        setNotificationState({
          msg: "Payment Mode is updated",
          run: true,
        });
      })
      .catch({});
    setPaymentMode((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onRefetch = () => {
    getOneBankByFinanceRefetch();
    getAllBankByFinanceRefetch();
  };
  const onTabChange = (val) => {
    setIndex(val);
  };
  return (
    <div className={style.bank}>
      {!diabledInfo && (
        <>
          <div className={style.bank_header}>
            <div className={style.bank_header_left}>
              <img
                src="/images/left-back-icon.svg"
                alt="back arrow"
                className={style.back_icon}
                onClick={() => navigate(-1)}
              />
              <h6 className={style.bank_header_title}>{t("bank_detail")}</h6>
            </div>
            <img
              src="/images/bank-edit-icon.svg"
              alt="back arrow"
              className={style.back_icon}
              onClick={() => setOpenBankMenu(getOneBankByFinance?.one_bank)}
            />
          </div>
          <UniversalTab
            tabList={tabList}
            activeIndexTab={index}
            setActiveIndexTab={onTabChange}
            showAs={false}
            customStyleTab={{
              width: "50%",
            }}
          />
          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "0.5rem",
            }}
          />
          {index === 0 && (
            <>
              <section
                className={style.bank_details}
                style={{
                  height: "fit-content",
                }}
              >
                <h6>
                  {t("applicable_for")} {` : `}{" "}
                </h6>
                <JoinFormInputView
                  labelText={``}
                  value={
                    getOneBankByFinance?.one_bank?.department?.dName
                      ? getOneBankByFinance?.one_bank?.department?.dName
                      : getOneBankByFinance?.one_bank?.hostel
                      ? "Hostel"
                      : getOneBankByFinance?.one_bank?.library
                      ? "Library"
                      : getOneBankByFinance?.one_bank?.transport
                      ? "Transport"
                      : getOneBankByFinance?.one_bank?.departments?.length > 0
                      ? getOneBankByFinance?.one_bank?.departments?.map(
                          (dept, index) => (
                            <span key={dept?._id}>
                              {dept?.dName ?? ""}
                              {index + 1 ===
                              getOneBankByFinance?.one_bank?.departments?.length
                                ? ""
                                : ", "}
                            </span>
                          )
                        )
                      : ""
                  }
                  customStyleContainer={containerStyle}
                  customStyleLabel={labelStyle}
                  customStyleValue={{
                    ...labelStyle,
                    marginLeft: "-1rem",
                  }}
                />
              </section>
              <section className={style.bank_details}>
                <h6>{t("bank_details")}</h6>
                <JoinFormInputView
                  labelText={`${t("bank_name_collect")} :`}
                  value={getOneBankByFinance?.one_bank?.finance_bank_name}
                  customStyleContainer={containerStyle}
                  customStyleLabel={labelStyle}
                  customStyleValue={labelStyle}
                />
                <JoinFormInputView
                  labelText={`${t("account_name")} :`}
                  value={
                    getOneBankByFinance?.one_bank?.finance_bank_account_name
                  }
                  customStyleContainer={containerStyle}
                  customStyleLabel={labelStyle}
                  customStyleValue={labelStyle}
                />
                <JoinFormInputView
                  labelText={`${t("account_number")} :`}
                  value={
                    getOneBankByFinance?.one_bank?.finance_bank_account_number
                  }
                  customStyleContainer={containerStyle}
                  customStyleLabel={labelStyle}
                  customStyleValue={labelStyle}
                />
                <JoinFormInputView
                  labelText={`${t("ifsc_code")} :`}
                  value={getOneBankByFinance?.one_bank?.finance_bank_ifsc_code}
                  customStyleContainer={containerStyle}
                  customStyleLabel={labelStyle}
                  customStyleValue={labelStyle}
                />
                <JoinFormInputView
                  labelText={`${t("address")} :`}
                  value={
                    getOneBankByFinance?.one_bank?.finance_bank_branch_address
                  }
                  customStyleContainer={containerStyle}
                  customStyleLabel={labelStyle}
                  customStyleValue={labelStyle}
                />
              </section>
              <section className={style.bank_upi}>
                <JoinFormInputView
                  labelText={`${t("upi_id")} :`}
                  value={getOneBankByFinance?.one_bank?.finance_bank_upi_id}
                  customStyleContainer={containerStyle}
                  customStyleLabel={labelStyle}
                  customStyleValue={labelStyle}
                />
              </section>
              <section className={style.bank_qr_code}>
                <div className={style.bank_qr_code_text}>
                  <h6>{t("qr_code")}:</h6>
                  <p>
                    {getOneBankByFinance?.one_bank?.finance_bank_upi_id ?? ""}
                  </p>
                </div>
                {getOneBankByFinance?.one_bank?.finance_bank_upi_qrcode ? (
                  <img
                    src={`${imageShowUrl}/${getOneBankByFinance?.one_bank?.finance_bank_upi_qrcode}`}
                    alt="qr code"
                  />
                ) : (
                  ""
                )}
              </section>
              <section>
                <h6>{t("payment_mode")}</h6>
                <FormToggle
                  labelHeading={t("online_payment_gateway")}
                  labelDescription={""}
                  defaultLabel={true}
                  customContainer={{
                    padding: "0",
                    marginBottom: "0.5rem",
                  }}
                />
                <FormToggle
                  labelHeading={t("cash")}
                  labelDescription={""}
                  defaultLabel={false}
                  checkedToggle={paymentMode.cash}
                  onToggleHandler={(e) =>
                    onSubmitFormHandler("cash", e.target.checked)
                  }
                  customContainer={{
                    padding: "0",
                    marginBottom: "0.5rem",
                  }}
                />
                <FormToggle
                  labelHeading={t("upi_transfer")}
                  labelDescription={""}
                  defaultLabel={false}
                  checkedToggle={paymentMode.upi_transfer}
                  onToggleHandler={(e) =>
                    onSubmitFormHandler("upi_transfer", e.target.checked)
                  }
                  customContainer={{
                    padding: "0",
                    marginBottom: "0.5rem",
                  }}
                />
                <FormToggle
                  labelHeading={t("neft_rtgs")}
                  labelDescription={""}
                  defaultLabel={false}
                  checkedToggle={paymentMode.net_banking}
                  onToggleHandler={(e) =>
                    onSubmitFormHandler("net_banking", e.target.checked)
                  }
                  customContainer={{
                    padding: "0",
                    marginBottom: "0.5rem",
                  }}
                />
                <FormToggle
                  labelHeading={t("cheque")}
                  labelDescription={""}
                  defaultLabel={false}
                  checkedToggle={paymentMode.cheque}
                  onToggleHandler={(e) =>
                    onSubmitFormHandler("cheque", e.target.checked)
                  }
                  customContainer={{
                    padding: "0",
                    marginBottom: "0.5rem",
                  }}
                />
                <FormToggle
                  labelHeading={t("demand_draft")}
                  labelDescription={""}
                  defaultLabel={false}
                  checkedToggle={paymentMode.demand_draft}
                  onToggleHandler={(e) =>
                    onSubmitFormHandler("demand_draft", e.target.checked)
                  }
                  customContainer={{
                    padding: "0",
                    marginBottom: "0.5rem",
                  }}
                />
              </section>
            </>
          )}
          {index === 1 && (
            <div className={style.bank_fund_container}>
              <div className={style.bank_fund}>
                <h6>{t("total_due")}</h6>
                <h5>
                  {t("rs")}. {getOneBankByFinance?.one_bank?.total_repay ?? 0}
                </h5>
              </div>
              <div className={style.bank_fund}>
                <h6>{t("bank_online_fees")}</h6>
                <h5>
                  {t("rs")}.{" "}
                  {getOneBankByFinance?.one_bank?.collect_online ?? 0}
                </h5>
              </div>
              <div className={style.bank_fund}>
                <h6>{t("repayment_due")}</h6>
                <h5>
                  {t("rs")}. {getOneBankByFinance?.one_bank?.due_repay ?? 0}
                </h5>
              </div>
            </div>
          )}
        </>
      )}
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="success"
        />
      )}
      {openBankMenu && (
        <BankMenu
          openBankMenu={openBankMenu}
          onClose={() => {
            setOpenBankMenu("");
            setDiabledInfo(false);
          }}
          onRefetch={onRefetch}
          setDiabledInfo={setDiabledInfo}
        />
      )}
    </div>
  );
};

export default BankDetailInfo;
