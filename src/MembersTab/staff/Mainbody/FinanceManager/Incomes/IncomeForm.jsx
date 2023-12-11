import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAddIncomeDataMutation } from "../../../../../services/financeAPI";
import style from "./IncomeForm.module.css";
import SearchUniversalUser from "../SearchUniversalUser/SearchUniversalUser";
import QLoader from "../../../../../Loader/QLoader";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  right: "0",
  top: "2.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({ setIncomeData, open, onClose, incomeData, setIsOpen }) {
  const { t } = useTranslation();
  if (!open) return null;

  // console.info(e.target.firstChild)
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.options}>
        <div
          className={style.option}
          onClick={() => {
            setIncomeData({ ...incomeData, tMode: "By Cash" });
            setIsOpen(false);
          }}
        >
          {t("by_cash")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setIncomeData({ ...incomeData, tMode: "By Bank" });
            setIsOpen(false);
          }}
        >
          {t("by_bank")}
        </div>
      </div>
    </>
  );
}

function IncomeForm({ onRefetchWhenCreateIncome, setViewIndex }) {
  const { t } = useTranslation();
  const financeAuthor = useSelector((state) => state.financeChange);
  const [incomeUpload] = useAddIncomeDataMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [disabledId, setDisabledId] = useState("");
  const [disabled, setDisabled] = useState(false);

  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });
  const [incomeData, setIncomeData] = useState({
    tMode: "",
  });
  const [file, setFile] = useState("");

  const saveFile = (e) => {
    setFile(() => e.target.files[0]);
  };
  const [incomeDataQuery, setIncomeDataQuery] = useState({
    incomeFrom: "",
    incomeAmount: "",
    incomePurpose: "",
    incomeDesc: "",
  });

  const headSelect = (val) => {
    setDisabledId(val?._id);
    setOpenSearch(false);
    setIncomeDataQuery((prevState) => ({
      ...prevState,
      incomeFrom: val?.userLegalName,
    }));
  };
  const AddIncomeQuery = (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    const formDatas = new FormData();
    formDatas.append("incomeAmount", incomeDataQuery.incomeAmount);
    if (disabledId) {
    } else formDatas.append("incomeFrom", incomeDataQuery.incomeFrom);
    formDatas.append("incomeDesc", incomeDataQuery.incomeDesc);
    formDatas.append("incomeAccount", incomeData.tMode);
    formDatas.append("file", file);

    if (formDatas) {
      incomeUpload({
        fData: formDatas,
        fid: financeAuthor?.fid,
        user_query: disabledId,
      })
        .then((res) => {
          if (res.data.status) {
            onRefetchWhenCreateIncome();
            setViewIndex(0);
            setDisabled((pre) => !pre);
          }
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  return (
    <div className={style.incomeForm}>
      <div className={style.top}>{t("add_receipt")}</div>

      <form onSubmit={AddIncomeQuery}>
        <div className={style.mid}>
          <div className={style.row}>
            <h6>{t("select_transaction_mode")}</h6>
            <div className={style.input} style={BUTTON_WRAPPER_STYLES}>
              <div>
                {incomeData?.tMode !== "" ? (
                  <h6 onClick={() => setIsOpen(true)}>{incomeData.tMode}</h6>
                ) : (
                  <h6 onClick={() => setIsOpen(true)}>
                    {" "}
                    {t("please_select_transaction_mode")}
                  </h6>
                )}
                <img
                  className={style.down}
                  src="/images/downn-icon.svg"
                  alt=""
                />
              </div>
              <Options
                open={isOpen}
                onClose={() => setIsOpen(false)}
                setIncomeData={setIncomeData}
                incomeData={incomeData}
                setIsOpen={setIsOpen}
              />
            </div>
          </div>

          <div className={style.row}>
            <h6>{t("amount")}</h6>

            <input
              type="number"
              name="incomeAmount"
              min="1"
              placeholder={t("enter_amount")}
              value={incomeDataQuery.incomeAmount}
              onChange={(e) =>
                setIncomeDataQuery({
                  ...incomeDataQuery,
                  incomeAmount: e.target.value,
                })
              }
              required
            />

            {/* <span className={style.errorspan}>{formErrors?.name}</span> */}
          </div>
          <div className={style.row}>
            <h6>
              {t("from")}{" "}
              <span
                className={style.row_search}
                onClick={() => setOpenSearch(true)}
              >
                <img
                  style={{ width: "16px", height: "16px" }}
                  src="/images/search-icon.svg"
                  alt="search icon"
                />
                Search & Select
              </span>
            </h6>

            <input
              type="text"
              name="incomeFrom"
              placeholder={t("enter_income_from")}
              value={incomeDataQuery.incomeFrom}
              onChange={(e) => {
                setIncomeDataQuery({
                  ...incomeDataQuery,
                  incomeFrom: e.target.value,
                });
                setDisabledId("");
              }}
              required
            />

            {/* <span className={style.errorspan}>{formErrors?.name}</span> */}
          </div>

          <div className={style.row}>
            <h6>{t("description")}</h6>

            <textarea
              className={style.postTextarea}
              type="text"
              name="incomeDesc"
              placeholder={t("description_details")}
              value={incomeDataQuery.incomeDesc}
              onChange={(e) =>
                setIncomeDataQuery({
                  ...incomeDataQuery,
                  incomeDesc: e.target.value,
                })
              }
            />

            {/* <span className={style.errorspan}>{formErrors?.name}</span> */}
          </div>

          <div className={style.row}>
            <h6>{t("ack_rcpt")}</h6>

            <input
              type="file"
              className={style.aadhar}
              name="file"
              onChange={saveFile}
            />
          </div>

          <button type="submit" className={style.btn}>
            {t("save_receipt")}
          </button>
        </div>
      </form>
      {openSearch && (
        <SearchUniversalUser
          onClose={() => setOpenSearch(false)}
          title="Search User"
          disabledId={disabledId}
          assignHead={openSearch}
          headSelect={headSelect}
        />
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default IncomeForm;
