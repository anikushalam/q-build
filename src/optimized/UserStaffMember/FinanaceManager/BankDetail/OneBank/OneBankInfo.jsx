import { useTranslation } from "react-i18next";
import style from "../BankDetail.module.css";
import FormInputView from "../../../../Ui/Input/FormInputView";
import { imageShowUrl } from "../../../../Services/UrlConfig/BaseUrl";
const labelStyle = {
  fontWeight: "400",
  fontSize: "12px",
};
const OneBankInfo = ({ oneBank }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className={style.bank_details}>
        <h6>
          {t("applicable_for")} {` : `}{" "}
        </h6>
        <FormInputView
          label={``}
          value={
            oneBank?.department?.dName
              ? oneBank?.department?.dName
              : oneBank?.hostel
              ? "Hostel"
              : oneBank?.library
              ? "Library"
              : oneBank?.transport
              ? "Transport"
              : oneBank?.departments?.length > 0
              ? oneBank?.departments?.map((dept, index) => (
                  <span key={dept?._id}>
                    {dept?.dName ?? ""}
                    {index + 1 === oneBank?.departments?.length ? "" : ", "}
                  </span>
                ))
              : ""
          }
          customFormInput={labelStyle}
          customFormInputLabel={{
            ...labelStyle,
            marginLeft: "-0.8rem",
          }}
        />
      </section>
      <section className={style.bank_details}>
        <h6>{t("bank_details")}</h6>
        <FormInputView
          label={`${t("bank_name")} :`}
          value={oneBank?.finance_bank_name}
          customFormInput={labelStyle}
          customFormInputLabel={labelStyle}
        />
        <FormInputView
          label={`${t("account_name")} :`}
          value={oneBank?.finance_bank_account_name}
          customFormInput={labelStyle}
          customFormInputLabel={labelStyle}
        />
        <FormInputView
          label={`${t("account_number")} :`}
          value={oneBank?.finance_bank_account_number}
          customFormInput={labelStyle}
          customFormInputLabel={labelStyle}
        />
        <FormInputView
          label={`${t("ifsc_code")} :`}
          value={oneBank?.finance_bank_ifsc_code}
          customFormInput={labelStyle}
          customFormInputLabel={labelStyle}
        />
        <FormInputView
          label={`${t("address")} :`}
          value={oneBank?.finance_bank_branch_address}
          customFormInput={labelStyle}
          customFormInputLabel={labelStyle}
        />
      </section>
      <section className={style.bank_upi}>
        <FormInputView
          label={`${t("upi_id")} :`}
          value={oneBank?.finance_bank_upi_id}
          customFormInput={labelStyle}
          customFormInputLabel={labelStyle}
        />
      </section>
      <section className={style.bank_qr_code}>
        <div className={style.bank_qr_code_text}>
          <h6>{t("qr_code")}:</h6>
          <p>{oneBank?.finance_bank_upi_id ?? ""}</p>
        </div>
        {oneBank?.finance_bank_upi_qrcode ? (
          <img
            src={`${imageShowUrl}/${oneBank?.finance_bank_upi_qrcode}`}
            alt="qr code"
          />
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default OneBankInfo;
