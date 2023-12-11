import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import PopupWrapper from "../FeesStructure/PopupWrapper";
import { debounce } from "lodash";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./Deposit.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import {
  useGetMasterDepositAllByFinance,
  useRefundDepositByFinance,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import { Notfication } from "../../../../../validation/Snackbar";
import PaymentModeType from "../../StaffAdmisionAdmin/AdmissionApplicationRequest/AdmissionSelected/SelectedProcess/PaymentModeType";

const RefundStudentList = ({ onClose, fmid, onRefecthParent }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [governmentList, setGovernmentList] = useState([]);
  const [search, setSearch] = useState("");
  const [refundForm, setRefundForm] = useState("");
  const [payData, setPayData] = useState({
    amount: "",
    mode: "",
    fee_payment_mode: "",
    fee_payment_amount: "",
    transaction_date: "",
    fee_bank_name: "",
    fee_bank_holder: "",
    fee_utr_reference: "",
  });
  const [filled, setFilled] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const [refundDepositByFinance] = useRefundDepositByFinance();
  const { getMasterDepositAllByFinance, getMasterDepositAllByFinanceRefetch } =
    useGetMasterDepositAllByFinance({
      data: { search: search, page: page, limit: 10, fmid: fmid },
      skip: !fmid,
    });
  useEffect(() => {
    if (fmid) {
      setShowingDataLoading(true);
      getMasterDepositAllByFinanceRefetch();
    }
  }, [fmid, page, search, getMasterDepositAllByFinanceRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (search) {
      setGovernmentList(getMasterDepositAllByFinance?.all_students);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setGovernmentList(getMasterDepositAllByFinance?.all_students);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getMasterDepositAllByFinance?.all_students) {
          setGovernmentList((prevState) =>
            [
              ...new Set(
                [
                  ...prevState,
                  ...getMasterDepositAllByFinance?.all_students,
                ]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getMasterDepositAllByFinance?.all_students?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getMasterDepositAllByFinance?.all_students?.length === 10)
      setState(true);
    else setState(false);
  }, [getMasterDepositAllByFinance?.all_students]);

  const debounceState = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );
  const onSearchEvent = (e) => {
    debounceState(e.target.value);
  };

  const onBackWithArrowLeft = () => {
    setRefundForm("");
  };

  const onAmountChange = (e) => {
    setPayData((prev) => ({
      ...prev,
      amount: +e.target.value,
      fee_payment_amount: +e.target.value,
    }));
  };
  const onInputChange = (val) => {
    setPayData((prev) => ({
      ...prev,
      mode: val === "By Bank" ? "Online" : "Offline",
      fee_payment_mode: val,
    }));
  };

  const onValidation = (collectPayment) => {
    const errors = {};
    for (let obj in collectPayment) {
      if (
        obj === "fee_bank_name" ||
        obj === "fee_bank_holder" ||
        obj === "fee_utr_reference" ||
        obj === "amount" ||
        obj === "transaction_date" ||
        obj === "mode"
      ) {
      } else {
        if (!collectPayment[obj]) {
          errors[obj] = `${obj} is required!`;
        } else {
          if (obj === "fee_payment_amount") {
            if (collectPayment[obj] > refundForm?.deposit_pending_amount) {
              setNotificationState({
                msg: "You can not enter amount greater than Deposit amount",
                run: true,
              });
              errors["fee_payment_amount"] = `${obj} is required!`;
            } else {
            }
          }
        }
      }
    }
    return errors;
  };

  const onRefundedThenRefetch = () => {
    setPage(1);
    setRefetchStatus(true);
    getMasterDepositAllByFinanceRefetch();
  };
  const onConfirm = () => {
    const validation = onValidation(payData);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      refundDepositByFinance({
        fmid: fmid,
        sid: refundForm?._id,
        refundDeposit: payData,
      })
        .then(() => {
          onRefundedThenRefetch();
          onRefecthParent();
          onBackWithArrowLeft();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <PopupWrapper onClose={onClose}>
      {!refundForm && (
        <div className={style.student_container_modal}>
          <div
            className={style.with_search}
            style={{
              marginTop: "1rem",
              width: "100%",
              border: "0.4px solid rgba(0, 0, 0, 0.15)",
              borderRadius: "6px",
              marginBottom: "0.3rem",
            }}
          >
            <div
              className={style.search_container_input}
              style={{
                width: "100%",
              }}
            >
              <img
                className={style.searchIcon}
                alt="search icon"
                src="/images/search-dash-icon.svg"
              />
              <input
                type="text"
                placeholder="Search Student..."
                style={{
                  width: "100%",
                }}
                onChange={onSearchEvent}
              />
            </div>
          </div>

          {governmentList?.map((student, index) =>
            governmentList?.length === index + 1 ? (
              <section
                className={style.student_container}
                title="Refund deposit"
                key={student?._id}
                ref={ref}
                onClick={() => setRefundForm(student)}
              >
                <img
                  src={
                    student.photoId !== "1"
                      ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                      : "/images/member_tab/class/default_avatar.svg"
                  }
                  alt="student avatar"
                />
                <div className={style.conainter_main}>
                  <div className={style.student_container_name}>
                    <h6>{`${student?.studentFirstName} ${
                      student?.studentMiddleName
                        ? student?.studentMiddleName
                        : ""
                    } ${student?.studentLastName}`}</h6>
                    <h6 className={style.student_container_gr}>
                      {t("rs")}. {student?.deposit_pending_amount ?? 0}
                    </h6>
                  </div>
                  <div className={style.student_container_name}>
                    <h6>
                      {t("gr_number")}
                      {student?.studentGRNO ?? ""} {", "}
                      {student?.department?.dName ?? ""}
                    </h6>
                    <p className={style.student_container_gr}>
                      {t("pending_deposit")}
                    </p>
                  </div>
                </div>
              </section>
            ) : (
              <section
                className={style.student_container}
                title="Refund deposit"
                key={student?._id}
                onClick={() => setRefundForm(student)}
              >
                <img
                  src={
                    student.photoId !== "1"
                      ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                      : "/images/member_tab/class/default_avatar.svg"
                  }
                  alt="student avatar"
                />
                <div className={style.conainter_main}>
                  <div className={style.student_container_name}>
                    <h6>{`${student?.studentFirstName} ${
                      student?.studentMiddleName
                        ? student?.studentMiddleName
                        : ""
                    } ${student?.studentLastName}`}</h6>
                    <h6 className={style.student_container_gr}>
                      {t("rs")}. {student?.deposit_pending_amount ?? 0}
                    </h6>
                  </div>
                  <div className={style.student_container_name}>
                    <h6>
                      {t("gr_number")}
                      {student?.studentGRNO ?? ""} {", "}
                      {student?.department?.dName ?? ""}
                    </h6>
                    <p className={style.student_container_gr}>
                      {t("pending_deposit")}
                    </p>
                  </div>
                </div>
              </section>
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      )}

      {refundForm && (
        <div className={style.student_container_modal}>
          <section className={style.moderator_container_title}>
            <img
              src="/images/arrow-left-fees-icon.svg"
              onClick={onBackWithArrowLeft}
              alt="go to previous tab"
              title="Go Back"
              style={{
                cursor: "pointer",
              }}
            />
            <div className={style.with_search}>
              <h6>{t("refund_deposit")}</h6>
            </div>
          </section>
          <BorderBottom
            customStyle={{
              width: "100%",
            }}
          />
          <div
            className={style.unused_container_text_inner}
            style={{
              marginTop: "1rem",
            }}
          >
            <h6>{t("pending_deposit")}</h6>
            <h6>
              {t("rs")} {refundForm?.deposit_pending_amount ?? 0}
            </h6>
          </div>
          {/* <div className={style.unused_container_text_inner}>
            <h6>{t("remaining_fees")}</h6>
            <h6>
              {t("rs")} {0}
            </h6>
          </div> */}
          <PaymentModeType
            paymentHeading={t("payment_type_mode")}
            paymentHeadingPlaceholder={t("refund_cash_bank")}
            onInputChange={onInputChange}
            errorShow={filled["fee_payment_mode"]}
            openAs={"DEPOSIT_REFUND_LIST"}
          />
          <JoinFormInput
            labelText={t("amount")}
            name={"fee_payment_amount"}
            type={"tel"}
            value={payData?.fee_payment_amount}
            onChange={onAmountChange}
            placeholder={t("please_enter_amount_paid")}
            errorShow={filled["fee_payment_amount"]}
          />
          <button
            className={style.applicable_to_btn}
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              justifyContent: "center",
            }}
            onClick={onConfirm}
          >
            {t("confirm")}
          </button>
          {disabled && <QLoader />}
        </div>
      )}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </PopupWrapper>
  );
};

export default RefundStudentList;
