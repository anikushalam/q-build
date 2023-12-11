import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import {
  useAddBankByFinance,
  useFinanceDetailManager,
} from "../../../../../hooks/member_tab/finance-api";
import JoinFormFile from "../../../../../JoiningForm/Student/Form/JoinFormFile";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import style from "./BankDetails.module.css";
import SelectApplicable from "./SelectApplicable";

const AddBankForm = ({ onRefetch, openBankMenu, openAs, onClose, onEdit }) => {
  const { t } = useTranslation();
  const fid = useSelector((state) => state.financeChange.fid);
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [openApplicable, setOpenApplicable] = useState(false);
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
  const [previousKey, setPreviousKey] = useState("");
  const [oneFileUpload] = useFileUpload();
  const [addBankByFinance] = useAddBankByFinance();

  const { financeDetailManager, financeDetailManagerRefetch } =
    useFinanceDetailManager({
      data: {
        fid: fid,
        mod_id: "",
      },
      skip: !fid,
    });
  useEffect(() => {
    if (fid) financeDetailManagerRefetch();
  }, [fid, financeDetailManagerRefetch]);
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

  const onValidation = (banks, extraQuery) => {
    const errors = {};
    for (let obj in banks) {
      if (
        obj === "finance_bank_account_number" &&
        banks["finance_bank_account_number"] !==
          banks["finance_bank_re_account_number"]
      ) {
        errors["finance_bank_re_account_number"] = `${t(
          "form_account_dose_not_match_label"
        )}`;
      } else if (
        obj === "finance_bank_upi_id" &&
        banks["finance_bank_upi_id"] !== banks["finance_bank_re_upi_id"]
      ) {
        errors["finance_bank_re_upi_id"] = `${t(
          "upi_id_dose_not_match_label"
        )}`;
      } else {
        if (!banks[obj]) errors[obj] = `* required`;
      }
    }
    if (!extraQuery?.flow_id) errors["flow_id"] = `flow_id is required`;
    return errors;
  };

  const onValidationEdit = (banks) => {
    const errors = {};
    for (let obj in banks) {
      if (
        obj === "finance_bank_account_number" &&
        banks["finance_bank_account_number"] !==
          banks["finance_bank_re_account_number"]
      ) {
        errors["finance_bank_re_account_number"] = `${t(
          "form_account_dose_not_match_label"
        )}`;
      } else if (
        obj === "finance_bank_upi_id" &&
        banks["finance_bank_upi_id"] !== banks["finance_bank_re_upi_id"]
      ) {
        errors["finance_bank_re_upi_id"] = `${t(
          "upi_id_dose_not_match_label"
        )}`;
      } else {
        if (!banks[obj]) errors[obj] = `* required`;
      }
    }
    return errors;
  };
  const onInputChange = (e) => {
    setBankDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    setFile(e.target.files[0]);
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        setDisabled((pre) => !pre);
        if (openAs === "EDIT")
          setPreviousKey(bankDetails.finance_bank_upi_qrcode);
        setBankDetails((prev) => ({
          ...prev,
          finance_bank_upi_qrcode: res.data?.imageKey,
        }));
      })
      .catch(() => {
        setDisabled((pre) => !pre);
      });
  };

  const onSaveBankForm = () => {
    if (openAs === "EDIT") {
      const validation = onValidationEdit(bankDetails);
      let flag = false;
      for (let errField in validation) {
        flag = true;
        break;
      }
      if (flag) {
        setFilled(validation);
      } else {
        onEdit(bankDetails, previousKey);
      }
    } else {
      const validation = onValidation(bankDetails, applicableFor);
      let flag = false;
      for (let errField in validation) {
        flag = true;
        break;
      }
      if (flag) {
        setFilled(validation);
      } else {
        setDisabled((pre) => !pre);
        addBankByFinance({
          fid: fid,
          ...applicableFor,
          bankDetails: {
            ...bankDetails,
            depart_arr: applicableFor.depart_arr,
          },
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch(() => {
            setDisabled((pre) => !pre);
          });
      }
    }
  };
  const onCloseApplicable = () => {
    setOpenApplicable((pre) => !pre);
  };

  // console.info("asgfhgs financeDetail", financeDetail);
  return (
    <>
      <section className={style.add_bank_title}>
        <img src="/images/arrow-left-fees-icon.svg" onClick={onClose} alt="" />
        <h6>
          {openAs === "EDIT" ? t("update_bank_details") : t("add_bank_details")}
        </h6>
      </section>
      {openAs === "EDIT" ? (
        ""
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <button
              className={style.applicable_btn}
              onClick={onCloseApplicable}
            >
              <div>{t("account_applicable_for")}</div>
              <img src="/images/forward-right-icon.svg" alt="next step" />
            </button>
            {applicableFor.flow_name && (
              <h6 className={style.applicable_text}>
                {applicableFor.depart_arr?.length > 1
                  ? `${applicableFor.depart_arr?.length} department selected`
                  : applicableFor.flow_name}
              </h6>
            )}
          </div>
          {filled["flow_id"] && (
            <p style={{ color: "red", marginLeft: "15px" }}>
              * {t("form_require_label")}
            </p>
          )}
        </>
      )}
      <JoinFormInput
        labelText={t("bank_name")}
        placeholder={t("bank_name_placeholder")}
        name={"finance_bank_name"}
        value={bankDetails.finance_bank_name}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_name"]}
      />
      <JoinFormInput
        labelText={t("account_name")}
        placeholder={t("account_name_placeholder")}
        name={"finance_bank_account_name"}
        value={bankDetails.finance_bank_account_name}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_account_name"]}
      />
      <JoinFormInput
        labelText={t("account_number")}
        placeholder={t("account_number_placeholder")}
        name={"finance_bank_account_number"}
        value={bankDetails.finance_bank_account_number}
        type={"tel"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_name"]}
      />

      <JoinFormInput
        labelText={t("confirm_account_number")}
        placeholder={t("confirm_account_number_placeholder")}
        name={"finance_bank_re_account_number"}
        value={bankDetails.finance_bank_re_account_number}
        type={"tel"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_re_account_number"]}
        reAccount={filled["finance_bank_re_account_number"]}
      />
      <JoinFormInput
        labelText={t("ifsc_code")}
        placeholder={t("ifsc_code_placeholder")}
        name={"finance_bank_ifsc_code"}
        value={bankDetails.finance_bank_ifsc_code}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_ifsc_code"]}
      />
      <JoinFormInput
        labelText={t("address_of_bank")}
        placeholder={t("address_of_bank_placeholder")}
        name={"finance_bank_branch_address"}
        value={bankDetails.finance_bank_branch_address}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_branch_address"]}
      />
      <JoinFormInput
        labelText={t("upi_id")}
        placeholder={t("upi_id_placeholder")}
        name={"finance_bank_upi_id"}
        value={bankDetails.finance_bank_upi_id}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_upi_id"]}
      />
      <JoinFormInput
        labelText={t("confirm_upi_id")}
        placeholder={t("finance_bank_re_upi_id")}
        name={"finance_bank_re_upi_id"}
        value={bankDetails.finance_bank_re_upi_id}
        type={"text"}
        onChange={onInputChange}
        errorShow={filled["finance_bank_re_upi_id"]}
        reAccount={filled["finance_bank_re_upi_id"]}
      />
      <JoinFormFile
        labelText={t("qr_code_above_upi")}
        name={"finance_bank_upi_qrcode"}
        value={file?.name ? { originalName: file?.name } : ""}
        onChange={onFileUpload}
        errorShow={filled["finance_bank_upi_qrcode"]}
      />
      <button className={style.save_button} onClick={onSaveBankForm}>
        {t("save")}
      </button>
      {disabled && <QLoader />}
      {openApplicable && (
        <SelectApplicable
          onCloseApplicable={onCloseApplicable}
          setApplicablFor={setApplicablFor}
          instituteId={financeDetailManager?.finance?.institute?._id}
          libraryId={financeDetailManager?.finance?.institute?.library?.[0]}
          transportId={
            financeDetailManager?.finance?.institute?.transportDepart?.[0]
          }
          hostelId={financeDetailManager?.finance?.institute?.hostelDepart?.[0]}
        />
      )}
    </>
  );
};

export default AddBankForm;
