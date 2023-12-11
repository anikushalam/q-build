import React, { useState } from "react";
import style from "../AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormTextArea from "../../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import JoinFormFile from "../../../../../../JoiningForm/Student/Form/JoinFormFile";
import { useFileUpload } from "../../../../../../hooks/authentication-api";
import QLoader from "../../../../../../Loader/QLoader";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import {
  useAddScholarshipFundCorpusAdmission,
  useAddMoreScholarshipFundCorpusAdmission,
} from "../../../../../../hooks/member_tab/admission-api";
import SearchUniversalUser from "../../../FinanceManager/SearchUniversalUser/SearchUniversalUser";
const AddCorpus = ({ onClose, sid, admissionId, onRefetchWhenAdd, fcid }) => {
  const { t } = useTranslation();
  const [income, setIncome] = useState({
    incomeAccount: "",
    incomeAmount: "",
    incomeFrom: "",
    income_utr: "",
    incomeDesc: "",
    incomeAck: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addScholarshipFundCorpusAdmission] =
    useAddScholarshipFundCorpusAdmission();
  const [addMoreScholarshipFundCorpusAdmission] =
    useAddMoreScholarshipFundCorpusAdmission();
  const [disabledId, setDisabledId] = useState("");
  const [openSearch, setOpenSearch] = useState(false);

  const onInputChange = (e) => {
    if (e.target.name === "incomeAmount") {
      setIncome((prev) => ({
        ...prev,
        [e.target.name]: +e.target.value,
      }));
    } else {
      setIncome((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const onSelect = (val) => {
    setIncome((prev) => ({
      ...prev,
      incomeAccount: val,
    }));
  };
  const headSelect = (val) => {
    setDisabledId(val?._id);
    setOpenSearch(false);
    setIncome((prevState) => ({
      ...prevState,
      incomeFrom: val?.userLegalName,
    }));
  };
  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          setIncome((prev) => ({
            ...prev,
            incomeAck: res.data?.imageKey,
          }));
          setDisabled((pre) => !pre);
        } else {
          setDisabled((pre) => !pre);
        }
      })
      .catch({});
  };

  const onSaveEntry = () => {
    setDisabled((pre) => !pre);
    if (fcid) {
      addMoreScholarshipFundCorpusAdmission({
        fcid: fcid,
        user_query: disabledId,
        addCorpus: {
          incomeAccount: income.incomeAccount,
          incomeAmount: income.incomeAmount,
          incomeFrom: disabledId ? "" : income.incomeFrom,
          income_utr: income.income_utr,
          incomeDesc: income.incomeDesc,
          incomeAck: income.incomeAck,
        },
      })
        .then(() => {
          onRefetchWhenAdd();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    } else {
      addScholarshipFundCorpusAdmission({
        aid: admissionId,
        sid: sid,
        user_query: disabledId,
        addCorpus: {
          incomeAccount: income.incomeAccount,
          incomeAmount: income.incomeAmount,
          incomeFrom: disabledId ? "" : income.incomeFrom,
          income_utr: income.income_utr,
          incomeDesc: income.incomeDesc,
          incomeAck: income.incomeAck,
        },
      })
        .then(() => {
          onRefetchWhenAdd();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.assign_role_container}>
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t("account_income")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <section
          style={{
            padding: "0.8rem",
          }}
        >
          <CustomNormalSelectInput
            selectLabel={t("select_tr_mode")}
            selectedValue={t("select_tr_mode_placeholder")}
            options={["By Bank", "By Cash"]}
            onClick={onSelect}
            value={income.incomeAccount}
          />
          <JoinFormInput
            labelText={t("amount")}
            placeholder={t("amount_placeholder")}
            name={"incomeAmount"}
            value={income.incomeAmount}
            onChange={onInputChange}
          />

          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "3%",
                top: "7%",
              }}
              onClick={() => setOpenSearch(true)}
            >
              <span className={style.row_search}>
                {" "}
                <img
                  style={{ width: "16px", height: "16px" }}
                  src="/images/search-icon.svg"
                  alt="search icon"
                />
                Search & Select
              </span>
            </div>
            <JoinFormInput
              labelText={t("from_corpus")}
              placeholder={t("from_corpus_placeholder")}
              value={income.incomeFrom}
              onChange={onInputChange}
              name="incomeFrom"
            />
          </div>
          {income.incomeAccount === "By Bank" && (
            <JoinFormInput
              labelText={t("transaction_utr")}
              placeholder={t("transaction_utr_placeholder")}
              value={income.income_utr}
              onChange={onInputChange}
              name="income_utr"
            />
          )}
          <JoinFormTextArea
            labelText={t("description_optional")}
            placeholder={t("description_optional_placeholder")}
            value={income.incomeDesc}
            onChange={onInputChange}
            name="incomeDesc"
          />
          <JoinFormFile
            labelText={t("corpus_acknownledge")}
            name="incomeAck"
            value={income.incomeAck ? { originalName: "Acknownledge" } : ""}
            onChange={onFileUpload}
          />
          <button className={style.save_entry} onClick={onSaveEntry}>
            {t("save_entry")}
          </button>
        </section>
      </div>
      {disabled && <QLoader />}
      {openSearch && (
        <SearchUniversalUser
          onClose={() => setOpenSearch(false)}
          title="Search User"
          disabledId={disabledId}
          assignHead={openSearch}
          headSelect={headSelect}
        />
      )}
    </PopupWrapper>
  );
};

export default AddCorpus;
