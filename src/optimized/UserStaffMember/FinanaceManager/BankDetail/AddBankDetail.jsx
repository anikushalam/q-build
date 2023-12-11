import { useTranslation } from "react-i18next";
import styleFinance from "../FinanceManager.module.css";
import { useCallback, useEffect, useState } from "react";
import BankSelectApplicable from "./BankSelectApplicable";
import { useFileUpload } from "../../../Hooks/ApiHooks/Auth/auth-api";
import { useFinanceAddBank } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import FormInput from "../../../Ui/Input/FormInput";
import FormFile from "../../../Ui/Input/FormFile";
import CreateButton from "../../../Ui/Button/CreateButton";
import QvipleLoader from "../../../Loader/QvipleLoader";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";

const AddBankDetail = ({
  onClose,
  fid,
  libraryId,
  transportId,
  hostelId,
  openAs,
  onEditAction,
  openBankMenu,
}) => {
  const { t } = useTranslation();
  const [fileUpload] = useFileUpload();
  const [financeAddBank] = useFinanceAddBank();

  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [bankDetails, setBankDetails] = useState({
    finance_bank_name: "",
    finance_bank_account_number: "",
    finance_bank_account_name: "",
    finance_bank_ifsc_code: "",
    finance_bank_branch_address: "",
    finance_bank_upi_id: "",
    finance_bank_upi_qrcode: "",
    finance_bank_re_account_number: "",
    finance_bank_re_upi_id: "",
  });
  const [applicableFor, setApplicablFor] = useState({
    flow: "",
    flow_id: "",
    flow_name: "",
    depart_arr: [],
  });
  const [file, setFile] = useState("");

  useEffect(() => {
    if (openAs === "EDIT") {
      setBankDetails({
        finance_bank_name: openBankMenu?.finance_bank_name ?? "",
        finance_bank_account_number:
          openBankMenu?.finance_bank_account_number ?? "",
        finance_bank_account_name:
          openBankMenu?.finance_bank_account_name ?? "",
        finance_bank_ifsc_code: openBankMenu?.finance_bank_ifsc_code ?? "",
        finance_bank_branch_address:
          openBankMenu?.finance_bank_branch_address ?? "",
        finance_bank_upi_id: openBankMenu?.finance_bank_upi_id ?? "",
        finance_bank_upi_qrcode: openBankMenu?.finance_bank_upi_qrcode ?? "",
        finance_bank_re_account_number:
          openBankMenu?.finance_bank_account_number ?? "",
        finance_bank_re_upi_id: openBankMenu?.finance_bank_upi_id ?? "",
      });
    }
  }, [openAs]);

  const onInputChange = (e) => {
    setBankDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFileUpload = useCallback((e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    setFile(e.target.files[0]);
    formData.append("file", e.target.files[0]);
    fileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        setDisabled((pre) => !pre);
        setBankDetails((prev) => ({
          ...prev,
          finance_bank_upi_qrcode: res.data?.imageKey,
        }));
      })
      .catch(() => {
        setDisabled((pre) => !pre);
      });
  }, []);

  const onSaveBankForm = useCallback(() => {
    if (openAs === "EDIT") {
      const validation = onBankValidationEdit(bankDetails);
      let flag = false;
      for (let errField in validation) {
        flag = true;
        break;
      }
      if (flag) {
        setErrorField(validation);
      } else {
        onEditAction(bankDetails);
      }
    } else {
      const validation = onBankValidation(bankDetails, applicableFor);
      let flag = false;
      for (let errField in validation) {
        flag = true;
        break;
      }
      if (flag) {
        setErrorField(validation);
      } else {
        setDisabled((pre) => !pre);
        financeAddBank({
          fid: fid,
          ...applicableFor,
          bankDetails: {
            ...bankDetails,
            depart_arr: applicableFor.depart_arr,
          },
        })
          .then(() => {
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch(() => {
            setDisabled((pre) => !pre);
          });
      }
    }
  }, [bankDetails]);

  return (
    <>
      <UserMemberContentWrapper>
        <div className={styleFinance.fm_header_start_container}>
          <img
            src={`${assestsUserFinanceUrl}/back-arrow.svg`}
            alt="back arrow"
            title="Add Bank"
            onClick={onClose}
          />
          <h6>
            {" "}
            {openAs === "EDIT"
              ? t("update_bank_details")
              : t("add_bank_details")}
          </h6>
        </div>
      </UserMemberContentWrapper>
      <BorderBottom />
      <UserMemberContentWrapper
        customStyle={{
          paddingTop: "0",
        }}
      >
        {openAs === "EDIT" ? null : (
          <BankSelectApplicable
            applicableFor={applicableFor}
            errorField={errorField}
            fid={fid}
            libraryId={libraryId}
            transportId={transportId}
            hostelId={hostelId}
            setApplicablFor={setApplicablFor}
          />
        )}

        <FormInput
          label={t("bank_name")}
          placeholder={t("bank_name_placeholder")}
          name={"finance_bank_name"}
          value={bankDetails.finance_bank_name}
          type={"text"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_name"]}
        />
        <FormInput
          label={t("account_name")}
          placeholder={t("account_name_placeholder")}
          name={"finance_bank_account_name"}
          value={bankDetails.finance_bank_account_name}
          type={"text"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_account_name"]}
        />
        <FormInput
          label={t("account_number")}
          placeholder={t("account_number_placeholder")}
          name={"finance_bank_account_number"}
          value={bankDetails.finance_bank_account_number}
          type={"tel"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_name"]}
        />

        <FormInput
          label={t("confirm_account_number")}
          placeholder={t("confirm_account_number_placeholder")}
          name={"finance_bank_re_account_number"}
          value={bankDetails.finance_bank_re_account_number}
          type={"tel"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_re_account_number"]}
          msg={errorField["finance_bank_re_account_number"]}
        />
        <FormInput
          label={t("ifsc_code")}
          placeholder={t("ifsc_code_placeholder")}
          name={"finance_bank_ifsc_code"}
          value={bankDetails.finance_bank_ifsc_code}
          type={"text"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_ifsc_code"]}
        />
        <FormInput
          label={t("address_of_bank")}
          placeholder={t("address_of_bank_placeholder")}
          name={"finance_bank_branch_address"}
          value={bankDetails.finance_bank_branch_address}
          type={"text"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_branch_address"]}
        />
        <FormInput
          label={t("upi_id")}
          placeholder={t("upi_id_placeholder")}
          name={"finance_bank_upi_id"}
          value={bankDetails.finance_bank_upi_id}
          type={"text"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_upi_id"]}
        />
        <FormInput
          label={t("confirm_upi_id")}
          placeholder={t("finance_bank_re_upi_id")}
          name={"finance_bank_re_upi_id"}
          value={bankDetails.finance_bank_re_upi_id}
          type={"text"}
          onChange={onInputChange}
          errorShow={errorField["finance_bank_re_upi_id"]}
          msg={errorField["finance_bank_re_upi_id"]}
        />
        <FormFile
          label={t("qr_code_above_upi")}
          name={"finance_bank_upi_qrcode"}
          value={
            file?.name
              ? {
                  name: file?.name,
                }
              : ""
          }
          onChange={onFileUpload}
          errorShow={errorField["finance_bank_upi_qrcode"]}
        />
        <CreateButton label="save" onAction={onSaveBankForm} />
      </UserMemberContentWrapper>
      {disabled && <QvipleLoader />}
    </>
  );
};

export default AddBankDetail;

const onBankValidation = (banks, extraQuery) => {
  const errors = {};
  for (let obj in banks) {
    if (
      obj === "finance_bank_account_number" &&
      banks["finance_bank_account_number"] !==
        banks["finance_bank_re_account_number"]
    ) {
      errors[
        "finance_bank_re_account_number"
      ] = `form_account_dose_not_match_label`;
    } else if (
      obj === "finance_bank_upi_id" &&
      banks["finance_bank_upi_id"] !== banks["finance_bank_re_upi_id"]
    ) {
      errors["finance_bank_re_upi_id"] = "upi_id_dose_not_match_label";
    } else {
      if (!banks[obj]) errors[obj] = `* required`;
    }
  }
  if (!extraQuery?.flow_id) errors["flow_id"] = `flow_id is required`;
  return errors;
};
const onBankValidationEdit = (banks) => {
  const errors = {};
  for (let obj in banks) {
    if (
      obj === "finance_bank_account_number" &&
      banks["finance_bank_account_number"] !==
        banks["finance_bank_re_account_number"]
    ) {
      errors[
        "finance_bank_re_account_number"
      ] = `form_account_dose_not_match_label`;
    } else if (
      obj === "finance_bank_upi_id" &&
      banks["finance_bank_upi_id"] !== banks["finance_bank_re_upi_id"]
    ) {
      errors["finance_bank_re_upi_id"] = "upi_id_dose_not_match_label";
    } else {
      if (!banks[obj]) errors[obj] = `* required`;
    }
  }
  return errors;
};
