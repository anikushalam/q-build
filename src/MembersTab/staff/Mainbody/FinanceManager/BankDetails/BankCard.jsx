import React from "react";
import FinanceTabChangeLink from "../FinanceTabChangeLink";
import style from "./BankDetails.module.css";
import JoinFormInputView from "../../../../../JoiningForm/Student/Form/JoinFormInputView";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import InstituteFinanceTabChangeLink from "../../../../../Finance/Institute/Mainbody/InstituteFinanceTabChangeLink";
const containerStyle = { width: "100%", marginTop: "0", marginBottom: "0" };
const labelStyle = {
  fontWeight: "400",
  fontSize: "12px",
  color: "rgba(18, 18, 18, 0.8)",
};
const BankCardInnerData = ({ bank }) => {
  const { t } = useTranslation();

  return (
    <div
      className={style.bank_card}
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div className={style.bank_card_heading}>
        <img src="/images/finance/bank-card-icon.svg" alt="bank icon" />
        <div className={style.bank_card_text}>
          <h6>{bank?.finance_bank_name ?? ""}</h6>
          <p>
            {bank?.department?.dName
              ? bank?.department?.dName
              : bank?.hostel
              ? "Hostel"
              : bank?.library
              ? "Library"
              : bank?.transport
              ? "Transport"
              : bank?.departments?.length > 0
              ? bank?.departments?.map((dept, index) => (
                  <span key={dept?._id}>
                    {dept?.dName ?? ""}
                    {index + 1 === bank?.departments?.length ? "" : ", "}
                  </span>
                ))
              : ""}
          </p>
        </div>
      </div>
      <section className={style.bank_details_heading}>
        <h6>
          {t("applicable_for")} {` : `}{" "}
        </h6>
        <JoinFormInputView
          labelText={``}
          value={
            bank?.department?.dName
              ? bank?.department?.dName
              : bank?.hostel
              ? "Hostel"
              : bank?.library
              ? "Library"
              : bank?.transport
              ? "Transport"
              : bank?.departments?.length > 0
              ? bank?.departments?.map((dept, index) => (
                  <span key={dept?._id}>
                    {dept?.dName ?? ""}
                    {index + 1 === bank?.departments?.length ? "" : ", "}
                  </span>
                ))
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
      <section className={style.bank_details_heading}>
        <h6>{t("bank_details")}</h6>
        <JoinFormInputView
          labelText={`${t("bank_name_collect")} :`}
          value={bank?.finance_bank_name}
          customStyleContainer={containerStyle}
          customStyleLabel={labelStyle}
          customStyleValue={labelStyle}
        />
        <JoinFormInputView
          labelText={`${t("account_name")} :`}
          value={bank?.finance_bank_account_name}
          customStyleContainer={containerStyle}
          customStyleLabel={labelStyle}
          customStyleValue={labelStyle}
        />
        <JoinFormInputView
          labelText={`${t("account_number")} :`}
          value={bank?.finance_bank_account_number}
          customStyleContainer={containerStyle}
          customStyleLabel={labelStyle}
          customStyleValue={labelStyle}
        />
        <JoinFormInputView
          labelText={`${t("ifsc_code")} :`}
          value={bank?.finance_bank_ifsc_code}
          customStyleContainer={containerStyle}
          customStyleLabel={labelStyle}
          customStyleValue={labelStyle}
        />
        <JoinFormInputView
          labelText={`${t("address")} :`}
          value={bank?.finance_bank_branch_address}
          customStyleContainer={containerStyle}
          customStyleLabel={labelStyle}
          customStyleValue={labelStyle}
        />
      </section>
      <section className={style.bank_details_heading}>
        <JoinFormInputView
          labelText={`${t("upi_id")} :`}
          value={bank?.finance_bank_upi_id}
          customStyleContainer={containerStyle}
          customStyleLabel={labelStyle}
          customStyleValue={labelStyle}
        />
      </section>
      <section
        className={style.bank_details_heading1}
        style={{
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <div
          className={style.bank_qr_code_text}
          style={{
            margin: "0",
          }}
        >
          <h6>{t("qr_code")}:</h6>
          <p>{bank?.finance_bank_upi_id ?? ""}</p>
        </div>
        {bank?.finance_bank_upi_qrcode ? (
          <img
            src={`${imageShowUrl}/${bank?.finance_bank_upi_qrcode}`}
            alt="qr code"
          />
        ) : (
          ""
        )}
      </section>
    </div>
  );
};
const BankCard = ({
  bank,
  carryParentState,
  viewAs,
  onChooseBank,
  callApi,
}) => {
  const { t } = useTranslation();
  return (
    <>
      {viewAs === "ADMISSION_ADMIN" ? (
        <div
          className={style.bank_card}
          style={{
            cursor: "pointer",
          }}
          title="Filter receipts by Bank"
          onClick={() => onChooseBank(bank)}
        >
          <img src="/images/finance/bank-card-icon.svg" alt="bank icon" />
          <div className={style.bank_card_text}>
            <h6>{bank?.finance_bank_name ?? ""}</h6>
            <p>
              {bank?.department?.dName
                ? bank?.department?.dName
                : bank?.hostel
                ? "Hostel"
                : bank?.library
                ? "Library"
                : bank?.transport
                ? "Transport"
                : bank?.departments?.length > 0
                ? bank?.departments?.map((dept, index) => (
                    <span key={dept?._id}>
                      {dept?.dName ?? ""}
                      {index + 1 === bank?.departments?.length ? "" : ", "}
                    </span>
                  ))
                : ""}
            </p>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "49%",
          }}
        >
          {viewAs === "INSTITUTE" ? (
            <InstituteFinanceTabChangeLink
              carryParentState={{
                bankId: bank?._id,
              }}
              activeTab={`?a=bank&n=${bank?.finance_bank_name}`}
            >
              <BankCardInnerData bank={bank} />
            </InstituteFinanceTabChangeLink>
          ) : (
            <FinanceTabChangeLink
              carryParentState={{
                ...carryParentState,
                bankId: bank?._id,
              }}
              activeTab={`bank&n=${bank?.finance_bank_name}`}
              callApi={callApi}
            >
              <BankCardInnerData bank={bank} />
            </FinanceTabChangeLink>
          )}
        </div>
      )}
    </>
  );
};

export default BankCard;
