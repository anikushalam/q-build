import FormInputView from "../../../Ui/Input/FormInputView";
import style from "./BankDetail.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../Services/UrlConfig/BaseUrl";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
let valueStyle = {
  fontWeight: "400",
};
const BankDetailCard = ({ bank }) => {
  const { t } = useTranslation();
  return (
    <div className={style.bank_detail_card}>
      <div className={style.bank_detail_card_heading}>
        <img src={`${assestsUserFinanceUrl}/bank-card.svg`} alt="bank icon" />
        <div className={style.bank_detail_card_inner}>
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
      <section className={style.bank_detail_applicable}>
        <h6>
          {t("applicable_for")} {` : `}{" "}
        </h6>
        <FormInputView
          label={
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
          customFormInputLabel={valueStyle}
        />
      </section>
      <section className={style.bank_detail_applicable}>
        <h6>{t("bank_details")}</h6>
        <FormInputView
          label={`${t("bank_name")} :`}
          value={bank?.finance_bank_name}
          customFormInput={valueStyle}
        />
        <FormInputView
          label={`${t("account_name")} :`}
          value={bank?.finance_bank_account_name}
          customFormInput={valueStyle}
        />
        <FormInputView
          label={`${t("account_number")} :`}
          value={bank?.finance_bank_account_number}
          customFormInput={valueStyle}
        />
        <FormInputView
          label={`${t("ifsc_code")} :`}
          value={bank?.finance_bank_ifsc_code}
          customFormInput={valueStyle}
        />
        <FormInputView
          label={`${t("address")} :`}
          value={bank?.finance_bank_branch_address}
          customFormInput={valueStyle}
        />
      </section>
      <FormInputView
        label={`${t("upi_id")} :`}
        value={bank?.finance_bank_upi_id}
        customFormInput={valueStyle}
      />
      <section
        className={style.bank_detail_card_upi}
        style={{
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <div className={style.bank_detail_card_qr}>
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

export default BankDetailCard;
