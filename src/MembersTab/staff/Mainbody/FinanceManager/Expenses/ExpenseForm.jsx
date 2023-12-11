import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAddExpenseDataMutation } from "../../../../../services/financeAPI";
import style from "./ExpenseForm.module.css";
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

function IncomeForm({ onRefetchWhenCreateExpense, setViewIndex }) {
  const { t } = useTranslation();
  const financeAuthor = useSelector((state) => state.financeChange);
  const [expenseUpload] = useAddExpenseDataMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
  const [expenseDataQuery, setExpenseDataQuery] = useState({
    expensePaid: "",
    expenseAmount: "",
    expenseDesc: "",
    expense_quantity: "",
    expense_good_name: "",
  });

  const headSelect = (val) => {
    setDisabledId(val?._id);
    setOpenSearch(false);
    setExpenseDataQuery((prevState) => ({
      ...prevState,
      expensePaid: val?.userLegalName,
    }));
  };

  const AddExpenseQuery = (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    const formDatas = new FormData();
    if (disabledId) {
    } else formDatas.append("expensePaid", expenseDataQuery.expensePaid);
    if (activeIndex === 1) {
      formDatas.append("expense_quantity", expenseDataQuery.expense_quantity);
      formDatas.append("expense_good_name", expenseDataQuery.expense_good_name);
    }
    formDatas.append("expenseAmount", expenseDataQuery.expenseAmount);
    formDatas.append("expenseDesc", expenseDataQuery.expenseDesc);
    formDatas.append("expenseAccount", incomeData.tMode);
    formDatas.append("file", file);
    if (formDatas) {
      expenseUpload({
        fData: formDatas,
        fid: financeAuthor?.fid,
        is_inventory: activeIndex === 1 ? true : "",
        user_query: disabledId,
      })
        .then((res) => {
          if (res.data.status) {
            onRefetchWhenCreateExpense();
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
      <div className={style.expense_tab}>
        <h6
          className={
            activeIndex === 0
              ? `${style.expense_tabh6_active} ${style.expense_tabh6}`
              : style.expense_tabh6
          }
          onClick={() => setActiveIndex(0)}
        >
          Nominal Expenses
        </h6>
        <h6
          className={
            activeIndex === 1
              ? `${style.expense_tabh6_active} ${style.expense_tabh6}`
              : style.expense_tabh6
          }
          onClick={() => setActiveIndex(1)}
        >
          Assets / Inventory
        </h6>
      </div>
      {/* <div className={style.top}>Add Expenditure</div> */}
      <form onSubmit={AddExpenseQuery}>
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
          {activeIndex === 1 && (
            <>
              <div className={style.row}>
                <h6>{t("name_of_good")}</h6>
                <input
                  type="text"
                  placeholder={t("name_of_good_placeholder")}
                  name="expense_good_name"
                  value={expenseDataQuery.expense_good_name}
                  onChange={(e) =>
                    setExpenseDataQuery({
                      ...expenseDataQuery,
                      expense_good_name: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className={style.row}>
                <h6>{t("quantity_of_goods")}</h6>
                <input
                  type="number"
                  placeholder={t("quantity_of_goods_placeholder")}
                  name="expense_quantity"
                  value={expenseDataQuery.expense_quantity}
                  onChange={(e) =>
                    setExpenseDataQuery({
                      ...expenseDataQuery,
                      expense_quantity: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </>
          )}

          <div className={style.row}>
            <h6>{t("amount")}</h6>
            <input
              type="number"
              placeholder={t("enter_amount")}
              name="expenseAmount"
              value={expenseDataQuery.expenseAmount}
              onChange={(e) =>
                setExpenseDataQuery({
                  ...expenseDataQuery,
                  expenseAmount: e.target.value,
                })
              }
              required
            />

            {/* <span className={style.errorspan}>{formErrors?.name}</span> */}
          </div>

          <div className={style.row}>
            <h6>
              {t("paid_to")}
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
              placeholder={t("paid_to_user")}
              name="expensePaid"
              value={expenseDataQuery.expensePaid}
              onChange={(e) =>
                setExpenseDataQuery({
                  ...expenseDataQuery,
                  expensePaid: e.target.value,
                })
              }
              required
            />

            {/* <span className={style.errorspan}>{formErrors?.name}</span> */}
          </div>

          <div className={style.row}>
            <h6>{t("description")}</h6>

            <textarea
              className={style.postTextarea}
              type="text"
              name="expenseDesc"
              placeholder={t("description_details")}
              value={expenseDataQuery.expenseDesc}
              onChange={(e) =>
                setExpenseDataQuery({
                  ...expenseDataQuery,
                  expenseDesc: e.target.value,
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
        {openSearch && (
          <SearchUniversalUser
            onClose={() => setOpenSearch(false)}
            title="Search User"
            disabledId={disabledId}
            assignHead={openSearch}
            headSelect={headSelect}
          />
        )}
      </form>
      {disabled && <QLoader />}
    </div>
  );
}

export default IncomeForm;
